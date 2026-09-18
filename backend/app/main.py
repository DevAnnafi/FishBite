from datetime import date, timedelta

from .database import Base, engine, SessionLocal

from .db_models import (
    FishingSessionDB,
    FishingObservationDB,
)

from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

from .models import (
    ForecastRequest,
    ForecastResponse,
    FishingSession,
    FishingObservation,
)

from .services import (
    weather,
    nearest_tide_station,
    tide_predictions,
    build_forecast,
    parse_noaa_tide_predictions,
    nearest_tide_value,
    tide_movement,
)

from .spots import router as spots_router

app = FastAPI(
    title="FishBite API",
    version="0.1.0",
)

app.include_router(spots_router)

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/forecast", response_model=ForecastResponse)
async def forecast(req: ForecastRequest):

    day = req.date or date.today().isoformat()

    try:
        # --------------------------------------------------
        # 1. Get weather forecast
        # --------------------------------------------------

        w = await weather(
            req.lat,
            req.lon,
        )

        # --------------------------------------------------
        # 2. Find nearest NOAA tide station
        # --------------------------------------------------

        station = await nearest_tide_station(
            req.lat,
            req.lon,
        )

        tide_data = None
        tide_error = None

        # --------------------------------------------------
        # 3. Retrieve NOAA tide predictions
        # --------------------------------------------------

        if station:

            station_id = station.get("id")

            if station_id:

                try:
                    tide_data = await tide_predictions(
                        station_id,
                        day,
                    )

                except Exception as e:
                    # Keep the weather forecast usable even if
                    # NOAA fails, but preserve the actual error
                    # for data-quality reporting.
                    tide_error = str(e)

        # --------------------------------------------------
        # 4. Build forecast INCLUDING tide data
        # --------------------------------------------------

        rows, score, start, end, explanation = build_forecast(
            w,
            req.species,
            day,
            tide_data=tide_data,
        )

        # --------------------------------------------------
        # 5. Data quality / diagnostics
        # --------------------------------------------------

        if station:

            station_name = station.get(
                "name",
                station.get("id", "Unknown"),
            )

            explanation.append(
                f"Nearest NOAA tide station: {station_name}"
            )

            if tide_data:

                prediction_count = len(
                    tide_data.get("predictions", [])
                )

                if prediction_count > 0:

                    quality = (
                        "Weather + NOAA tide predictions "
                        f"integrated ({prediction_count} "
                        "NOAA prediction points)"
                    )

                else:

                    quality = (
                        "Weather + NOAA station identified; "
                        "NOAA returned no prediction points"
                    )

            elif tide_error:

                quality = (
                    "Weather forecast available; "
                    f"NOAA tide request failed: {tide_error}"
                )

            else:

                quality = (
                    "Weather + NOAA station identified; "
                    "tide data unavailable"
                )

        else:

            quality = (
                "Weather forecast available; "
                "no nearby NOAA tide station found"
            )

        # --------------------------------------------------
        # 6. Return API response
        # --------------------------------------------------

        return ForecastResponse(
            location=f"{req.lat:.3f}, {req.lon:.3f}",
            species=req.species,
            date=day,
            score=score,
            best_start=start,
            best_end=end,
            explanation=explanation,
            hours=rows,
            data_quality=quality,
        )

    except Exception as e:

        raise HTTPException(
            status_code=502,
            detail=str(e),
        )


@app.post("/sessions")
def create_session(session: FishingSession):
    db = SessionLocal()

    try:
        db_session = FishingSessionDB(
            date=session.date,
            location=session.location,
            lat=session.lat,
            lon=session.lon,
            species=session.species,
            method=session.method,
            bait_or_lure=session.bait_or_lure,
            start_time=session.start_time,
            end_time=session.end_time,
            bites=session.bites,
            fish_caught=session.fish_caught,
            notes=session.notes,
            is_test=session.is_test,
        )

        db.add(db_session)
        db.commit()
        db.refresh(db_session)

        return {
            "saved": True,
            "id": db_session.id,
            "session": session,
        }

    finally:
        db.close()

@app.get("/sessions")
def get_sessions():
    db = SessionLocal()

    try:
        sessions = (
            db.query(FishingSessionDB)
            .order_by(FishingSessionDB.start_time.desc())
            .all()
        )

        return [
            {
                "id": session.id,
                "date": session.date,
                "location": session.location,
                "lat": session.lat,
                "lon": session.lon,
                "species": session.species,
                "method": session.method,
                "bait_or_lure": session.bait_or_lure,
                "start_time": session.start_time,
                "end_time": session.end_time,
                "bites": session.bites,
                "fish_caught": session.fish_caught,
                "notes": session.notes,
            }
            for session in sessions
        ]

    finally:
        db.close()

@app.get("/sessions/{session_id}")
def get_session(session_id: int):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        return {
            "id": session.id,
            "date": session.date,
            "location": session.location,
            "lat": session.lat,
            "lon": session.lon,
            "species": session.species,
            "method": session.method,
            "bait_or_lure": session.bait_or_lure,
            "start_time": session.start_time,
            "end_time": session.end_time,
            "bites": session.bites,
            "fish_caught": session.fish_caught,
            "notes": session.notes,
        }

    finally:
        db.close()


@app.delete("/sessions/{session_id}")
def delete_session(session_id: int):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        db.delete(session)
        db.commit()

        return {
            "deleted": True,
            "id": session_id,
        }

    finally:
        db.close()

@app.post("/sessions/{session_id}/enrich")
async def enrich_session(session_id: int):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        # Fetch weather for the fishing location.
        weather_data = await weather(
            session.lat,
            session.lon,
        )

        # Find the nearest NOAA tide station.
        station = await nearest_tide_station(
            session.lat,
            session.lon,
        )

        if station is None:
            raise HTTPException(
                status_code=502,
                detail="No nearby NOAA tide station found",
            )

        # Fetch NOAA tide predictions.
        tide_data = await tide_predictions(
            station["id"],
            session.date.isoformat(),
        )

        predictions = parse_noaa_tide_predictions(
            tide_data
        )

        if not predictions:
            raise HTTPException(
                status_code=502,
                detail="NOAA returned no tide predictions",
            )

        # Build hourly weather lookup.
        weather_times = weather_data["hourly"]["time"]
        temperatures = weather_data["hourly"]["temperature_2m"]
        pressures = weather_data["hourly"]["pressure_msl"]
        winds = weather_data["hourly"]["wind_speed_10m"]

        session_weather = []

        current = session.start_time.replace(
            minute=0,
            second=0,
            microsecond=0,
        )

        end = session.end_time

        while current <= end:
            timestamp = current.strftime("%Y-%m-%dT%H:%M")

            if timestamp in weather_times:
                index = weather_times.index(timestamp)

                session_weather.append(
                    {
                        "temperature": temperatures[index],
                        "pressure": pressures[index],
                        "wind": winds[index],
                    }
                )

            current += timedelta(hours=1)

        if not session_weather:
            raise HTTPException(
                status_code=502,
                detail="No weather data matched the fishing session",
            )

        # Calculate average weather conditions.
        session.temperature_avg_f = (
            sum(x["temperature"] for x in session_weather)
            / len(session_weather)
        )

        session.pressure_avg_hpa = (
            sum(x["pressure"] for x in session_weather)
            / len(session_weather)
        )

        session.wind_avg_mph = (
            sum(x["wind"] for x in session_weather)
            / len(session_weather)
        )

        # Tide at session start/end.
        start_tide = nearest_tide_value(
            predictions,
            session.start_time,
        )

        end_tide = nearest_tide_value(
            predictions,
            session.end_time,
        )

        if start_tide:
            session.tide_start_ft = start_tide[1]

        if end_tide:
            session.tide_end_ft = end_tide[1]

        # Calculate average tidal movement across the session.
        tide_rates = []

        current = session.start_time

        while current <= session.end_time:
            rate = tide_movement(
                predictions,
                current,
            )

            if rate is not None:
                tide_rates.append(rate)

            current += timedelta(hours=1)

        if tide_rates:
            session.tide_rate_avg_ft_hr = (
                sum(tide_rates) / len(tide_rates)
            )

        session.weather_captured = True

        db.commit()
        db.refresh(session)

        return {
            "enriched": True,
            "id": session.id,
            "noaa_station": station.get(
                "name",
                station["id"],
            ),
            "conditions": {
                "temperature_avg_f": session.temperature_avg_f,
                "pressure_avg_hpa": session.pressure_avg_hpa,
                "wind_avg_mph": session.wind_avg_mph,
                "tide_start_ft": session.tide_start_ft,
                "tide_end_ft": session.tide_end_ft,
                "tide_rate_avg_ft_hr": session.tide_rate_avg_ft_hr,
            },
            "outcome": {
                "bites": session.bites,
                "fish_caught": session.fish_caught,
            },
        }

    finally:
        db.close()

@app.get("/dataset")
def get_dataset():
    db = SessionLocal()

    try:
        observations = (
            db.query(
                FishingObservationDB,
                FishingSessionDB,
            )
            .join(
                FishingSessionDB,
                FishingObservationDB.session_id
                == FishingSessionDB.id,
            )
            .filter(
                FishingObservationDB.weather_captured == True,
                FishingSessionDB.is_test == False,
            )
            .order_by(
                FishingObservationDB.observation_time.asc()
            )
            .all()
        )

        dataset = []

        for observation, session in observations:
            observation_time = observation.observation_time

            # ----------------------------------------------
            # Time features
            # ----------------------------------------------
            hour = observation_time.hour

            day_of_week = observation_time.weekday()

            day_of_year = observation_time.timetuple().tm_yday

            month = observation_time.month

            # ----------------------------------------------
            # Outcome features
            # ----------------------------------------------
            bites = observation.bites
            fish_caught = observation.fish_caught

            dataset.append(
                {
                    # --------------------------------------
                    # Identifiers
                    # --------------------------------------
                    "observation_id": observation.id,
                    "session_id": session.id,

                    # --------------------------------------
                    # Fishing context
                    # --------------------------------------
                    "date": session.date,
                    "location": session.location,
                    "lat": session.lat,
                    "lon": session.lon,
                    "species": session.species,
                    "method": session.method,
                    "bait_or_lure": session.bait_or_lure,

                    # --------------------------------------
                    # Time features
                    # --------------------------------------
                    "observation_time": observation_time,
                    "hour": hour,
                    "day_of_week": day_of_week,
                    "day_of_year": day_of_year,
                    "month": month,

                    # --------------------------------------
                    # Environmental features
                    # --------------------------------------
                    "temperature_f": observation.temperature_f,
                    "pressure_hpa": observation.pressure_hpa,
                    "wind_mph": observation.wind_mph,
                    "tide_ft": observation.tide_ft,
                    "tide_rate_ft_hr": observation.tide_rate_ft_hr,

                    # --------------------------------------
                    # Actual fishing outcomes
                    # --------------------------------------
                    "bites": bites,
                    "fish_caught": fish_caught,

                    # --------------------------------------
                    # Derived targets
                    # --------------------------------------
                    "bite_rate": bites,
                    "catch_rate": fish_caught,
                }
            )

        return {
            "rows": len(dataset),
            "features": [
                "lat",
                "lon",
                "hour",
                "day_of_week",
                "day_of_year",
                "month",
                "temperature_f",
                "pressure_hpa",
                "wind_mph",
                "tide_ft",
                "tide_rate_ft_hr",
            ],
            "targets": [
                "bite_rate",
                "catch_rate",
            ],
            "dataset": dataset,
        }

    finally:
        db.close()

@app.post("/sessions/{session_id}/observations")
def create_observation(
    session_id: int,
    observation: FishingObservation,
):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        if observation.observation_time < session.start_time:
            raise HTTPException(
                status_code=400,
                detail="Observation time is before session start",
            )

        if observation.observation_time > session.end_time:
            raise HTTPException(
                status_code=400,
                detail="Observation time is after session end",
            )

        db_observation = FishingObservationDB(
            session_id=session_id,
            observation_time=observation.observation_time,
            bites=observation.bites,
            fish_caught=observation.fish_caught,
        )

        db.add(db_observation)
        db.commit()
        db.refresh(db_observation)

        return {
            "saved": True,
            "id": db_observation.id,
            "session_id": session_id,
            "observation": observation,
        }

    finally:
        db.close()

@app.get("/sessions/{session_id}/observations")
def get_observations(session_id: int):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        observations = (
            db.query(FishingObservationDB)
            .filter(
                FishingObservationDB.session_id == session_id
            )
            .order_by(
                FishingObservationDB.observation_time.asc()
            )
            .all()
        )

        return {
            "session_id": session_id,
            "observations": [
                {
                    "id": obs.id,
                    "observation_time": obs.observation_time,
                    "bites": obs.bites,
                    "fish_caught": obs.fish_caught,
                }
                for obs in observations
            ],
        }

    finally:
        db.close()

@app.post("/sessions/{session_id}/observations/{observation_id}/enrich")
async def enrich_observation(
    session_id: int,
    observation_id: int,
):
    db = SessionLocal()

    try:
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        observation = (
            db.query(FishingObservationDB)
            .filter(
                FishingObservationDB.id == observation_id,
                FishingObservationDB.session_id == session_id,
            )
            .first()
        )

        if observation is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing observation not found",
            )

        # Retrieve weather for the fishing location.
        weather_data = await weather(
            session.lat,
            session.lon,
        )

        # Find nearest NOAA tide station.
        station = await nearest_tide_station(
            session.lat,
            session.lon,
        )

        if station is None:
            raise HTTPException(
                status_code=502,
                detail="No nearby NOAA tide station found",
            )

        # Retrieve NOAA tide predictions for the session date.
        tide_data = await tide_predictions(
            station["id"],
            session.date.isoformat(),
        )

        # Parse NOAA predictions.
        tide_points = parse_noaa_tide_predictions(
            tide_data
        )

        # Find weather values nearest to observation time.
        weather_hourly = weather_data["hourly"]
        weather_times = weather_hourly["time"]

        target_time = observation.observation_time

        target_time_str = target_time.strftime(
            "%Y-%m-%dT%H:%M"
        )

        if target_time_str in weather_times:
            weather_index = weather_times.index(
                target_time_str
            )
        else:
            # Find closest weather timestamp.
            weather_index = min(
                range(len(weather_times)),
                key=lambda i: abs(
                    datetime.fromisoformat(
                        weather_times[i]
                    ) - target_time
                ),
            )

        temperature = weather_hourly[
            "temperature_2m"
        ][weather_index]

        pressure = weather_hourly[
            "pressure_msl"
        ][weather_index]

        wind = weather_hourly[
            "wind_speed_10m"
        ][weather_index]

        # Tide height at observation time.
        tide_result = nearest_tide_value(
        tide_points,
        target_time,
        )

        tide_height = tide_result[1]

        # Tide movement around observation time.
        tide_rate = tide_movement(
            tide_points,
            target_time,
        )

        # Store environmental conditions.
        observation.temperature_f = temperature
        observation.pressure_hpa = pressure
        observation.wind_mph = wind
        observation.tide_ft = tide_height
        observation.tide_rate_ft_hr = tide_rate
        observation.weather_captured = True

        db.commit()
        db.refresh(observation)

        return {
            "enriched": True,
            "session_id": session_id,
            "observation_id": observation_id,
            "noaa_station": station["name"],
            "observation_time": observation.observation_time,
            "conditions": {
                "temperature_f": observation.temperature_f,
                "pressure_hpa": observation.pressure_hpa,
                "wind_mph": observation.wind_mph,
                "tide_ft": observation.tide_ft,
                "tide_rate_ft_hr": observation.tide_rate_ft_hr,
            },
            "outcome": {
                "bites": observation.bites,
                "fish_caught": observation.fish_caught,
            },
        }

    finally:
        db.close()

@app.post("/sessions/{session_id}/enrich-observations")
async def enrich_all_observations(session_id: int):
    db = SessionLocal()

    try:
        # --------------------------------------------------
        # 1. Load fishing session
        # --------------------------------------------------
        session = (
            db.query(FishingSessionDB)
            .filter(FishingSessionDB.id == session_id)
            .first()
        )

        if session is None:
            raise HTTPException(
                status_code=404,
                detail="Fishing session not found",
            )

        # --------------------------------------------------
        # 2. Load observations
        # --------------------------------------------------
        observations = (
            db.query(FishingObservationDB)
            .filter(
                FishingObservationDB.session_id == session_id
            )
            .order_by(
                FishingObservationDB.observation_time.asc()
            )
            .all()
        )

        if not observations:
            raise HTTPException(
                status_code=400,
                detail="No observations found for this session",
            )

        # --------------------------------------------------
        # 3. Retrieve weather once
        # --------------------------------------------------
        weather_data = await weather(
            session.lat,
            session.lon,
        )

        weather_hourly = weather_data["hourly"]
        weather_times = weather_hourly["time"]

        # --------------------------------------------------
        # 4. Find nearest NOAA station
        # --------------------------------------------------
        station = await nearest_tide_station(
            session.lat,
            session.lon,
        )

        if station is None:
            raise HTTPException(
                status_code=502,
                detail="No nearby NOAA tide station found",
            )

        # --------------------------------------------------
        # 5. Retrieve NOAA tide predictions once
        # --------------------------------------------------
        tide_data = await tide_predictions(
            station["id"],
            session.date.isoformat(),
        )

        tide_points = parse_noaa_tide_predictions(
            tide_data
        )

        # --------------------------------------------------
        # 6. Enrich every observation
        # --------------------------------------------------
        enriched = []

        for observation in observations:

            target_time = observation.observation_time

            # ----------------------------------------------
            # Find nearest weather timestamp
            # ----------------------------------------------
            target_time_str = target_time.strftime(
                "%Y-%m-%dT%H:%M"
            )

            if target_time_str in weather_times:
                weather_index = weather_times.index(
                    target_time_str
                )
            else:
                weather_index = min(
                    range(len(weather_times)),
                    key=lambda i: abs(
                        datetime.fromisoformat(
                            weather_times[i]
                        ) - target_time
                    ),
                )

            temperature = weather_hourly[
                "temperature_2m"
            ][weather_index]

            pressure = weather_hourly[
                "pressure_msl"
            ][weather_index]

            wind = weather_hourly[
                "wind_speed_10m"
            ][weather_index]

            # ----------------------------------------------
            # Tide
            # ----------------------------------------------
            tide_result = nearest_tide_value(
                tide_points,
                target_time,
            )

            tide_height = tide_result[1]

            tide_rate = tide_movement(
                tide_points,
                target_time,
            )

            # ----------------------------------------------
            # Save environmental conditions
            # ----------------------------------------------
            observation.temperature_f = temperature
            observation.pressure_hpa = pressure
            observation.wind_mph = wind
            observation.tide_ft = tide_height
            observation.tide_rate_ft_hr = tide_rate
            observation.weather_captured = True

            enriched.append(
                {
                    "id": observation.id,
                    "observation_time": observation.observation_time,
                    "temperature_f": observation.temperature_f,
                    "pressure_hpa": observation.pressure_hpa,
                    "wind_mph": observation.wind_mph,
                    "tide_ft": observation.tide_ft,
                    "tide_rate_ft_hr": observation.tide_rate_ft_hr,
                    "bites": observation.bites,
                    "fish_caught": observation.fish_caught,
                }
            )

        # --------------------------------------------------
        # 7. Commit all observations at once
        # --------------------------------------------------
        db.commit()

        return {
            "enriched": True,
            "session_id": session_id,
            "noaa_station": station["name"],
            "observations_enriched": len(enriched),
            "observations": enriched,
        }

    except HTTPException:
        raise

    except Exception:
        db.rollback()
        raise

    finally:
        db.close()