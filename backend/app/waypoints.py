from datetime import datetime

from fastapi import APIRouter, HTTPException

from .database import SessionLocal
from .db_models import WaypointDB
from .models import Waypoint


router = APIRouter(
    prefix="/waypoints",
    tags=["waypoints"],
)


def _serialize(waypoint: WaypointDB) -> dict:
    return {
        "id": waypoint.id,
        "label": waypoint.label,
        "lat": waypoint.lat,
        "lon": waypoint.lon,
        "notes": waypoint.notes,
        "created_at": waypoint.created_at,
    }


@router.post("")
def create_waypoint(waypoint: Waypoint):
    db = SessionLocal()

    try:
        db_waypoint = WaypointDB(
            label=waypoint.label,
            lat=waypoint.lat,
            lon=waypoint.lon,
            notes=waypoint.notes,
            created_at=datetime.utcnow(),
        )

        db.add(db_waypoint)
        db.commit()
        db.refresh(db_waypoint)

        return _serialize(db_waypoint)

    finally:
        db.close()


@router.get("")
def list_waypoints():
    db = SessionLocal()

    try:
        waypoints = (
            db.query(WaypointDB)
            .order_by(WaypointDB.created_at.desc())
            .all()
        )

        return {"waypoints": [_serialize(w) for w in waypoints]}

    finally:
        db.close()


@router.delete("/{waypoint_id}")
def delete_waypoint(waypoint_id: int):
    db = SessionLocal()

    try:
        waypoint = (
            db.query(WaypointDB)
            .filter(WaypointDB.id == waypoint_id)
            .first()
        )

        if waypoint is None:
            raise HTTPException(
                status_code=404,
                detail="Waypoint not found",
            )

        db.delete(waypoint)
        db.commit()

        return {"deleted": True, "id": waypoint_id}

    finally:
        db.close()