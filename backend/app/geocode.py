import httpx
from fastapi import APIRouter, HTTPException, Query


router = APIRouter(
    prefix="/geocode",
    tags=["geocode"],
)


# Same provider already used for weather (services.py) - free, no API
# key, and consistent with the rest of the stack.
OPEN_METEO_GEOCODING = "https://geocoding-api.open-meteo.com/v1/search"


@router.get("/search")
async def search_location(
    query: str = Query(..., min_length=2),
    count: int = Query(5, gt=0, le=10),
):
    params = {
        "name": query,
        "count": count,
        "language": "en",
        "format": "json",
    }

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.get(
                OPEN_METEO_GEOCODING,
                params=params,
            )
            response.raise_for_status()
            payload = response.json()

    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail=f"Location search unavailable: {exc}",
        )

    results = []

    for item in payload.get("results", []) or []:
        lat = item.get("latitude")
        lon = item.get("longitude")

        if lat is None or lon is None:
            continue

        parts = [item.get("name")]

        if item.get("admin1") and item.get("admin1") != item.get("name"):
            parts.append(item["admin1"])

        if item.get("country"):
            parts.append(item["country"])

        results.append(
            {
                "label": ", ".join(p for p in parts if p),
                "name": item.get("name"),
                "admin1": item.get("admin1"),
                "country": item.get("country"),
                "lat": lat,
                "lon": lon,
            }
        )

    return {
        "query": query,
        "results": results,
    }