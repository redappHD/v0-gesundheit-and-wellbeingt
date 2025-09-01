import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BlurView } from "expo-blur"

const resources = [
  {
    category: "Whitepaper",
    title: "Der ROI von Corporate Wellbeing",
    description: "Erfahren Sie, wie Investitionen in Mitarbeitergesundheit messbare Geschäftsergebnisse liefern.",
    downloadUrl: "#",
  },
  {
    category: "Case Study",
    title: "TechCorp: 40% weniger Krankheitstage",
    description: "Wie ein Technologieunternehmen mit 500 Mitarbeitern seine Gesundheitskosten drastisch reduzierte.",
    downloadUrl: "#",
  },
  {
    category: "Leitfaden",
    title: "Implementierung von Wellbeing-Programmen",
    description: "Schritt-für-Schritt Anleitung zur erfolgreichen Einführung von Gesundheitsprogrammen.",
    downloadUrl: "#",
  },
  {
    category: "Webinar",
    title: "Zukunft der Mitarbeitergesundheit",
    description: "Live-Session mit Experten über Trends und Innovationen im Corporate Wellbeing.",
    downloadUrl: "#",
  },
]

export default function ResourcesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Ressourcen</Text>
          <Text style={styles.subtitle}>Wertvolle Einblicke und Materialien für Ihr Wellbeing-Programm</Text>
        </View>

        <View style={styles.resourcesList}>
          {resources.map((resource, index) => (
            <BlurView key={index} intensity={20} style={styles.resourceCard}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{resource.category}</Text>
              </View>
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.resourceDescription}>{resource.description}</Text>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Herunterladen</Text>
              </TouchableOpacity>
            </BlurView>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    maxWidth: 300,
  },
  resourcesList: {
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 40,
  },
  resourceCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  categoryBadge: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
  },
  resourceDescription: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
    marginBottom: 16,
  },
  downloadButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  downloadButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
})
