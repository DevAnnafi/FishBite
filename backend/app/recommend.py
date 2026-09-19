from datetime import datetime, timedelta

from fastapi import APIRouter, HTTPException, Query

from .services import (
    weather,
    fetch_tide_stations,
    pick_nearest_station,
    tide_predictions,
    build_forecast,
)
from .spots import fetch_nearby_spots


router = APIRouter(
    prefix="/spots",
    tags=["recommendations"],
)

# How many of the closest spots to actually score. Each one costs a NOAA
# tide-predictions call (deduped by station), so this is kept small - a
# "best spot near me right now" pick doesn't need every spot in the
# radius ranked, just a good shortlist.
CANDIDATE_LIMIT = 6


@router.get("/recommended")
async def recommended_spot(
    lat: float = Query(..., ge=-90, le=90),
    lon: float = Query(..., ge=-180, le=180),
    species: str = Query(...),
    radius_miles: float = Query(15, gt=0, le=50),
    categories: list[str] = Query(default=[]),
):
    radius_meters = radius_miles * 1609.344

    try:
        spots, _errors = await fetch_nearby_spots(lat, lon, radius_meters)
    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail=f"Fishing access service unavailable: {exc}",
        )

    if not spots:
        raise HTTPException(
            status_code=404,
            detail="No fishing spots found nearby to rank",
        )

    candidates = spots[:CANDIDATE_LIMIT]

    try:
        weather_data = await weather(lat, lon)
    except Exception as exc:
        raise HTTPException(
            status_code=502,
            detail=f"Weather unavailable: {exc}",
        )

    # Open-Meteo's "timezone=auto" hours are already local to this spot;
    # use the same offset to know what "right now" means there, rather
    # than the server's own clock/timezone.
    utc_offset = weather_data.get("utc_offset_seconds", 0) or 0
    local_now = datetime.utcnow() + timedelta(seconds=utc_offset)
    day = local_now.date().isoformat()
    current_hour_key = local_now.strftime("%Y-%m-%dT%H:00")

    stations = await fetch_tide_stations()
    tide_cache: dict[str, dict | None] = {}

    ranked = []

    for spot in candidates:
        station = pick_nearest_station(stations, spot["lat"], spot["lon"])
        tide_data = None

        if station:
            station_id = station["id"]

            if station_id not in tide_cache:
                try:
                    tide_cache[station_id] = await tide_predictions(
                        station_id, day
                    )
                except Exception:
                    tide_cache[station_id] = None

            tide_data = tide_cache[station_id]

        try:
            rows, _day_best, best_start, best_end, _explanation = (
                build_forecast(
                    weather_data,
                    species,
                    day,
                    tide_data=tide_data,
                    categories=categories,
                )
            )
        except Exception:
            # Skip a spot we couldn't score rather than failing the
            # whole recommendation.
            continue

        current_row = next(
            (r for r in rows if r["time"] == current_hour_key),
            rows[0],
        )

        ranked.append(
            {
                "id": spot["id"],
                "name": spot["name"],
                "asset": spot.get("asset"),
                "facility": spot.get("facility"),
                "distance_miles": spot["distance_miles"],
                "lat": spot["lat"],
                "lon": spot["lon"],
                "source": spot.get("source"),
                "current_score": current_row["score"],
                "current_time_label": current_row["time_label"],
                "tide": current_row["tide"],
                "best_start": best_start,
                "best_end": best_end,
            }
        )

    if not ranked:
        raise HTTPException(
            status_code=502,
            detail="Could not score any nearby spots right now",
        )

    ranked.sort(key=lambda r: r["current_score"], reverse=True)

    return {
        "species": species,
        "date": day,
        "current_time_label": ranked[0]["current_time_label"],
        "recommended": ranked[0],
        "alternatives": ranked[1:],
    }