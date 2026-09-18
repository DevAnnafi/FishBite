# ML roadmap

The current backend uses a transparent baseline score. Do not train a model on synthetic/fallback data.

When real observations exist, create one row per fishing session or time bucket with:
- timestamp, latitude, longitude
- species and fishing method
- tide state/current
- water temperature, salinity, clarity when available
- air temperature, pressure and pressure change
- wind speed/direction, precipitation, cloud cover
- sunrise/sunset and moon features
- bites, hookups, catches

For a first model, use gradient-boosted trees and time-based validation. Calibrate the output before presenting it as a probability.
