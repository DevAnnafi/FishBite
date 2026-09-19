import asyncio

import httpx
from fastapi import APIRouter, HTTPException, Query

from .geo import haversine_miles


router = APIRouter(
    prefix="/spots",
    tags=["spots"],
)


DEC_LAYER = (
    "https://gisservices.dec.ny.gov/arcgis/rest/services/"
    "dec_backcountry_features/MapServer/0/query"
)


FISHING_ASSETS = (
    "'FISHING PIER',"
    "'FISHING PLATFORM',"
    "'FISHING ACCESS SITE'"
)

# NYC Dept. of City Planning's Waterfront Access Map - "NYC Saltwater
# Fishing Sites" layer. This is a curated list of the public piers, parks,
# and beach access points across NYC where the city/state/federal owner
# permits shore fishing (each record also links to NYS DEC access +
# regulation info for that site), which is what fills the gap the DEC
# backcountry-lands layer above leaves for NYC's own waterfront - that
# layer only covers DEC-managed state lands, not municipal parks/beaches.
NYC_WATERFRONT_FISHING_LAYER = (
    "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/"
    "nywpaa_saltwaterfishingsites/FeatureServer/0/query"
)


async def _arcgis_query(client: httpx.AsyncClient, url: str, params: dict) -> dict:
    response = await client.get(url, params=params)
    response.raise_for_status()
    payload = response.json()

    if "error" in payload:
        raise RuntimeError(
            payload["error"].get("message", "ArcGIS query failed")
        )

    return payload


async def _query_dec_spots(
    client: httpx.AsyncClient,
    lat: float,
    lon: float,
    radius_meters: float,
) -> list[dict]:
    """NYSDEC-managed piers/platforms/access sites on state lands."""

    params = {
        "where": f"ASSET IN ({FISHING_ASSETS})",
        "geometry": f"{lon},{lat}",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326",
        "spatialRel": "esriSpatialRelIntersects",
        "distance": radius_meters,
        "units": "esriSRUnit_Meter",
        "outFields": (
            "OBJECTID,"
            "UNIT,"
            "FACILITY,"
            "NAME,"
            "ASSET,"
            "DESCRIP,"
            "NOTES,"
            "FACILITY_NO,"
            "REGION,"
            "OFFICE,"
            "UPDATED,"
            "PHOTO_LINK,"
            "PUBLICUSE,"
            "ACCESSIBLE,"
            "ACC_STATUS,"
            "ACC_NOTE"
        ),
        "returnGeometry": "true",
        "outSR": "4326",
        "orderByFields": "OBJECTID ASC",
        "resultRecordCount": 1000,
        "f": "json",
    }

    payload = await _arcgis_query(client, DEC_LAYER, params)

    results = []

    for feature in payload.get("features", []):
        attrs = feature.get("attributes", {})
        geometry = feature.get("geometry") or {}

        spot_lon = geometry.get("x")
        spot_lat = geometry.get("y")

        if spot_lat is None or spot_lon is None:
            continue

        results.append(
            {
                "id": f"dec-{attrs.get('OBJECTID')}",
                "name": (
                    attrs.get("NAME")
                    or attrs.get("FACILITY")
                    or attrs.get("ASSET")
                    or "Fishing Access"
                ),
                "facility": attrs.get("FACILITY"),
                "asset": attrs.get("ASSET"),
                "description": attrs.get("DESCRIP"),
                "notes": attrs.get("NOTES"),
                "unit": attrs.get("UNIT"),
                "office": attrs.get("OFFICE"),
                "region": attrs.get("REGION"),
                "accessible": attrs.get("ACCESSIBLE"),
                "access_status": attrs.get("ACC_STATUS"),
                "access_note": attrs.get("ACC_NOTE"),
                "photo_url": attrs.get("PHOTO_LINK"),
                "lat": spot_lat,
                "lon": spot_lon,
                "source": "NYSDEC Fishing Access / Back Country Features",
            }
        )

    return results


async def _query_nyc_waterfront_spots(
    client: httpx.AsyncClient,
    lat: float,
    lon: float,
    radius_meters: float,
) -> list[dict]:
    """
    NYC's own curated list of public piers, parks, and beach access points
    (city/state/federally owned) where shore fishing is permitted along
    the city waterfront - fills in what the DEC layer above misses, since
    that layer only covers DEC-managed state lands, not NYC Parks/city
    waterfront property.
    """

    params = {
        "where": "1=1",
        "geometry": f"{lon},{lat}",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326",
        "spatialRel": "esriSpatialRelIntersects",
        "distance": radius_meters,
        "units": "esriSRUnit_Meter",
        "outFields": "OBJECTID,Site,Ownership,Link",
        "returnGeometry": "true",
        "outSR": "4326",
        "resultRecordCount": 1000,
        "f": "json",
    }

    payload = await _arcgis_query(
        client, NYC_WATERFRONT_FISHING_LAYER, params
    )

    results = []

    for feature in payload.get("features", []):
        attrs = feature.get("attributes", {})
        geometry = feature.get("geometry") or {}

        spot_lon = geometry.get("x")
        spot_lat = geometry.get("y")

        if spot_lat is None or spot_lon is None:
            continue

        results.append(
            {
                "id": f"wam-{attrs.get('OBJECTID')}",
                "name": attrs.get("Site") or "Public Fishing Site",
                "facility": attrs.get("Ownership"),
                "asset": "Pier / Park / Beach Access",
                "description": attrs.get("Link"),
                "notes": None,
                "unit": None,
                "office": None,
                "region": None,
                "accessible": None,
                "access_status": None,
                "access_note": None,
                "photo_url": None,
                "lat": spot_lat,
                "lon": spot_lon,
                "source": "NYC Waterfront Access Map (NYC Dept. of City Planning)",
            }
        )

    return results


async def fetch_nearby_spots(
    lat: float,
    lon: float,
    radius_meters: float,
) -> tuple[list[dict], list[str]]:
    """
    Query both spot sources concurrently, merge, and sort by distance.
    Shared by /spots/nearby and /spots/recommended so both stay in sync.
    Returns (spots, errors) - errors is non-empty only for sources that
    failed; callers decide whether a partial result is acceptable.
    """

    async with httpx.AsyncClient(timeout=15) as client:
        dec_results, nyc_results = await asyncio.gather(
            _query_dec_spots(client, lat, lon, radius_meters),
            _query_nyc_waterfront_spots(client, lat, lon, radius_meters),
            return_exceptions=True,
        )

    results: list[dict] = []
    errors: list[str] = []

    for source_results in (dec_results, nyc_results):
        if isinstance(source_results, Exception):
            errors.append(str(source_results))
        else:
            results.extend(source_results)

    for spot in results:
        spot["distance_miles"] = round(
            haversine_miles(lat, lon, spot["lat"], spot["lon"]),
            2,
        )

    results.sort(key=lambda item: item["distance_miles"])

    return results, errors


@router.get("/nearby")
async def nearby_spots(
    lat: float = Query(
        ...,
        ge=-90,
        le=90,
    ),
    lon: float = Query(
        ...,
        ge=-180,
        le=180,
    ),
    radius_miles: float = Query(
        15,
        gt=0,
        le=50,
    ),
):
    radius_meters = radius_miles * 1609.344

    try:
        results, errors = await fetch_nearby_spots(lat, lon, radius_meters)
    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail=f"Fishing access service unavailable: {exc}",
        )

    # Only fail the whole request if BOTH sources errored - a broader,
    # more resilient spot list beats an all-or-nothing one.
    if errors and not results:
        raise HTTPException(
            status_code=502,
            detail=f"Fishing access services unavailable: {'; '.join(errors)}",
        )

    return {
        "source": "NYSDEC + NYC Waterfront Access Map",
        "center": {
            "lat": lat,
            "lon": lon,
        },
        "radius_miles": radius_miles,
        "count": len(results),
        "spots": results,
        "partial_errors": errors or None,
    }