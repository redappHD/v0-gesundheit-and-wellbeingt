import { View, Text, StyleSheet } from "react-native"
import { BlurView } from "expo-blur"

const features = [
  {
    icon: "🧠",
    title: "Stressmanagement",
    description:
      "KI-gestützte Tools zur Stresserkennung und -reduktion mit personalisierten Empfehlungen für jeden Mitarbeiter.",
  },
  {
    icon: "📊",
    title: "Gesundheits-Tracking",
    description: "Umfassendes Monitoring von Gesundheitsdaten mit Integration in Wearables und Fitness-Apps.",
  },
  {
    icon: "👥",
    title: "Team-Wellbeing",
    description: "Fördern Sie den Teamzusammenhalt durch gemeinsame Gesundheitsziele und Challenges.",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description: "Detaillierte Einblicke in die Mitarbeitergesundheit mit anonymisierten Berichten für HR-Teams.",
  },
  {
    icon: "🛡️",
    title: "Datenschutz",
    description: "DSGVO-konforme Datenverarbeitung mit höchsten Sicherheitsstandards für sensible Gesundheitsdaten.",
  },
  {
    icon: "📱",
    title: "Mobile App",
    description: "Intuitive mobile Anwendung für iOS und Android mit Offline-Funktionalität.",
  },
]

export function FeaturesSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Alles was Sie für das <Text style={styles.accent}>Mitarbeiter-Wellbeing</Text> brauchen
        </Text>
        <Text style={styles.subtitle}>
          Unsere Plattform bietet eine umfassende Lösung für die Gesundheit und das Wohlbefinden Ihrer Mitarbeiter – von
          der Prävention bis zur Intervention.
        </Text>
      </View>

      <View style={styles.grid}>
        {features.map((feature, index) => (
          <BlurView key={index} intensity={20} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{feature.icon}</Text>
              </View>
              <Text style={styles.cardTitle}>{feature.title}</Text>
            </View>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </BlurView>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f8fafc",
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 20,
    lineHeight: 36,
  },
  accent: {
    color: "#6366f1",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 350,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  icon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
})
