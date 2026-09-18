from datetime import date, datetime

from sqlalchemy import Date, DateTime, Float, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from .database import Base


class FishingSessionDB(Base):
    __tablename__ = "fishing_sessions"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    date: Mapped[date] = mapped_column(Date, nullable=False)

    location: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    lat: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    lon: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    species: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    method: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    bait_or_lure: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    start_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
    )

    end_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
    )

    bites: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0,
    )

    fish_caught: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0,
    )

    notes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    temperature_avg_f: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    pressure_avg_hpa: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    wind_avg_mph: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    tide_start_ft: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    tide_end_ft: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    tide_rate_avg_ft_hr: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    weather_captured: Mapped[bool] = mapped_column(
        default=False,
        nullable=False,
    )

    is_test: Mapped[bool] = mapped_column(
    default=False,
    nullable=False,
    )

class FishingObservationDB(Base):
    __tablename__ = "fishing_observations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    session_id: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        index=True,
    )

    observation_time: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
    )

    bites: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0,
    )

    fish_caught: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0,
    )

    # Automatically captured environmental conditions
    temperature_f: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    pressure_hpa: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    wind_mph: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    tide_ft: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    tide_rate_ft_hr: Mapped[float | None] = mapped_column(
        Float,
        nullable=True,
    )

    weather_captured: Mapped[bool] = mapped_column(
        default=False,
        nullable=False,
    )