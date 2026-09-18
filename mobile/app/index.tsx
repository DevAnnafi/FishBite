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
import { getForecast, getNearbySpots, getSessions, createSession, deleteSession } from "../lib/api";
import { SPECIES, SPECIES_CATEGORIES, searchSpecies, Species } from "../data/species";

type Tab = "Home" | "Spots" | "Fish" | "Log" | "History";

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
        today()
      );
      setForecast(data);
    } catch (e: any) {
      Alert.alert("Forecast unavailable", e?.message || "Try again.");
    } finally {
      setLoadingForecast(false);
    }
  }

  async function loadSpots(current = location, radius = spotRadius) {
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

  useEffect(() => {
    locate().catch(() => {});
    loadHistory();
  }, []);

  useEffect(() => {
    if (tab === "Spots") loadSpots();
    if (tab === "History") loadHistory();
  }, [tab]);

  useEffect(() => {
    setLogSpecies(species.name);
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

  function Home() {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header title="What should we fish for?" subtitle="Current conditions → bite activity" />
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
                  <Text style={styles.hourTime}>{hour.time || hour.label || ""}</Text>
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
          <Header title="Fishing Spots" subtitle="Real access points from NYSDEC data" />
          <Card>
            <View style={styles.rowBetween}>
              <Text style={styles.sectionTitle}>Near me</Text>
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
                    loadSpots(location, r);
                  }}
                >
                  <Text style={spotRadius === r ? styles.chipTextActive : styles.chipText}>{r} mi</Text>
                </Pressable>
              ))}
            </ScrollView>
          </Card>

          {!location ? (
            <Card>
              <Text style={styles.sectionTitle}>Turn on location</Text>
              <Text style={styles.muted}>FishBite uses your phone's GPS to find access points around you.</Text>
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
              </Card>
            ))
          )}
        </ScrollView>
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

  return (
    <SafeAreaView style={styles.container}>
      {tab === "Home" && <Home />}
      {tab === "Spots" && <Spots />}
      {tab === "Fish" && <Fish />}
      {tab === "Log" && <Log />}
      {tab === "History" && <History />}

      <View style={styles.nav}>
        {(["Home", "Spots", "Fish", "Log", "History"] as Tab[]).map((item) => (
          <Pressable key={item} style={styles.navItem} onPress={() => setTab(item)}>
            <Text style={[styles.navIcon, tab === item && styles.navIconActive]}>
              {item === "Home" ? "⌂" : item === "Spots" ? "📍" : item === "Fish" ? "🐟" : item === "Log" ? "📝" : "🕘"}
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
});
