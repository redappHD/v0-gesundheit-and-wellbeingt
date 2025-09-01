"use client"

import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useAuth } from "../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const navigation = useNavigation()

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Wird geladen...</Text>
      </View>
    )
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Anmeldung erforderlich</Text>
        <Text style={styles.message}>Sie müssen sich anmelden, um auf diese Seite zugreifen zu können.</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login" as never)}>
          <Text style={styles.loginButtonText}>Jetzt anmelden</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return <>{children}</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 16,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  loginButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  loadingText: {
    fontSize: 18,
    color: "#64748b",
  },
})
