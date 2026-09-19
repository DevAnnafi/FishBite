const API =
  process.env.EXPO_PUBLIC_API_URL || "http://192.168.1.35:8000";

async function request(path: string, options: RequestInit = {}) {
  const response = await fetch(`${API}${path}`, options);

  if (!response.ok) {
    let detail = "Request failed";

    try {
      const body = await response.json();
      detail = body.detail || detail;
    } catch {}

    throw new Error(detail);
  }

  return response.json();
}

export async function getForecast(
  lat: number,
  lon: number,
  species: string,
  date?: string,
  categories?: string[]
) {
  return request("/forecast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lat,
      lon,
      species,
      date,
      categories: categories || [],
    }),
  });
}

export async function createSession(payload: any) {
  return request("/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function getSessions() {
  return request("/sessions");
}

export async function deleteSession(id: number) {
  return request(`/sessions/${id}`, {
    method: "DELETE",
  });
}

export async function getNearbySpots(
  lat: number,
  lon: number,
  radiusMiles = 15
) {
  return request(
    `/spots/nearby?lat=${encodeURIComponent(
      lat
    )}&lon=${encodeURIComponent(
      lon
    )}&radius_miles=${encodeURIComponent(radiusMiles)}`
  );
}

export async function searchLocations(query: string) {
  return request(`/geocode/search?query=${encodeURIComponent(query)}`);
}

export async function getRecommendedSpot(
  lat: number,
  lon: number,
  species: string,
  categories: string[] = [],
  radiusMiles = 15
) {
  const categoryParams = categories
    .map((c) => `categories=${encodeURIComponent(c)}`)
    .join("&");

  return request(
    `/spots/recommended?lat=${encodeURIComponent(
      lat
    )}&lon=${encodeURIComponent(lon)}&species=${encodeURIComponent(
      species
    )}&radius_miles=${encodeURIComponent(radiusMiles)}` +
      (categoryParams ? `&${categoryParams}` : "")
  );
}

export async function getWaypoints() {
  return request("/waypoints");
}

export async function createWaypoint(payload: {
  label: string;
  lat: number;
  lon: number;
  notes?: string | null;
}) {
  return request("/waypoints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteWaypoint(id: number) {
  return request(`/waypoints/${id}`, {
    method: "DELETE",
  });
}