from math import asin, cos, radians, sin, sqrt


def haversine_miles(
    lat1: float,
    lon1: float,
    lat2: float,
    lon2: float,
) -> float:
    earth_radius = 3958.7613

    p1 = radians(lat1)
    p2 = radians(lat2)

    delta_lat = radians(lat2 - lat1)
    delta_lon = radians(lon2 - lon1)

    a = (
        sin(delta_lat / 2) ** 2
        + cos(p1)
        * cos(p2)
        * sin(delta_lon / 2) ** 2
    )

    return 2 * earth_radius * asin(sqrt(a))