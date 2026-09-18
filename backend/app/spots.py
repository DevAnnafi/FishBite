from math import asin, cos, radians, sin, sqrt

import httpx
from fastapi import APIRouter, HTTPException, Query


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


def haversine_miles(
    lat1: float,
    lon1: float,
    lat2: float,
    lon2: float,
) -> float:
    earth_radius = 3958.7613

    p1 = radians(lat1)
    p2 = radians(lat2)

    delta_lat = radians(lat2 - lat1)
    delta_lon = radians(lon2 - lon1)

    a = (
        sin(delta_lat / 2) ** 2
        + cos(p1)
        * cos(p2)
        * sin(delta_lon / 2) ** 2
    )

    return 2 * earth_radius * asin(sqrt(a))


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

    try:
        async with httpx.AsyncClient(
            timeout=15
        ) as client:
            response = await client.get(
                DEC_LAYER,
                params=params,
            )

            response.raise_for_status()

            payload = response.json()

    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail=(
                "Fishing access service unavailable: "
                f"{exc}"
            ),
        )

    if "error" in payload:
        raise HTTPException(
            status_code=502,
            detail=payload["error"].get(
                "message",
                "DEC query failed",
            ),
        )

    results = []

    for feature in payload.get(
        "features",
        [],
    ):
        attrs = feature.get(
            "attributes",
            {},
        )

        geometry = feature.get(
            "geometry"
        ) or {}

        spot_lon = geometry.get("x")
        spot_lat = geometry.get("y")

        if (
            spot_lat is None
            or spot_lon is None
        ):
            continue

        distance = haversine_miles(
            lat,
            lon,
            spot_lat,
            spot_lon,
        )

        results.append(
            {
                "id": attrs.get(
                    "OBJECTID"
                ),
                "name": (
                    attrs.get("NAME")
                    or attrs.get("FACILITY")
                    or attrs.get("ASSET")
                    or "Fishing Access"
                ),
                "facility": attrs.get(
                    "FACILITY"
                ),
                "asset": attrs.get(
                    "ASSET"
                ),
                "description": attrs.get(
                    "DESCRIP"
                ),
                "notes": attrs.get(
                    "NOTES"
                ),
                "unit": attrs.get(
                    "UNIT"
                ),
                "office": attrs.get(
                    "OFFICE"
                ),
                "region": attrs.get(
                    "REGION"
                ),
                "accessible": attrs.get(
                    "ACCESSIBLE"
                ),
                "access_status": attrs.get(
                    "ACC_STATUS"
                ),
                "access_note": attrs.get(
                    "ACC_NOTE"
                ),
                "photo_url": attrs.get(
                    "PHOTO_LINK"
                ),
                "lat": spot_lat,
                "lon": spot_lon,
                "distance_miles": round(
                    distance,
                    2,
                ),
                "source": (
                    "NYSDEC Fishing Access / "
                    "Back Country Features"
                ),
            }
        )

    results.sort(
        key=lambda item: item[
            "distance_miles"
        ]
    )

    return {
        "source": "NYSDEC",
        "center": {
            "lat": lat,
            "lon": lon,
        },
        "radius_miles": radius_miles,
        "count": len(results),
        "spots": results,
    }