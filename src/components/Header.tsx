import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { theme } from "../styles/theme"

export const Header = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VitalWork</Text>

      {theme.layout.isLargeScreen && (
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate("Features" as never)}>
            <Text style={styles.navItem}>Features</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pricing" as never)}>
            <Text style={styles.navItem}>Preise</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Resources" as never)}>
            <Text style={styles.navItem}>Ressourcen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact" as never)}>
            <Text style={styles.navItem}>Kontakt</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login" as never)}>
        <Text style={styles.loginText}>Anmelden</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.layout.containerPadding,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...theme.shadows.small,
  },
  logo: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
  },
  nav: {
    flexDirection: "row",
    gap: theme.spacing.lg,
    flex: 1,
    justifyContent: "center",
  },
  navItem: {
    ...theme.typography.body,
    fontWeight: "500",
    color: theme.colors.text.secondary,
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    minWidth: theme.layout.isSmallScreen ? 80 : 100,
    alignItems: "center",
  },
  loginText: {
    color: theme.colors.text.inverse,
    fontWeight: "600",
    fontSize: theme.layout.isSmallScreen ? 14 : 16,
  },
})
