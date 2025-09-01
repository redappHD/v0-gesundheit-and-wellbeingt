import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { BlurView } from "expo-blur"

const plans = [
  {
    name: "Starter",
    price: "€12",
    period: "pro Mitarbeiter/Monat",
    description: "Perfekt für kleine Teams bis 50 Mitarbeiter",
    features: [
      "Basis Gesundheits-Tracking",
      "Einfache Stressmanagement-Tools",
      "Mobile App Zugang",
      "E-Mail Support",
      "Monatliche Berichte",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "€24",
    period: "pro Mitarbeiter/Monat",
    description: "Ideal für wachsende Unternehmen bis 500 Mitarbeiter",
    features: [
      "Erweiterte Analytics",
      "KI-gestützte Empfehlungen",
      "Team-Challenges",
      "Wearable Integration",
      "Priority Support",
      "Individuelle Berichte",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Individuell",
    period: "nach Vereinbarung",
    description: "Maßgeschneiderte Lösungen für große Organisationen",
    features: [
      "Vollständige Plattform-Integration",
      "Dedizierter Account Manager",
      "Custom Branding",
      "API Zugang",
      "24/7 Support",
      "Compliance Reporting",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transparente Preise für jede Unternehmensgröße</Text>
        <Text style={styles.subtitle}>Keine versteckten Kosten. Keine Einrichtungsgebühren. Jederzeit kündbar.</Text>
      </View>

      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <BlurView key={index} intensity={20} style={[styles.planCard, plan.popular && styles.popularCard]}>
            {plan.popular && (
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>Beliebteste Wahl</Text>
              </View>
            )}

            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{plan.price}</Text>
                <Text style={styles.period}>{plan.period}</Text>
              </View>
              <Text style={styles.description}>{plan.description}</Text>
            </View>

            <View style={styles.features}>
              {plan.features.map((feature, featureIndex) => (
                <View key={featureIndex} style={styles.feature}>
                  <Text style={styles.checkmark}>✓</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={[styles.button, plan.popular && styles.popularButton]}>
              <Text style={[styles.buttonText, plan.popular && styles.popularButtonText]}>
                {plan.name === "Enterprise" ? "Kontakt aufnehmen" : "Jetzt starten"}
              </Text>
            </TouchableOpacity>
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
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
  },
  plansContainer: {
    gap: 20,
  },
  planCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    position: "relative",
  },
  popularCard: {
    borderWidth: 2,
    borderColor: "#6366f1",
  },
  popularBadge: {
    position: "absolute",
    top: -10,
    left: 20,
    backgroundColor: "#6366f1",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  planHeader: {
    marginBottom: 24,
  },
  planName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "700",
    color: "#6366f1",
  },
  period: {
    fontSize: 14,
    color: "#64748b",
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: "#64748b",
  },
  features: {
    marginBottom: 24,
    gap: 12,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkmark: {
    color: "#10b981",
    fontSize: 16,
    fontWeight: "600",
  },
  featureText: {
    fontSize: 14,
    color: "#374151",
    flex: 1,
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#6366f1",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  popularButton: {
    backgroundColor: "#6366f1",
  },
  buttonText: {
    color: "#6366f1",
    fontWeight: "600",
  },
  popularButtonText: {
    color: "#ffffff",
  },
})
