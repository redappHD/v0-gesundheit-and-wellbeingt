import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../styles/theme"

export const HeroSection = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[theme.colors.background, theme.colors.secondary]} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.textSection}>
            <Text style={styles.headline}>
              Gesündere Mitarbeiter.{"\n"}
              Produktivere Teams.{"\n"}
              Erfolgreichere Unternehmen.
            </Text>
            <Text style={styles.subheadline}>
              Unsere digitale Wellbeing-Plattform hilft Ihrem Unternehmen dabei, das Wohlbefinden und die Produktivität
              Ihrer Mitarbeiter nachhaltig zu steigern.
            </Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>87%</Text>
                <Text style={styles.statText}>weniger Krankheitstage</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>92%</Text>
                <Text style={styles.statText}>höhere Mitarbeiterzufriedenheit</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>34%</Text>
                <Text style={styles.statText}>mehr Produktivität</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Kostenlose Demo buchen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Mehr erfahren</Text>
              </TouchableOpacity>
            </View>
          </View>
          {theme.layout.isLargeScreen && (
            <View style={styles.imageSection}>
              <Image
                source={{ uri: "/professional-business-team-meeting-corporate-office.png" }}
                style={styles.heroImage}
                resizeMode="cover"
              />
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: theme.layout.containerPadding,
    paddingVertical: theme.spacing.xxl,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    gap: theme.spacing.xl,
  },
  textSection: {
    flex: 1,
  },
  headline: {
    ...theme.typography.h1,
    fontSize: theme.layout.isSmallScreen ? 24 : theme.typography.h1.fontSize,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
    textAlign: theme.layout.isSmallScreen ? "center" : "left",
  },
  subheadline: {
    ...theme.typography.body,
    fontSize: theme.layout.isSmallScreen ? 14 : 16,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xl,
    textAlign: theme.layout.isSmallScreen ? "center" : "left",
  },
  stats: {
    flexDirection: theme.layout.isSmallScreen ? "column" : "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xxl,
    gap: theme.layout.isSmallScreen ? theme.spacing.lg : 0,
  },
  stat: {
    alignItems: "center",
    flex: theme.layout.isSmallScreen ? 0 : 1,
  },
  statNumber: {
    fontSize: theme.layout.isSmallScreen ? 24 : 28,
    fontWeight: "700",
    color: theme.colors.primary,
  },
  statText: {
    ...theme.typography.bodySmall,
    color: theme.colors.text.secondary,
    textAlign: "center",
    marginTop: theme.spacing.xs,
    maxWidth: 100,
  },
  buttons: {
    flexDirection: theme.layout.isSmallScreen ? "column" : "row",
    gap: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    flex: theme.layout.isSmallScreen ? 0 : 1,
    alignItems: "center",
    ...theme.shadows.medium,
  },
  primaryButtonText: {
    color: theme.colors.text.inverse,
    ...theme.typography.button,
    fontSize: theme.layout.isSmallScreen ? 14 : 16,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    flex: theme.layout.isSmallScreen ? 0 : 1,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    ...theme.typography.button,
    fontSize: theme.layout.isSmallScreen ? 14 : 16,
  },
  imageSection: {
    height: 300,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    borderRadius: theme.borderRadius.lg,
  },
})
