import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BlurView } from "expo-blur"

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Kontakt</Text>
          <Text style={styles.subtitle}>Lassen Sie uns über Ihr Wellbeing-Programm sprechen</Text>
        </View>

        <View style={styles.content}>
          <BlurView intensity={20} style={styles.contactForm}>
            <Text style={styles.formTitle}>Demo anfragen</Text>
            <Text style={styles.formSubtitle}>
              Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Vorname *</Text>
              <TextInput style={styles.input} placeholder="Ihr Vorname" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nachname *</Text>
              <TextInput style={styles.input} placeholder="Ihr Nachname" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>E-Mail *</Text>
              <TextInput style={styles.input} placeholder="ihre.email@unternehmen.de" keyboardType="email-address" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Unternehmen *</Text>
              <TextInput style={styles.input} placeholder="Ihr Unternehmen" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Anzahl Mitarbeiter</Text>
              <TextInput style={styles.input} placeholder="z.B. 50-100" />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nachricht</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Erzählen Sie uns von Ihren Wellbeing-Zielen..."
                multiline
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Demo anfragen</Text>
            </TouchableOpacity>

            <Text style={styles.privacy}>
              Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir verwenden Ihre Daten nur zur
              Kontaktaufnahme.
            </Text>
          </BlurView>

          <BlurView intensity={20} style={styles.contactInfo}>
            <Text style={styles.infoTitle}>Direkter Kontakt</Text>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>E-Mail:</Text>
              <Text style={styles.infoValue}>hello@vitalwork.de</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Telefon:</Text>
              <Text style={styles.infoValue}>+49 30 12345678</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Adresse:</Text>
              <Text style={styles.infoValue}>Musterstraße 123{"\n"}10115 Berlin</Text>
            </View>
          </BlurView>
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
  },
  content: {
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 40,
  },
  contactForm: {
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
  formTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#1e293b",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  privacy: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 16,
  },
  contactInfo: {
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
  infoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 16,
  },
  infoItem: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6366f1",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: "#374151",
  },
})
