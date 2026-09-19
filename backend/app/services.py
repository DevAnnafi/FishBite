from datetime import datetime, timedelta
import math
import httpx

from .geo import haversine_miles


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


# Beyond this distance, attaching the "nearest" NOAA tide-prediction
# station's numbers stops being meaningful - it usually means the
# requested spot is on an inland freshwater lake/river with no real tidal
# cycle at all, not that the ocean is merely far away. Showing a distant
# coastal station's tide as if it applied there would be actively wrong,
# not just imprecise, so we treat it the same as no station being found.
MAX_TIDE_STATION_DISTANCE_MILES = 75.0


async def fetch_tide_stations() -> list[dict]:
    """
    Fetch the full list of NOAA tide-prediction stations once. Callers
    that need to rank several nearby points (e.g. picking a recommended
    fishing spot) should fetch this a single time and reuse it with
    pick_nearest_station() rather than re-fetching per point.
    """

    async with httpx.AsyncClient(timeout=12) as client:
        r = await client.get(
            NOAA_STATIONS,
            params={"type": "tidepredictions"},
        )

        if r.status_code != 200:
            return []

        return r.json().get("stations", [])


def pick_nearest_station(
    stations: list[dict],
    lat: float,
    lon: float,
) -> dict | None:
    best = None
    best_distance = float("inf")

    for station in stations:
        if "lat" not in station or "lng" not in station:
            continue

        try:
            station_lat = float(station["lat"])
            station_lon = float(station["lng"])
        except (TypeError, ValueError):
            continue

        # True great-circle distance rather than raw squared degree
        # difference - degrees of longitude shrink toward the poles, so
        # the naive version can pick the wrong "nearest" station near
        # coastlines that run more east-west than north-south.
        distance = haversine_miles(
            lat,
            lon,
            station_lat,
            station_lon,
        )

        if distance < best_distance:
            best_distance = distance
            best = station

    if best is None or best_distance > MAX_TIDE_STATION_DISTANCE_MILES:
        return None

    return {
        **best,
        "distance_miles": round(best_distance, 1),
    }


async def nearest_tide_station(lat: float, lon: float):
    stations = await fetch_tide_stations()
    return pick_nearest_station(stations, lat, lon)


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


def astronomical_score(hour: int, activity_profile: str = "dawn_dusk") -> float:
    """
    Time-of-day contribution, shaped by how the target species actually
    feeds rather than one universal dawn/dusk curve for every fish.

    Profiles:
      dawn_dusk      - classic low-light feeders (most gamefish/panfish).
      nocturnal      - feeds mainly after dark (catfish, walleye, eels).
      structure_tide - light-insensitive bottom/reef feeders; flatter
                       curve so tide movement (see tide_score) drives
                       more of the swing for these species.
      daytime        - feeds through daylight hours (pelagics that hunt
                       visually, carp, tautog).
    """

    if activity_profile == "nocturnal":
        if hour >= 22 or hour <= 3:
            return 18
        if hour in (4, 5, 20, 21):
            return 10
        return 3

    if activity_profile == "structure_tide":
        if 5 <= hour <= 7 or 18 <= hour <= 20:
            return 12
        if 4 <= hour <= 8 or 17 <= hour <= 21:
            return 10
        return 8

    if activity_profile == "daytime":
        if 9 <= hour <= 16:
            return 16
        if 7 <= hour <= 8 or 17 <= hour <= 18:
            return 10
        return 4

    # dawn_dusk (default)
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


# Curated overrides for species whose feeding behavior is well documented
# and differs meaningfully from a generic "gamefish" pattern. Matched by
# substring against the lowercased species name, most-specific key first
# (checked in dict order below) so e.g. "black sea bass" hits the sea-bass
# entry rather than a generic "bass" one.
#
# Each entry: (ideal_temp_f, temp_sensitivity, activity_profile)
#   ideal_temp_f      - water/air temp proxy where the species feeds best
#   temp_sensitivity  - points lost per degree away from ideal_temp_f
#   activity_profile  - which astronomical_score() curve applies
SPECIES_NAME_OVERRIDES: list[tuple[str, tuple[float, float, str]]] = [
    ("striped bass", (62, 0.35, "dawn_dusk")),
    ("bluefish", (67, 0.40, "dawn_dusk")),
    ("weakfish", (65, 0.35, "dawn_dusk")),
    ("black sea bass", (62, 0.35, "structure_tide")),
    ("sea bass", (62, 0.35, "structure_tide")),
    ("tautog", (58, 0.40, "daytime")),
    ("scup", (62, 0.35, "structure_tide")),
    ("porgy", (62, 0.35, "structure_tide")),
    ("fluke", (68, 0.45, "structure_tide")),
    ("flounder", (66, 0.40, "structure_tide")),
    ("halibut", (52, 0.30, "structure_tide")),
    ("sole", (58, 0.30, "structure_tide")),
    ("grouper", (72, 0.30, "structure_tide")),
    ("mackerel", (63, 0.35, "dawn_dusk")),
    ("mahi-mahi", (75, 0.30, "daytime")),
    ("wahoo", (75, 0.30, "daytime")),
    ("tuna", (68, 0.30, "daytime")),
    ("bonito", (66, 0.35, "daytime")),
    ("little tunny", (66, 0.35, "daytime")),
    ("marlin", (78, 0.25, "daytime")),
    ("sailfish", (78, 0.25, "daytime")),
    ("swordfish", (65, 0.25, "nocturnal")),
    ("walleye", (60, 0.40, "nocturnal")),
    ("catfish", (75, 0.30, "nocturnal")),
    ("bullhead", (72, 0.30, "nocturnal")),
    ("eel", (68, 0.30, "nocturnal")),
    ("burbot", (45, 0.35, "nocturnal")),
    ("trout", (58, 0.50, "dawn_dusk")),
    ("char", (52, 0.50, "dawn_dusk")),
    ("northern pike", (58, 0.40, "dawn_dusk")),
    ("muskellunge", (58, 0.40, "dawn_dusk")),
    ("pickerel", (62, 0.40, "dawn_dusk")),
    ("crappie", (62, 0.40, "dawn_dusk")),
    ("bass", (64, 0.40, "dawn_dusk")),
    ("carp", (70, 0.30, "daytime")),
    ("tarpon", (75, 0.30, "dawn_dusk")),
    ("bonefish", (78, 0.30, "daytime")),
    ("permit", (78, 0.30, "daytime")),
    ("jack crevalle", (78, 0.30, "daytime")),
]

# Fallback when no name override matches: derived from the species'
# category tags (already present in the mobile catalog), so every species
# gets a behaviorally reasonable curve instead of one flat number.
CATEGORY_PROFILES: dict[str, tuple[float, float, str]] = {
    "Sharks & Rays": (68, 0.30, "nocturnal"),
    "Deep Sea": (55, 0.30, "structure_tide"),
    "Reef Fish": (76, 0.35, "structure_tide"),
    "Bottom Fish": (62, 0.30, "structure_tide"),
    "Panfish": (66, 0.40, "dawn_dusk"),
    "Migratory Fish": (63, 0.35, "dawn_dusk"),
    "Game Fish": (64, 0.40, "dawn_dusk"),
    "Brackish / Estuary": (66, 0.35, "dawn_dusk"),
    "Saltwater / Marine": (65, 0.35, "dawn_dusk"),
    "Freshwater": (66, 0.35, "dawn_dusk"),
}

# Priority order for picking one profile when a species carries several
# category tags - most behaviorally distinctive category wins.
CATEGORY_PRIORITY = [
    "Sharks & Rays",
    "Deep Sea",
    "Reef Fish",
    "Bottom Fish",
    "Panfish",
    "Migratory Fish",
    "Game Fish",
    "Brackish / Estuary",
    "Saltwater / Marine",
    "Freshwater",
]


def resolve_species_profile(
    species: str,
    categories: list[str] | None = None,
) -> tuple[float, float, str]:
    """
    Return (ideal_temp_f, temp_sensitivity, activity_profile) for a
    species: a curated name-based override when we have one, otherwise a
    profile derived from its category tags, otherwise a neutral default.
    """

    s = species.lower()

    for key, profile in SPECIES_NAME_OVERRIDES:
        if key in s:
            return profile

    for category in CATEGORY_PRIORITY:
        if categories and category in categories:
            return CATEGORY_PROFILES[category]

    return (65, 0.30, "dawn_dusk")


def species_factor(
    temp_f: float,
    ideal_temp_f: float,
    temp_sensitivity: float,
) -> float:
    return max(
        0,
        18 - abs(temp_f - ideal_temp_f) * temp_sensitivity
    )


def build_forecast(
    w: dict,
    species: str,
    day: str,
    tide_data=None,
    categories: list[str] | None = None,
):

    times = w["hourly"]["time"]
    temps = w["hourly"]["temperature_2m"]
    pressures = w["hourly"]["pressure_msl"]
    winds = w["hourly"]["wind_speed_10m"]
    rain = w["hourly"]["precipitation"]

    # Resolved once per request - the species' behavior doesn't change
    # hour to hour, only which hours score well because of it.
    ideal_temp_f, temp_sensitivity, activity_profile = (
        resolve_species_profile(species, categories)
    )

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

        astro = astronomical_score(dt.hour, activity_profile)

        weather = weather_score(
            temps[i],
            pressures[i],
            winds[i],
            rain[i],
        )

        species_component = species_factor(
            temps[i],
            ideal_temp_f,
            temp_sensitivity,
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

        # Human-readable hour label (e.g. "5pm", "12am") for display.
        # Kept separate from "time", which stays a parseable ISO string
        # because `best["time"]` below is re-parsed with fromisoformat().
        time_label = dt.strftime("%I%p").lstrip("0").lower()

        rows.append(
            {
                "time": ts,
                "time_label": time_label,
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

    profile_labels = {
        "dawn_dusk": "Dawn/dusk activity window weighted higher",
        "nocturnal": "Night/low-light hours weighted higher (this species feeds mainly after dark)",
        "structure_tide": "Time of day weighted lightly; tide movement carries more weight for this species",
        "daytime": "Daylight hours weighted higher for this species",
    }

    explanation = [
        profile_labels.get(activity_profile, profile_labels["dawn_dusk"]),
        (
            f"Water/air temperature fit is estimated around a "
            f"{ideal_temp_f:.0f}°F baseline for {species}"
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