import { View, Text, StyleSheet, Image } from "react-native"
import { BlurView } from "expo-blur"

const testimonials = [
  {
    name: "Dr. Sarah Weber",
    role: "Geschäftsführerin",
    company: "TechCorp GmbH",
    image: "/corporate-executive-woman-office.png",
    quote:
      "Seit der Einführung von VitalWork haben wir eine 40% Reduktion der Krankheitstage und eine deutlich höhere Mitarbeiterzufriedenheit erreicht.",
  },
  {
    name: "Michael Schmidt",
    role: "CEO",
    company: "InnovateNow AG",
    image: "/corporate-ceo-modern-office.png",
    quote:
      "Die ROI unserer Investition in Mitarbeiter-Wellbeing war bereits nach 6 Monaten sichtbar. Unsere Teams sind produktiver und motivierter denn je.",
  },
  {
    name: "Lisa Müller",
    role: "HR-Direktorin",
    company: "FutureWork Solutions",
    image: "/corporate-hr-manager-professional.png",
    quote:
      "VitalWork hat unsere HR-Prozesse revolutioniert. Die Dateneinblicke helfen uns, proaktiv auf die Bedürfnisse unserer Mitarbeiter einzugehen.",
  },
]

export function TestimonialsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Was unsere Kunden sagen</Text>
        <Text style={styles.subtitle}>Über 500 Unternehmen vertrauen bereits auf unsere Wellbeing-Plattform</Text>
      </View>

      <View style={styles.testimonialsList}>
        {testimonials.map((testimonial, index) => (
          <BlurView key={index} intensity={20} style={styles.testimonialCard}>
            <Text style={styles.quote}>"{testimonial.quote}"</Text>
            <View style={styles.author}>
              <Image source={{ uri: testimonial.image }} style={styles.authorImage} />
              <View style={styles.authorInfo}>
                <Text style={styles.authorName}>{testimonial.name}</Text>
                <Text style={styles.authorRole}>
                  {testimonial.role}, {testimonial.company}
                </Text>
              </View>
            </View>
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
    backgroundColor: "#ffffff",
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
  testimonialsList: {
    gap: 20,
  },
  testimonialCard: {
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
  },
  quote: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
    marginBottom: 20,
    fontStyle: "italic",
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  authorRole: {
    fontSize: 14,
    color: "#64748b",
  },
})
