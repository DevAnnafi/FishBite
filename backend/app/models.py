from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, Field


class FishingSession(BaseModel):
    date: date
    location: str
    lat: float
    lon: float
    species: str
    method: Optional[str] = None
    bait_or_lure: Optional[str] = None
    start_time: datetime
    end_time: datetime
    bites: int = Field(default=0, ge=0)
    fish_caught: int = Field(default=0, ge=0)
    notes: Optional[str] = None
    is_test: bool = False


class ForecastHour(BaseModel):
    time: str
    score: int
    tide: str
    temperature_f: float
    wind_mph: float
    pressure_hpa: float


class ForecastRequest(BaseModel):
    lat: float
    lon: float
    species: str
    date: Optional[str] = None


class ForecastResponse(BaseModel):
    location: str
    species: str
    date: str
    score: int
    best_start: str
    best_end: str
    explanation: list[str]
    hours: list[ForecastHour]
    data_quality: str

class FishingObservation(BaseModel):
    observation_time: datetime
    bites: int = Field(default=0, ge=0)
    fish_caught: int = Field(default=0, ge=0)