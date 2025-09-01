import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.brand}>
          <Text style={styles.logo}>VitalWork</Text>
          <Text style={styles.tagline}>Digitale Gesundheitslösungen für moderne Unternehmen</Text>
        </View>

        <View style={styles.links}>
          <View style={styles.linkColumn}>
            <Text style={styles.linkTitle}>Produkt</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Features</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Preise</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Demo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linkColumn}>
            <Text style={styles.linkTitle}>Unternehmen</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Über uns</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Karriere</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Kontakt</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linkColumn}>
            <Text style={styles.linkTitle}>Rechtliches</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Datenschutz</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>AGB</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Impressum</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.copyright}>© 2024 VitalWork. Alle Rechte vorbehalten.</Text>
        <Text style={styles.location}>Made in Germany 🇩🇪</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e293b",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  content: {
    marginBottom: 30,
  },
  brand: {
    marginBottom: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: "#94a3b8",
    maxWidth: 250,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkColumn: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 15,
  },
  link: {
    fontSize: 14,
    color: "#94a3b8",
    marginBottom: 10,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: "#334155",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyright: {
    fontSize: 12,
    color: "#64748b",
  },
  location: {
    fontSize: 12,
    color: "#64748b",
  },
})
