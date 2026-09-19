# FishBite

A mobile fishing forecast app that estimates fish activity from weather, tide, astronomical data, and user fishing observations.

## Stack
- Mobile: Expo + React Native + TypeScript
- API: FastAPI + Python
- Storage: SQLite by default (easy local development), PostgreSQL-ready
- Prediction: rule-based baseline now; ML-ready feature pipeline
- Weather: Open-Meteo
- Tide: NOAA CO-OPS API for US stations

## Run locally

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Mobile
```bash
cd mobile
npm install
npx expo start
```

Set `EXPO_PUBLIC_API_URL` to your computer's LAN IP, e.g. `http://xx.xx.x.xx:8000` when testing on a phone.

The app works with a fallback forecast if the backend is unavailable, so the UI can be developed immediately.

## Important
The bite score is an activity index, not a guaranteed probability of catching a fish. The ML model should only be trained after collecting enough real fishing-session observations.
