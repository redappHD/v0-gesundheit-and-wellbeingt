"use client"
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import { useAuth } from "../contexts/AuthContext"

export default function DashboardScreen() {
  const { user, userProfile, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#ffffff", "#f8fafc", "#e2e8f0"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Willkommen zurück!</Text>
            <Text style={styles.subtitle}>Hallo {userProfile?.displayName || user?.displayName || "Benutzer"}</Text>
          </View>

          <BlurView intensity={20} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Ihr Profil</Text>
              <View style={styles.profileInfo}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{userProfile?.displayName || user?.displayName}</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.infoLabel}>E-Mail:</Text>
                <Text style={styles.infoValue}>{user?.email}</Text>
              </View>
              {userProfile?.company && (
                <View style={styles.profileInfo}>
                  <Text style={styles.infoLabel}>Unternehmen:</Text>
                  <Text style={styles.infoValue}>{userProfile.company}</Text>
                </View>
              )}
            </View>
          </BlurView>

          <BlurView intensity={20} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Wellbeing Dashboard</Text>
              <Text style={styles.cardDescription}>
                Hier können Sie die Gesundheits- und Wellbeing-Metriken Ihres Unternehmens einsehen.
              </Text>
              <View style={styles.statsGrid}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>85%</Text>
                  <Text style={styles.statLabel}>Mitarbeiterzufriedenheit</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>12%</Text>
                  <Text style={styles.statLabel}>Stress-Reduktion</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>94%</Text>
                  <Text style={styles.statLabel}>Produktivität</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>7.2</Text>
                  <Text style={styles.statLabel}>Wellbeing Score</Text>
                </View>
              </View>
            </View>
          </BlurView>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Abmelden</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#64748b",
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 10,
  },
  cardContent: {
    gap: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1e293b",
  },
  cardDescription: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#64748b",
  },
  infoValue: {
    fontSize: 14,
    color: "#1e293b",
    fontWeight: "500",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 8,
  },
  statItem: {
    flex: 1,
    minWidth: "45%",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    borderRadius: 12,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6366f1",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})
