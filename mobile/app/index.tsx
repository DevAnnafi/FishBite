import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, UrlTile, PROVIDER_DEFAULT } from "react-native-maps";
import {
  getForecast,
  getNearbySpots,
  getSessions,
  createSession,
  deleteSession,
  searchLocations,
  getRecommendedSpot,
  getWaypoints,
  createWaypoint,
  deleteWaypoint,
} from "../lib/api";
import { SPECIES, SPECIES_CATEGORIES, searchSpecies, Species } from "../data/species";
import { getSpeciesTip } from "../data/speciesTips";

type Tab = "Home" | "Spots" | "Map" | "Fish" | "Log" | "History";

const COLORS = {
  ink: "#10251f",
  muted: "#65756f",
  green: "#176b52",
  light: "#eef7f3",
  border: "#dce8e3",
  white: "#ffffff",
  danger: "#b42318",
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function openDirections(lat: number, lon: number) {
  const label = encodeURIComponent("FishBite fishing spot");
  const url =
    Platform.OS === "ios"
      ? `http://maps.apple.com/?ll=${lat},${lon}&q=${label}`
      : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  Linking.openURL(url);
}

// Defined at module scope (not inside Index) so these keep a stable
// component identity across renders. If they were declared inside Index,
// every re-render (e.g. every keystroke) would create brand-new function
// references, React would treat them as new component types, and any
// TextInput nested under them would unmount/remount and lose focus.
const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <View style={styles.header}>
    <Text style={styles.brand}>FishBite</Text>
    <Text style={styles.title}>{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>{children}</View>
);

export default function Index() {
  const [tab, setTab] = useState<Tab>("Home");
  const [species, setSpecies] = useState<Species>(
    SPECIES.find((s) => s.id === "striped-bass") || SPECIES[0]
  );
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationError, setLocationError] = useState("");
  const [forecast, setForecast] = useState<any>(null);
  const [loadingForecast, setLoadingForecast] = useState(false);

  const [spots, setSpots] = useState<any[]>([]);
  const [spotRadius, setSpotRadius] = useState(15);
  const [spotQuery, setSpotQuery] = useState("");
  const [loadingSpots, setLoadingSpots] = useState(false);
  const [spotError, setSpotError] = useState("");
  const [placeQuery, setPlaceQuery] = useState("");
  const [placeResults, setPlaceResults] = useState<any[]>([]);
  const [searchingPlace, setSearchingPlace] = useState(false);
  const [customPlace, setCustomPlace] = useState<{ lat: number; lon: number; label: string } | null>(null);

  const [fishQuery, setFishQuery] = useState("");
  const [fishCategory, setFishCategory] = useState("All");

  const [sessions, setSessions] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const [logSpecies, setLogSpecies] = useState(species.name);
  const [logLocation, setLogLocation] = useState("");
  const [logBites, setLogBites] = useState("0");
  const [logCaught, setLogCaught] = useState("0");
  const [logNotes, setLogNotes] = useState("");
  const [savingLog, setSavingLog] = useState(false);

  const [recommended, setRecommended] = useState<any>(null);
  const [loadingRecommended, setLoadingRecommended] = useState(false);
  const [recommendedError, setRecommendedError] = useState("");

  const [spotsView, setSpotsView] = useState<"public" | "mine">("public");
  const [waypoints, setWaypoints] = useState<any[]>([]);
  const [loadingWaypoints, setLoadingWaypoints] = useState(false);
  const [addingWaypoint, setAddingWaypoint] = useState(false);
  const [newWaypointLabel, setNewWaypointLabel] = useState("");
  const [newWaypointNotes, setNewWaypointNotes] = useState("");
  const [savingWaypoint, setSavingWaypoint] = useState(false);

  const [showDepthChart, setShowDepthChart] = useState(true);

  async function locate() {
    setLocationError("");
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission.status !== "granted") {
      setLocationError("Location permission is needed to find nearby fishing spots.");
      return null;
    }
    const current = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    setLocation(current);
    return current;
  }

  async function loadForecast(current = location) {
    if (!current) {
      const found = await locate();
      if (!found) return;
      current = found;
    }
    setLoadingForecast(true);
    try {
      const data = await getForecast(
        current.coords.latitude,
        current.coords.longitude,
        species.name,
        today(),
        species.categories
      );
      setForecast(data);
    } catch (e: any) {
      Alert.alert("Forecast unavailable", e?.message || "Try again.");
    } finally {
      setLoadingForecast(false);
    }
  }

  async function loadRecommended(current = location) {
    if (!current) {
      const found = await locate();
      if (!found) return;
      current = found;
    }
    setLoadingRecommended(true);
    setRecommendedError("");
    try {
      const data = await getRecommendedSpot(
        current.coords.latitude,
        current.coords.longitude,
        species.name,
        species.categories
      );
      setRecommended(data);
    } catch (e: any) {
      setRecommendedError(e?.message || "Could not rank nearby spots right now.");
      setRecommended(null);
    } finally {
      setLoadingRecommended(false);
    }
  }

  // Resolves to the typed-in place when one has been chosen on the Spots
  // screen, falling back to GPS location otherwise. Shaped as a real
  // Location.LocationObject so it's a drop-in replacement for `location`
  // anywhere loadSpots/loadForecast expect one.
  function spotsOrigin(): Location.LocationObject | null {
    if (customPlace) {
      return {
        coords: {
          latitude: customPlace.lat,
          longitude: customPlace.lon,
          altitude: null,
          accuracy: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      };
    }
    return location;
  }

  async function searchPlace() {
    const q = placeQuery.trim();
    if (!q) return;
    setSearchingPlace(true);
    setPlaceResults([]);
    try {
      const data = await searchLocations(q);
      const results = data.results || [];
      setPlaceResults(results);
      if (results.length === 0) {
        Alert.alert("No matches", `Couldn't find "${q}". Try a city, neighborhood, or zip code.`);
      }
    } catch (e: any) {
      Alert.alert("Search failed", e?.message || "Try again.");
    } finally {
      setSearchingPlace(false);
    }
  }

  function choosePlace(result: any) {
    setCustomPlace({ lat: result.lat, lon: result.lon, label: result.label });
    setPlaceResults([]);
    setPlaceQuery(result.label);
    loadSpots(
      {
        coords: {
          latitude: result.lat,
          longitude: result.lon,
          altitude: null,
          accuracy: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      },
      spotRadius
    );
  }

  function useMyLocation() {
    setCustomPlace(null);
    setPlaceQuery("");
    setPlaceResults([]);
    loadSpots(location, spotRadius);
  }

  async function loadSpots(current = spotsOrigin(), radius = spotRadius) {
    if (!current) {
      const found = await locate();
      if (!found) return;
      current = found;
    }
    setLoadingSpots(true);
    setSpotError("");
    try {
      const data = await getNearbySpots(
        current.coords.latitude,
        current.coords.longitude,
        radius
      );
      setSpots(data.spots || []);
    } catch (e: any) {
      setSpotError(e?.message || "Could not load fishing spots.");
    } finally {
      setLoadingSpots(false);
    }
  }

  async function loadHistory() {
    setLoadingHistory(true);
    try {
      const data = await getSessions();
      setSessions(Array.isArray(data) ? data : data.sessions || []);
    } catch (e: any) {
      Alert.alert("History unavailable", e?.message || "Try again.");
    } finally {
      setLoadingHistory(false);
    }
  }

  async function loadWaypoints() {
    setLoadingWaypoints(true);
    try {
      const data = await getWaypoints();
      setWaypoints(data.waypoints || []);
    } catch (e: any) {
      Alert.alert("Waypoints unavailable", e?.message || "Try again.");
    } finally {
      setLoadingWaypoints(false);
    }
  }

  async function addWaypoint() {
    const label = newWaypointLabel.trim();
    if (!label) {
      Alert.alert("Name required", "Give this waypoint a name.");
      return;
    }
    const origin = spotsOrigin();
    if (!origin) {
      Alert.alert("Location needed", "Turn on GPS or search a location first.");
      return;
    }
    setSavingWaypoint(true);
    try {
      await createWaypoint({
        label,
        lat: origin.coords.latitude,
        lon: origin.coords.longitude,
        notes: newWaypointNotes.trim() || null,
      });
      setNewWaypointLabel("");
      setNewWaypointNotes("");
      setAddingWaypoint(false);
      await loadWaypoints();
    } catch (e: any) {
      Alert.alert("Could not save waypoint", e?.message || "Try again.");
    } finally {
      setSavingWaypoint(false);
    }
  }

  async function saveSpotAsWaypoint(spot: any) {
    try {
      await createWaypoint({
        label: spot.name,
        lat: spot.lat,
        lon: spot.lon,
        notes: spot.facility ? `Saved from public spots: ${spot.facility}` : "Saved from public spots",
      });
      Alert.alert("Saved", `${spot.name} added to My Waypoints.`);
      loadWaypoints();
    } catch (e: any) {
      Alert.alert("Could not save waypoint", e?.message || "Try again.");
    }
  }

  function removeWaypoint(waypoint: any) {
    Alert.alert(
      "Delete waypoint?",
      `Remove "${waypoint.label}" from My Waypoints.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteWaypoint(waypoint.id);
              setWaypoints((old) => old.filter((w) => w.id !== waypoint.id));
            } catch (e: any) {
              Alert.alert("Delete failed", e?.message || "Try again.");
            }
          },
        },
      ]
    );
  }

  useEffect(() => {
    locate().catch(() => {});
    loadHistory();
    loadWaypoints();
  }, []);

  useEffect(() => {
    if (tab === "Spots") {
      loadSpots();
      loadWaypoints();
    }
    if (tab === "History") loadHistory();
  }, [tab]);

  useEffect(() => {
    setLogSpecies(species.name);
    loadForecast();
    loadRecommended();
  }, [species]);

  const filteredSpecies = useMemo(
    () => searchSpecies(fishQuery, fishCategory),
    [fishQuery, fishCategory]
  );

  const filteredSpots = useMemo(() => {
    const q = spotQuery.trim().toLowerCase();
    if (!q) return spots;
    return spots.filter((spot) =>
      `${spot.name} ${spot.facility || ""} ${spot.asset || ""} ${spot.unit || ""}`
        .toLowerCase()
        .includes(q)
    );
  }, [spots, spotQuery]);

  async function saveTrip() {
    if (!logLocation.trim()) {
      Alert.alert("Location required", "Enter where the trip took place.");
      return;
    }
    setSavingLog(true);
    try {
      const start = new Date();
      const end = new Date(start.getTime() + 60 * 60 * 1000);
      await createSession({
        date: today(),
        location: logLocation.trim(),
        lat: location?.coords.latitude || 0,
        lon: location?.coords.longitude || 0,
        species: logSpecies,
        method: null,
        bait_or_lure: null,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        bites: Math.max(0, Number(logBites) || 0),
        fish_caught: Math.max(0, Number(logCaught) || 0),
        notes: logNotes.trim() || null,
        is_test: false,
      });
      Alert.alert("Saved", "Your fishing trip was added to History.");
      setLogLocation("");
      setLogBites("0");
      setLogCaught("0");
      setLogNotes("");
      await loadHistory();
      setTab("History");
    } catch (e: any) {
      Alert.alert("Could not save", e?.message || "Try again.");
    } finally {
      setSavingLog(false);
    }
  }

  function confirmDelete(session: any) {
    Alert.alert(
      "Delete fishing trip?",
      "This permanently removes the trip and its recorded observations.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteSession(session.id);
              setSessions((old) => old.filter((item) => item.id !== session.id));
            } catch (e: any) {
              Alert.alert("Delete failed", e?.message || "Try again.");
            }
          },
        },
      ]
    );
  }

  function Home() {
    const tip = getSpeciesTip(species);

    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header title="What should we fish for?" subtitle="Current conditions → bite activity" />

        <Card>
          <View style={styles.rowBetween}>
            <View style={styles.proBadgeRow}>
              <Text style={styles.proBadge}>PRO</Text>
              <Text style={styles.sectionTitle}>Today's Pick</Text>
            </View>
            <Pressable style={styles.smallButton} onPress={() => loadRecommended()}>
              <Text style={styles.smallButtonText}>Refresh</Text>
            </Pressable>
          </View>
          <Text style={styles.muted}>Best nearby spot right now, and how to fish {species.name} today - free, no subscription.</Text>

          {loadingRecommended ? (
            <ActivityIndicator size="large" color={COLORS.green} style={{ margin: 30 }} />
          ) : recommendedError ? (
            <Text style={styles.error}>{recommendedError}</Text>
          ) : recommended?.recommended ? (
            <>
              <View style={styles.bestWindow}>
                <View style={styles.rowBetween}>
                  <Text style={styles.bestWindowLabel}>RECOMMENDED SPOT · {recommended.current_time_label}</Text>
                  <Text style={styles.bestWindowValue}>{recommended.recommended.current_score}</Text>
                </View>
                <Text style={styles.spotName}>{recommended.recommended.name}</Text>
                <Text style={styles.muted}>{recommended.recommended.distance_miles} mi away · {recommended.recommended.tide}</Text>
                <Text style={styles.muted}>Best window: {recommended.recommended.best_start} – {recommended.recommended.best_end}</Text>
                <Pressable
                  style={[styles.primaryMini, { alignSelf: "flex-start", marginTop: 10 }]}
                  onPress={() => openDirections(recommended.recommended.lat, recommended.recommended.lon)}
                >
                  <Text style={styles.primaryMiniText}>Directions</Text>
                </Pressable>
              </View>
              {recommended.alternatives?.length ? (
                <Text style={styles.muted}>
                  Also nearby: {recommended.alternatives.slice(0, 2).map((a: any) => `${a.name} (${a.current_score})`).join(", ")}
                </Text>
              ) : null}
            </>
          ) : (
            <Text style={styles.muted}>Tap Refresh to rank nearby spots for right now.</Text>
          )}

          <View style={styles.tipBox}>
            <Text style={styles.label}>Bait & technique for {species.name}</Text>
            <Text style={styles.detail}>🪱 {tip.bait}</Text>
            <Text style={styles.detail}>🎣 {tip.technique}</Text>
          </View>
        </Card>

        <Card>
          <Text style={styles.label}>Target species</Text>
          <Pressable style={styles.selector} onPress={() => setTab("Fish")}>
            <Text style={styles.selectorIcon}>{species.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.selectorTitle}>{species.name}</Text>
              <Text style={styles.muted}>{species.aliases.length ? species.aliases.join(", ") : species.categories[0]}</Text>
            </View>
            <Text style={styles.link}>Change</Text>
          </Pressable>
        </Card>

        <Card>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.label}>Your location</Text>
              <Text style={styles.muted}>
                {location
                  ? `${location.coords.latitude.toFixed(4)}, ${location.coords.longitude.toFixed(4)}`
                  : "Location not loaded"}
              </Text>
            </View>
            <Pressable style={styles.smallButton} onPress={() => locate()}>
              <Text style={styles.smallButtonText}>GPS</Text>
            </Pressable>
          </View>
          {locationError ? <Text style={styles.error}>{locationError}</Text> : null}
        </Card>

        <Card>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Bite activity</Text>
            <Pressable style={styles.smallButton} onPress={() => loadForecast()}>
              <Text style={styles.smallButtonText}>Refresh</Text>
            </Pressable>
          </View>
          {loadingForecast ? (
            <ActivityIndicator size="large" color={COLORS.green} style={{ margin: 30 }} />
          ) : forecast ? (
            <>
              <Text style={styles.score}>{forecast.score}</Text>
              <Text style={styles.scoreCaption}>relative activity / 100</Text>
              <View style={styles.bestWindow}>
                <Text style={styles.bestWindowLabel}>BEST WINDOW</Text>
                <Text style={styles.bestWindowValue}>
                  {forecast.best_start} – {forecast.best_end}
                </Text>
              </View>
              <View style={styles.statsRow}>
                <Text style={styles.stat}>📍 {forecast.location}</Text>
                <Text style={styles.stat}>📅 {forecast.date}</Text>
              </View>
              <Text style={styles.muted}>{forecast.data_quality}</Text>
            </>
          ) : (
            <View style={{ paddingVertical: 20 }}>
              <Text style={styles.muted}>Tap Refresh to calculate today's forecast.</Text>
            </View>
          )}
        </Card>

        {forecast?.hours?.length ? (
          <Card>
            <Text style={styles.sectionTitle}>Hourly activity</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {forecast.hours.map((hour: any, i: number) => (
                <View key={i} style={styles.hourCard}>
                  <Text style={styles.hourTime}>{hour.time_label || hour.label || hour.time || ""}</Text>
                  <Text style={styles.hourScore}>{hour.score ?? hour.activity ?? "—"}</Text>
                </View>
              ))}
            </ScrollView>
          </Card>
        ) : null}

        <Pressable style={styles.primaryButton} onPress={() => setTab("Spots")}>
          <Text style={styles.primaryButtonText}>Find nearby fishing spots</Text>
        </Pressable>
      </ScrollView>
    );
  }

  function Spots() {
    return (
      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Header title="Fishing Spots" subtitle="Real access points from NYSDEC + NYC Waterfront data" />

          <View style={styles.segmentRow}>
            <Pressable style={[styles.segment, spotsView === "public" && styles.segmentActive]} onPress={() => setSpotsView("public")}>
              <Text style={spotsView === "public" ? styles.segmentTextActive : styles.segmentText}>Public Spots</Text>
            </Pressable>
            <Pressable style={[styles.segment, spotsView === "mine" && styles.segmentActive]} onPress={() => setSpotsView("mine")}>
              <Text style={spotsView === "mine" ? styles.segmentTextActive : styles.segmentText}>My Waypoints ({waypoints.length})</Text>
            </Pressable>
          </View>

          {spotsView === "mine" ? (
            <>
              <Card>
                <View style={styles.rowBetween}>
                  <Text style={styles.sectionTitle}>My Waypoints</Text>
                  <Pressable style={styles.smallButton} onPress={() => setAddingWaypoint((v) => !v)}>
                    <Text style={styles.smallButtonText}>{addingWaypoint ? "Cancel" : "+ Add"}</Text>
                  </Pressable>
                </View>
                <Text style={styles.muted}>Private spots only you can see - unlimited, and free.</Text>

                {addingWaypoint ? (
                  <View style={{ marginTop: 10 }}>
                    <TextInput value={newWaypointLabel} onChangeText={setNewWaypointLabel} placeholder="Name this spot" style={styles.input} />
                    <TextInput value={newWaypointNotes} onChangeText={setNewWaypointNotes} placeholder="Notes (optional)" style={styles.input} />
                    <Text style={styles.muted}>Uses your current location{customPlace ? ` (${customPlace.label})` : ""}.</Text>
                    <Pressable style={styles.primaryButton} onPress={addWaypoint} disabled={savingWaypoint}>
                      {savingWaypoint ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Save Waypoint</Text>}
                    </Pressable>
                  </View>
                ) : null}
              </Card>

              {loadingWaypoints ? (
                <ActivityIndicator size="large" color={COLORS.green} style={{ margin: 30 }} />
              ) : waypoints.length === 0 ? (
                <Card>
                  <Text style={styles.sectionTitle}>No waypoints yet</Text>
                  <Text style={styles.muted}>Save your own favorite spots here, or tap "Save" on any public spot.</Text>
                </Card>
              ) : (
                waypoints.map((w) => (
                  <Card key={w.id}>
                    <View style={styles.rowBetween}>
                      <View style={{ flex: 1, paddingRight: 10 }}>
                        <Text style={styles.spotName}>{w.label}</Text>
                        {w.notes ? <Text style={styles.muted}>{w.notes}</Text> : null}
                      </View>
                      <Pressable style={styles.primaryMini} onPress={() => openDirections(w.lat, w.lon)}>
                        <Text style={styles.primaryMiniText}>Directions</Text>
                      </Pressable>
                    </View>
                    <Pressable onPress={() => removeWaypoint(w)}>
                      <Text style={[styles.link, { color: COLORS.danger, marginTop: 10 }]}>Delete</Text>
                    </Pressable>
                  </Card>
                ))
              )}
            </>
          ) : (
          <>
          <Card>
            <Text style={styles.sectionTitle}>Search a location</Text>
            <Text style={styles.muted}>Type a town, neighborhood, or zip code to find spots there instead of near you.</Text>
            <TextInput
              value={placeQuery}
              onChangeText={setPlaceQuery}
              onSubmitEditing={searchPlace}
              placeholder="e.g. Sheepshead Bay, or 11101"
              returnKeyType="search"
              style={styles.input}
            />
            <Pressable style={styles.primaryButton} onPress={searchPlace} disabled={searchingPlace}>
              {searchingPlace ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Search</Text>}
            </Pressable>

            {placeResults.length > 0 ? (
              <View style={{ marginTop: 10 }}>
                {placeResults.map((result, i) => (
                  <Pressable key={i} style={styles.selector} onPress={() => choosePlace(result)}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.selectorTitle}>{result.label}</Text>
                    </View>
                    <Text style={styles.link}>Use this</Text>
                  </Pressable>
                ))}
              </View>
            ) : null}

            {customPlace ? (
              <View style={[styles.rowBetween, { marginTop: 10 }]}>
                <Text style={styles.muted}>Showing spots near {customPlace.label}</Text>
                <Pressable onPress={useMyLocation}>
                  <Text style={styles.link}>Use my location</Text>
                </Pressable>
              </View>
            ) : null}
          </Card>

          <Card>
            <View style={styles.rowBetween}>
              <Text style={styles.sectionTitle}>Nearby</Text>
              <Pressable style={styles.smallButton} onPress={() => loadSpots()}>
                <Text style={styles.smallButtonText}>Refresh</Text>
              </Pressable>
            </View>
            <TextInput
              value={spotQuery}
              onChangeText={setSpotQuery}
              placeholder="Search spots, facilities, or parks"
              style={styles.input}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[5, 10, 15, 25, 50].map((r) => (
                <Pressable
                  key={r}
                  style={[styles.chip, spotRadius === r && styles.chipActive]}
                  onPress={() => {
                    setSpotRadius(r);
                    loadSpots(spotsOrigin(), r);
                  }}
                >
                  <Text style={spotRadius === r ? styles.chipTextActive : styles.chipText}>{r} mi</Text>
                </Pressable>
              ))}
            </ScrollView>
          </Card>

          {!customPlace && !location ? (
            <Card>
              <Text style={styles.sectionTitle}>Turn on location</Text>
              <Text style={styles.muted}>FishBite uses your phone's GPS to find access points around you, or search a location above.</Text>
              <Pressable style={styles.primaryButton} onPress={() => loadSpots()}>
                <Text style={styles.primaryButtonText}>Use my location</Text>
              </Pressable>
            </Card>
          ) : null}

          {loadingSpots ? (
            <ActivityIndicator size="large" color={COLORS.green} style={{ margin: 30 }} />
          ) : spotError ? (
            <Card><Text style={styles.error}>{spotError}</Text></Card>
          ) : filteredSpots.length === 0 ? (
            <Card>
              <Text style={styles.sectionTitle}>No access points found</Text>
              <Text style={styles.muted}>Try a larger radius or move closer to the water.</Text>
            </Card>
          ) : (
            filteredSpots.map((spot) => (
              <Card key={`${spot.id}-${spot.lat}-${spot.lon}`}>
                <View style={styles.rowBetween}>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text style={styles.spotName}>{spot.name}</Text>
                    <Text style={styles.muted}>{spot.asset || "Fishing access"} • {spot.distance_miles} mi</Text>
                  </View>
                  <Pressable style={styles.primaryMini} onPress={() => openDirections(spot.lat, spot.lon)}>
                    <Text style={styles.primaryMiniText}>Directions</Text>
                  </Pressable>
                </View>
                {spot.facility ? <Text style={styles.detail}>Facility: {spot.facility}</Text> : null}
                {spot.unit ? <Text style={styles.detail}>Area: {spot.unit}</Text> : null}
                {spot.access_status ? <Text style={styles.detail}>Access: {spot.access_status}</Text> : null}
                {spot.description ? <Text style={styles.detail}>{spot.description}</Text> : null}
                <Pressable onPress={() => saveSpotAsWaypoint(spot)}>
                  <Text style={[styles.link, { marginTop: 10 }]}>+ Save to My Waypoints</Text>
                </Pressable>
              </Card>
            ))
          )}
          </>
          )}
        </ScrollView>
      </View>
    );
  }

  function MapTab() {
    const origin = spotsOrigin();

    const region = {
      latitude: origin?.coords.latitude ?? 40.7128,
      longitude: origin?.coords.longitude ?? -74.006,
      latitudeDelta: 0.08,
      longitudeDelta: 0.08,
    };

    return (
      <View style={styles.flex}>
        <View style={styles.mapHeader}>
          <View>
            <Text style={styles.proBadge}>PRO</Text>
            <Text style={styles.title}>Depth Chart</Text>
          </View>
          <Pressable style={styles.smallButton} onPress={() => setShowDepthChart((v) => !v)}>
            <Text style={styles.smallButtonText}>{showDepthChart ? "Hide depths" : "Show depths"}</Text>
          </Pressable>
        </View>

        {!origin ? (
          <View style={styles.mapNotice}>
            <Text style={styles.muted}>Turn on GPS or search a location on the Spots tab to center the map on you.</Text>
          </View>
        ) : null}

        <MapView
          style={styles.flex}
          provider={PROVIDER_DEFAULT}
          initialRegion={region}
          showsUserLocation
        >
          {showDepthChart ? (
            <UrlTile
              urlTemplate="https://gis.charttools.noaa.gov/arcgis/rest/services/MarineChart_Services/NOAACharts/MapServer/tile/{z}/{y}/{x}"
              maximumZ={16}
              flipY={false}
              opacity={0.85}
              zIndex={1}
            />
          ) : null}

          {spots.map((spot) => (
            <Marker
              key={`spot-${spot.id}`}
              coordinate={{ latitude: spot.lat, longitude: spot.lon }}
              title={spot.name}
              description={`${spot.distance_miles} mi · Tap for directions`}
              pinColor={COLORS.green}
              onCalloutPress={() => openDirections(spot.lat, spot.lon)}
            />
          ))}

          {waypoints.map((w) => (
            <Marker
              key={`wp-${w.id}`}
              coordinate={{ latitude: w.lat, longitude: w.lon }}
              title={w.label}
              description={w.notes || "Tap for directions"}
              pinColor="orange"
              onCalloutPress={() => openDirections(w.lat, w.lon)}
            />
          ))}
        </MapView>

        <View style={styles.mapLegend}>
          <Text style={styles.mapLegendText}>🟢 Public spots   🟠 My waypoints</Text>
          <Text style={styles.mapLegendCaption}>Depth contours & soundings from NOAA nautical charts - coverage may be sparse away from navigable water.</Text>
        </View>
      </View>
    );
  }

  function Fish() {
    return (
      <View style={styles.flex}>
        <View style={styles.fishHeader}>
          <Header title="Choose a fish" subtitle={`${SPECIES.length} catalog entries across 10 categories`} />
          <TextInput
            value={fishQuery}
            onChangeText={setFishQuery}
            placeholder="Search fish, alias, or scientific name"
            style={styles.input}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["All", ...SPECIES_CATEGORIES].map((category) => (
              <Pressable
                key={category}
                style={[styles.chip, fishCategory === category && styles.chipActive]}
                onPress={() => setFishCategory(category)}
              >
                <Text style={fishCategory === category ? styles.chipTextActive : styles.chipText}>{category}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <FlatList
          data={filteredSpecies}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Pressable
              style={[styles.speciesRow, item.id === species.id && styles.speciesSelected]}
              onPress={() => {
                setSpecies(item);
                setTab("Home");
              }}
            >
              <Text style={styles.fishIcon}>{item.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.speciesName}>{item.name}</Text>
                {item.aliases.length ? <Text style={styles.muted}>Also known as: {item.aliases.join(", ")}</Text> : null}
                <Text style={styles.categoryText}>{item.categories.join(" • ")}</Text>
              </View>
              {item.id === species.id ? <Text style={styles.check}>✓</Text> : null}
            </Pressable>
          )}
        />
      </View>
    );
  }

  function Log() {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header title="Log a fishing trip" subtitle="Your catches become FishBite's future training data" />
        <Card>
          <Text style={styles.label}>Species</Text>
          <Pressable style={styles.selector} onPress={() => setTab("Fish")}>
            <Text style={styles.selectorIcon}>🐟</Text>
            <Text style={styles.selectorTitle}>{logSpecies}</Text>
            <Text style={styles.link}>Change</Text>
          </Pressable>

          <Text style={styles.label}>Location</Text>
          <TextInput value={logLocation} onChangeText={setLogLocation} placeholder="e.g. Willets Point" style={styles.input} />

          <Text style={styles.label}>Bites</Text>
          <TextInput value={logBites} onChangeText={setLogBites} keyboardType="number-pad" style={styles.input} />

          <Text style={styles.label}>Fish caught</Text>
          <TextInput value={logCaught} onChangeText={setLogCaught} keyboardType="number-pad" style={styles.input} />

          <Text style={styles.label}>Notes</Text>
          <TextInput
            value={logNotes}
            onChangeText={setLogNotes}
            placeholder="Bait, lure, weather, what worked..."
            multiline
            style={[styles.input, styles.notesInput]}
          />

          <Pressable style={styles.primaryButton} onPress={saveTrip} disabled={savingLog}>
            {savingLog ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Save fishing trip</Text>}
          </Pressable>
        </Card>
      </ScrollView>
    );
  }

  function History() {
    return (
      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Header title="History" subtitle="Your family's fishing journal" />
          {loadingHistory ? <ActivityIndicator size="large" color={COLORS.green} style={{ margin: 30 }} /> : null}
          {!loadingHistory && sessions.length === 0 ? (
            <Card>
              <Text style={styles.sectionTitle}>No trips yet</Text>
              <Text style={styles.muted}>Log your first fishing trip and it will appear here.</Text>
            </Card>
          ) : null}
          {sessions.map((session) => (
            <Card key={session.id}>
              <View style={styles.rowBetween}>
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text style={styles.spotName}>🐟 {session.species}</Text>
                  <Text style={styles.muted}>{session.location}</Text>
                  <Text style={styles.detail}>{session.date}</Text>
                  <Text style={styles.detail}>🎯 {session.bites ?? 0} bites • 🐟 {session.fish_caught ?? 0} caught</Text>
                </View>
                <Pressable style={styles.deleteButton} onPress={() => confirmDelete(session)}>
                  <Text style={styles.deleteText}>Delete</Text>
                </Pressable>
              </View>
              {session.notes ? <Text style={styles.detail}>{session.notes}</Text> : null}
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }

  // Home/Spots/Fish/Log/History are called directly here (not as <Home />
  // JSX elements) precisely because they're declared inside Index and need
  // to read its state via closure. Calling them as plain functions inlines
  // their returned JSX straight into Index's own render output instead of
  // registering them as separate React component types, so the underlying
  // View/TextInput elements keep a stable identity across re-renders.
  return (
    <SafeAreaView style={styles.container}>
      {tab === "Home" && Home()}
      {tab === "Spots" && Spots()}
      {tab === "Map" && MapTab()}
      {tab === "Fish" && Fish()}
      {tab === "Log" && Log()}
      {tab === "History" && History()}

      <View style={styles.nav}>
        {(["Home", "Spots", "Map", "Fish", "Log", "History"] as Tab[]).map((item) => (
          <Pressable key={item} style={styles.navItem} onPress={() => setTab(item)}>
            <Text style={[styles.navIcon, tab === item && styles.navIconActive]}>
              {item === "Home" ? "⌂" : item === "Spots" ? "📍" : item === "Map" ? "🗺️" : item === "Fish" ? "🐟" : item === "Log" ? "📝" : "🕘"}
            </Text>
            <Text style={[styles.navText, tab === item && styles.navTextActive]}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fbfa" },
  flex: { flex: 1 },
  scroll: { padding: 18, paddingBottom: 110 },
  header: { marginBottom: 16 },
  fishHeader: { padding: 18, paddingBottom: 8, backgroundColor: "#f8fbfa" },
  brand: { fontSize: 14, fontWeight: "800", color: COLORS.green, letterSpacing: 1.2, textTransform: "uppercase" },
  title: { fontSize: 28, fontWeight: "800", color: COLORS.ink, marginTop: 4 },
  subtitle: { fontSize: 14, color: COLORS.muted, marginTop: 5 },
  card: { backgroundColor: COLORS.white, borderRadius: 18, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: COLORS.border },
  label: { fontSize: 13, fontWeight: "700", color: COLORS.muted, marginBottom: 7, marginTop: 5 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: COLORS.ink },
  muted: { color: COLORS.muted, fontSize: 13, lineHeight: 19 },
  proBadgeRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  proBadge: { backgroundColor: COLORS.green, color: "#fff", fontSize: 10, fontWeight: "900", letterSpacing: 1, paddingHorizontal: 7, paddingVertical: 3, borderRadius: 6, overflow: "hidden" },
  tipBox: { marginTop: 14, paddingTop: 14, borderTopWidth: 1, borderTopColor: COLORS.border },
  segmentRow: { flexDirection: "row", backgroundColor: COLORS.light, borderRadius: 12, padding: 4, marginBottom: 14 },
  segment: { flex: 1, paddingVertical: 10, borderRadius: 9, alignItems: "center" },
  segmentActive: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border },
  segmentText: { color: COLORS.muted, fontWeight: "700", fontSize: 13 },
  segmentTextActive: { color: COLORS.green, fontWeight: "800", fontSize: 13 },
  selector: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: COLORS.border, borderRadius: 14, padding: 12, marginBottom: 12 },
  selectorIcon: { fontSize: 26, marginRight: 12 },
  selectorTitle: { fontSize: 16, fontWeight: "800", color: COLORS.ink, flex: 1 },
  link: { color: COLORS.green, fontWeight: "800" },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  smallButton: { backgroundColor: COLORS.light, paddingHorizontal: 13, paddingVertical: 9, borderRadius: 10 },
  smallButtonText: { color: COLORS.green, fontWeight: "800", fontSize: 12 },
  score: { fontSize: 64, lineHeight: 72, fontWeight: "900", color: COLORS.green, marginTop: 10 },
  scoreCaption: { color: COLORS.muted, marginBottom: 12 },
  bestWindow: { backgroundColor: COLORS.light, borderRadius: 14, padding: 14, marginBottom: 12 },
  bestWindowLabel: { color: COLORS.green, fontSize: 11, fontWeight: "900", letterSpacing: 1 },
  bestWindowValue: { color: COLORS.ink, fontSize: 21, fontWeight: "900", marginTop: 4 },
  statsRow: { flexDirection: "row", gap: 12, marginBottom: 8 },
  stat: { color: COLORS.muted, fontSize: 12, flexShrink: 1 },
  hourCard: { width: 74, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: 10, marginRight: 8, alignItems: "center" },
  hourTime: { fontSize: 10, color: COLORS.muted },
  hourScore: { fontSize: 22, fontWeight: "900", color: COLORS.green, marginTop: 6 },
  primaryButton: { backgroundColor: COLORS.green, borderRadius: 14, minHeight: 50, alignItems: "center", justifyContent: "center", paddingHorizontal: 18, marginTop: 8 },
  primaryButtonText: { color: "#fff", fontWeight: "900", fontSize: 15 },
  primaryMini: { backgroundColor: COLORS.green, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 10 },
  primaryMiniText: { color: "#fff", fontWeight: "800", fontSize: 12 },
  input: { borderWidth: 1, borderColor: COLORS.border, backgroundColor: "#fff", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 11, fontSize: 15, color: COLORS.ink, marginBottom: 10 },
  notesInput: { minHeight: 90, textAlignVertical: "top" },
  chip: { borderWidth: 1, borderColor: COLORS.border, paddingHorizontal: 12, paddingVertical: 9, borderRadius: 999, marginRight: 8, marginBottom: 4 },
  chipActive: { backgroundColor: COLORS.green, borderColor: COLORS.green },
  chipText: { color: COLORS.ink, fontSize: 12, fontWeight: "700" },
  chipTextActive: { color: "#fff", fontSize: 12, fontWeight: "800" },
  spotName: { fontSize: 17, fontWeight: "850", color: COLORS.ink },
  detail: { color: COLORS.muted, fontSize: 13, marginTop: 6, lineHeight: 18 },
  error: { color: COLORS.danger, marginTop: 8, lineHeight: 19 },
  speciesRow: { flexDirection: "row", alignItems: "center", padding: 14, backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: COLORS.border },
  speciesSelected: { backgroundColor: COLORS.light },
  fishIcon: { fontSize: 25, width: 42 },
  speciesName: { fontSize: 16, fontWeight: "800", color: COLORS.ink },
  categoryText: { color: COLORS.green, fontSize: 11, marginTop: 3 },
  check: { color: COLORS.green, fontSize: 22, fontWeight: "900" },
  listContent: { paddingBottom: 110 },
  deleteButton: { borderWidth: 1, borderColor: "#f2c9c6", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 9 },
  deleteText: { color: COLORS.danger, fontWeight: "800", fontSize: 12 },
  nav: { position: "absolute", bottom: 0, left: 0, right: 0, height: 76, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: COLORS.border, flexDirection: "row", justifyContent: "space-around", paddingTop: 8 },
  navItem: { alignItems: "center", flex: 1 },
  navIcon: { fontSize: 20, opacity: 0.45 },
  navIconActive: { opacity: 1 },
  navText: { fontSize: 10, color: COLORS.muted, marginTop: 2, fontWeight: "700" },
  navTextActive: { color: COLORS.green },
  mapHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingBottom: 12, backgroundColor: "#f8fbfa" },
  mapNotice: { paddingHorizontal: 18, paddingBottom: 10, backgroundColor: "#f8fbfa" },
  mapLegend: { position: "absolute", bottom: 90, left: 14, right: 14, backgroundColor: "rgba(255,255,255,0.94)", borderRadius: 12, padding: 10, borderWidth: 1, borderColor: COLORS.border },
  mapLegendText: { fontSize: 12, fontWeight: "800", color: COLORS.ink },
  mapLegendCaption: { fontSize: 11, color: COLORS.muted, marginTop: 3, lineHeight: 15 },
});