from datetime import datetime, timedelta
import math
import httpx


OPEN_METEO = "https://api.open-meteo.com/v1/forecast"

NOAA_STATIONS = (
    "https://api.tidesandcurrents.noaa.gov/"
    "mdapi/prod/webapi/stations.json"
)

NOAA_PREDICTIONS = (
    "https://api.tidesandcurrents.noaa.gov/"
    "api/prod/datagetter"
)


async def weather(lat: float, lon: float):
    params = {
        "latitude": lat,
        "longitude": lon,
        "hourly": (
            "temperature_2m,"
            "pressure_msl,"
            "wind_speed_10m,"
            "wind_direction_10m,"
            "cloud_cover,"
            "precipitation"
        ),
        "daily": "sunrise,sunset",
        "temperature_unit": "fahrenheit",
        "wind_speed_unit": "mph",
        "timezone": "auto",
        "forecast_days": 2,
    }

    async with httpx.AsyncClient(timeout=12) as client:
        r = await client.get(OPEN_METEO, params=params)
        r.raise_for_status()
        return r.json()


async def nearest_tide_station(lat: float, lon: float):
    async with httpx.AsyncClient(timeout=12) as client:
        r = await client.get(
            NOAA_STATIONS,
            params={"type": "tidepredictions"},
        )

        if r.status_code != 200:
            return None

        stations = r.json().get("stations", [])

    best = None
    best_d = float("inf")

    for station in stations:
        if "lat" not in station or "lng" not in station:
            continue

        try:
            station_lat = float(station["lat"])
            station_lon = float(station["lng"])
        except (TypeError, ValueError):
            continue

        # Simple squared geographic distance.
        # Good enough for selecting the nearest station at this stage.
        d = (
            (station_lat - lat) ** 2
            + (station_lon - lon) ** 2
        )

        if d < best_d:
            best_d = d
            best = station

    return best


async def tide_predictions(station_id: str, day: str):
    """
    Fetch NOAA tide predictions for a calendar day.

    NOAA returns prediction timestamps in the requested local
    station timezone when using LST_LDT.
    """

    clean_day = day.replace("-", "")

    params = {
        "product": "predictions",
        "application": "FishBite",
        "begin_date": clean_day,
        "end_date": clean_day,
        "datum": "MLLW",
        "station": station_id,
        "time_zone": "lst_ldt",
        "units": "english",
        "interval": "6",
        "format": "json",
    }

    async with httpx.AsyncClient(
        timeout=15,
        follow_redirects=True,
    ) as client:

        response = await client.get(
            NOAA_PREDICTIONS,
            params=params,
        )

        # Raise an exception if NOAA actually rejected
        # the request.
        response.raise_for_status()

        data = response.json()

    # NOAA can return a JSON response containing an
    # "error" object instead of HTTP 4xx/5xx.
    if "error" in data:
        raise RuntimeError(
            f"NOAA API error: {data['error']}"
        )

    predictions = data.get("predictions", [])

    if not predictions:
        raise RuntimeError(
            "NOAA returned zero tide prediction points "
            f"for station {station_id} on {day}. "
            f"Response keys: {list(data.keys())}"
        )

    return data


def parse_noaa_tide_predictions(tide_data: dict):
    """
    Convert NOAA prediction records into:

        [(datetime, height_ft), ...]

    NOAA prediction timestamps are local station time because the
    request uses LST_LDT.
    """

    predictions = []

    for row in tide_data.get("predictions", []):
        timestamp = row.get("t")
        value = row.get("v")

        if not timestamp or value is None:
            continue

        try:
            dt = datetime.strptime(
                timestamp,
                "%Y-%m-%d %H:%M"
            )

            height_ft = float(value)

        except (ValueError, TypeError):
            continue

        predictions.append((dt, height_ft))

    predictions.sort(key=lambda x: x[0])

    return predictions


def nearest_tide_value(
    predictions: list[tuple[datetime, float]],
    target: datetime,
):
    """
    Find the NOAA prediction closest to the requested weather hour.
    """

    if not predictions:
        return None

    return min(
        predictions,
        key=lambda item: abs(item[0] - target)
    )


def tide_movement(
    predictions: list[tuple[datetime, float]],
    target: datetime,
):
    """
    Estimate how quickly the tide is moving around the requested hour.

    We compare approximately 30 minutes before and after the hour.

    Returns:
        feet/hour

    Positive = rising
    Negative = falling
    """

    if not predictions:
        return None

    before_target = target - timedelta(minutes=30)
    after_target = target + timedelta(minutes=30)

    before = nearest_tide_value(
        predictions,
        before_target,
    )

    after = nearest_tide_value(
        predictions,
        after_target,
    )

    if before is None or after is None:
        return None

    before_time, before_height = before
    after_time, after_height = after

    elapsed_hours = (
        after_time - before_time
    ).total_seconds() / 3600.0

    if elapsed_hours <= 0:
        return None

    return (after_height - before_height) / elapsed_hours


def tide_score(
    tide_height: float | None,
    tide_rate: float | None,
) -> float:
    """
    Baseline tidal contribution.

    This intentionally rewards active tidal movement rather than
    simply assuming "higher tide = better fishing".

    Maximum contribution: 14 points.
    """

    if tide_height is None or tide_rate is None:
        return 0.0

    # Stronger tidal movement generally means more water movement.
    movement = min(abs(tide_rate), 3.0)

    movement_score = movement / 3.0 * 10.0

    # Mild preference for being away from the extreme ends
    # of a tide cycle. This is deliberately small because
    # species/location-specific behavior will eventually be
    # learned from fishing-session data.
    height_bonus = 0.0

    if 0.5 <= tide_height <= 4.0:
        height_bonus = 2.0
    elif 0.0 <= tide_height <= 5.0:
        height_bonus = 1.0

    return min(
        14.0,
        movement_score + height_bonus,
    )


def astronomical_score(hour: int) -> float:
    # Baseline: dawn/dusk windows are weighted more heavily.

    if 5 <= hour <= 7 or 18 <= hour <= 20:
        return 18

    if 4 <= hour <= 8 or 17 <= hour <= 21:
        return 10

    return 3


def weather_score(
    temp_f: float,
    pressure: float | None,
    wind: float,
    rain: float,
) -> float:

    score = 20

    score += max(
        0,
        12 - abs(temp_f - 65) * 0.45
    )

    if pressure is not None:
        score += max(
            0,
            8 - abs(1013 - pressure) * 0.25
        )

    score += max(
        0,
        8 - abs(wind - 8) * 0.45
    )

    score -= min(
        10,
        rain * 2
    )

    return score


def species_factor(
    species: str,
    temp_f: float,
) -> float:

    s = species.lower()

    if "bass" in s:
        return max(
            0,
            18 - abs(temp_f - 64) * 0.4
        )

    if "fluke" in s:
        return max(
            0,
            18 - abs(temp_f - 68) * 0.45
        )

    if "bluefish" in s:
        return max(
            0,
            18 - abs(temp_f - 67) * 0.4
        )

    return 12


def build_forecast(
    w: dict,
    species: str,
    day: str,
    tide_data=None,
):

    times = w["hourly"]["time"]
    temps = w["hourly"]["temperature_2m"]
    pressures = w["hourly"]["pressure_msl"]
    winds = w["hourly"]["wind_speed_10m"]
    rain = w["hourly"]["precipitation"]

    # Parse NOAA data once rather than repeatedly.
    tide_predictions_parsed = []

    if tide_data:
        tide_predictions_parsed = (
            parse_noaa_tide_predictions(tide_data)
        )

    rows = []

    for i, ts in enumerate(times):

        if not ts.startswith(day):
            continue

        dt = datetime.fromisoformat(ts)

        # --------------------------------------------------
        # Weather / astronomical / species components
        # --------------------------------------------------

        astro = astronomical_score(dt.hour)

        weather = weather_score(
            temps[i],
            pressures[i],
            winds[i],
            rain[i],
        )

        species_component = species_factor(
            species,
            temps[i],
        )

        # --------------------------------------------------
        # Tide component
        # --------------------------------------------------

        tide_height = None
        tide_rate = None

        if tide_predictions_parsed:

            tide_point = nearest_tide_value(
                tide_predictions_parsed,
                dt,
            )

            if tide_point:
                _, tide_height = tide_point

            tide_rate = tide_movement(
                tide_predictions_parsed,
                dt,
            )

        tide_component = tide_score(
            tide_height,
            tide_rate,
        )

        # --------------------------------------------------
        # Final score
        # --------------------------------------------------

        raw = (
            astro
            + weather
            + species_component
            + tide_component
        )

        score = int(
            max(
                0,
                min(100, raw)
            )
        )

        # --------------------------------------------------
        # Human-readable tide description
        # --------------------------------------------------

        if tide_height is None:
            tide_description = (
                "Tide data unavailable"
            )

        elif tide_rate is None:
            tide_description = (
                f"{tide_height:.2f} ft"
            )

        else:

            if tide_rate > 0.05:
                direction = "rising"
            elif tide_rate < -0.05:
                direction = "falling"
            else:
                direction = "slack"

            tide_description = (
                f"{tide_height:.2f} ft, "
                f"{direction} "
                f"({abs(tide_rate):.2f} ft/hr)"
            )

        rows.append(
            {
                "time": ts,
                "score": score,
                "tide": tide_description,
                "temperature_f": temps[i],
                "wind_mph": winds[i],
                "pressure_hpa": pressures[i],
            }
        )

    if not rows:
        raise ValueError(
            "No hourly forecast for requested date"
        )

    # ------------------------------------------------------
    # Find best fishing window
    # ------------------------------------------------------

    best = max(
        rows,
        key=lambda x: x["score"]
    )

    best_dt = datetime.fromisoformat(
        best["time"]
    )

    start = best_dt - timedelta(minutes=30)
    end = best_dt + timedelta(minutes=90)

    # Windows-compatible 12-hour formatting.
    best_start = (
        start.strftime("%I:%M %p")
        .lstrip("0")
    )

    best_end = (
        end.strftime("%I:%M %p")
        .lstrip("0")
    )

    # ------------------------------------------------------
    # Explanation
    # ------------------------------------------------------

    explanation = [
        "Dawn/dusk activity window weighted higher",
        (
            f"Water/air temperature fit is estimated "
            f"around the {species} baseline"
        ),
        "Weather and pressure are included in the baseline score",
    ]

    if tide_predictions_parsed:
        explanation.append(
            "NOAA tidal height and tidal movement are included"
        )
    else:
        explanation.append(
            "NOAA tide prediction data was unavailable"
        )

    return (
        rows,
        max(r["score"] for r in rows),
        best_start,
        best_end,
        explanation,
    )