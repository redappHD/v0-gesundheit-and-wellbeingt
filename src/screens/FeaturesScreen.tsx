import { ScrollView, StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FeaturesSection } from "../components/FeaturesSection"

export default function FeaturesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Features</Text>
          <Text style={styles.subtitle}>Entdecken Sie alle Funktionen unserer Wellbeing-Plattform</Text>
        </View>
        <FeaturesSection />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  },
})
