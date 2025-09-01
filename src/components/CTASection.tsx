import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export function CTASection() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: "/happy-productive-employees-modern-workplace.png" }}
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        >
          <LinearGradient colors={["rgba(99, 102, 241, 0.05)", "rgba(99, 102, 241, 0.1)"]} style={styles.gradient}>
            <View style={styles.content}>
              <Text style={styles.title}>Bereit für gesündere und produktivere Mitarbeiter?</Text>
              <Text style={styles.subtitle}>
                Starten Sie noch heute mit VitalWork und erleben Sie, wie sich das Wohlbefinden Ihrer Mitarbeiter auf
                den Unternehmenserfolg auswirkt.
              </Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Kostenlose Demo buchen →</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Preise ansehen</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.disclaimer}>
                30 Tage kostenlos testen • Keine Kreditkarte erforderlich ��� DSGVO-konform
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  card: {
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 10,
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.1,
  },
  gradient: {
    padding: 40,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    maxWidth: 350,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 20,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  buttons: {
    width: "100%",
    gap: 15,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#6366f1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#6366f1",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#6366f1",
    fontSize: 16,
    fontWeight: "600",
  },
  disclaimer: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
    fontWeight: "500",
  },
})
