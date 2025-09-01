"use client"

import { useState } from "react"
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Modal } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BlurView } from "expo-blur"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { validateEmail, validatePassword, validateRequired } from "../utils/validation"
import { useAuth } from "../contexts/AuthContext"

export default function RegisterScreen() {
  const navigation = useNavigation()
  const { register } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{
    firstName?: string
    lastName?: string
    email?: string
    company?: string
    password?: string
    confirmPassword?: string
  }>({})

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {}

    // Validate all required fields
    const firstNameValidation = validateRequired(formData.firstName, "Vorname")
    if (!firstNameValidation.isValid) newErrors.firstName = firstNameValidation.message

    const lastNameValidation = validateRequired(formData.lastName, "Nachname")
    if (!lastNameValidation.isValid) newErrors.lastName = lastNameValidation.message

    const emailValidation = validateRequired(formData.email, "E-Mail")
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein"
    }

    const companyValidation = validateRequired(formData.company, "Unternehmen")
    if (!companyValidation.isValid) newErrors.company = companyValidation.message

    const passwordValidation = validatePassword(formData.password)
    if (!passwordValidation.isValid) newErrors.password = passwordValidation.message

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Die Passwörter stimmen nicht überein"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    console.log("[v0] ===== REGISTRATION BUTTON CLICKED =====")
    console.log("[v0] Form data:", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      passwordLength: formData.password.length,
      confirmPasswordLength: formData.confirmPassword.length,
      agreeToTerms: formData.agreeToTerms,
    })

    console.log("[v0] Checking AuthContext availability...")
    console.log("[v0] register function available:", !!register)
    console.log("[v0] register function type:", typeof register)

    console.log("[v0] Starting form validation...")
    if (!validateForm()) {
      console.log("[v0] Form validation failed, errors:", errors)
      return
    }
    console.log("[v0] Form validation passed!")

    if (!formData.agreeToTerms) {
      console.log("[v0] Terms not agreed to")
      Alert.alert("Fehler", "Bitte stimmen Sie den AGB und der Datenschutzerklärung zu.")
      return
    }
    console.log("[v0] Terms agreed to, proceeding...")

    setIsLoading(true)
    try {
      const displayName = `${formData.firstName} ${formData.lastName}`
      console.log("[v0] Attempting to register user with:", {
        email: formData.email,
        displayName,
        company: formData.company,
      })

      if (!register) {
        console.log("[v0] ERROR: register function is not available from AuthContext")
        throw new Error("Registrierungsfunktion nicht verfügbar")
      }

      console.log("[v0] Calling register function...")
      const result = await register(formData.email, formData.password, displayName, formData.company)
      console.log("[v0] Register function returned:", result)

      console.log("[v0] Registration successful for:", formData.email)

      setShowSuccessModal(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      })
    } catch (error: any) {
      console.log("[v0] Registration error caught:", {
        message: error.message,
        code: error.code,
        name: error.name,
        stack: error.stack,
        fullError: error,
      })

      let errorMessage = "Ein unbekannter Fehler ist aufgetreten."

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Diese E-Mail-Adresse wird bereits verwendet."
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Das Passwort ist zu schwach."
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Ungültige E-Mail-Adresse."
      } else if (error.message) {
        errorMessage = error.message
      }

      Alert.alert("Registrierung fehlgeschlagen", errorMessage)
    } finally {
      console.log("[v0] Setting loading to false")
      setIsLoading(false)
    }
  }

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false)
    navigation.navigate("Home" as never)
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#ffffff", "#f8fafc", "#e2e8f0"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Jetzt kostenlos starten</Text>
            <Text style={styles.subtitle}>
              Erstellen Sie Ihren VitalWork Account und transformieren Sie Ihr Unternehmen
            </Text>
          </View>

          <BlurView intensity={20} style={styles.formCard}>
            <View style={styles.form}>
              <View style={styles.nameRow}>
                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.label}>Vorname</Text>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputIcon}>👤</Text>
                    <TextInput
                      style={styles.input}
                      value={formData.firstName}
                      onChangeText={(value) => handleInputChange("firstName", value)}
                      placeholder="Max"
                      autoCapitalize="words"
                    />
                  </View>
                  {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
                </View>

                <View style={[styles.inputGroup, styles.halfWidth]}>
                  <Text style={styles.label}>Nachname</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      value={formData.lastName}
                      onChangeText={(value) => handleInputChange("lastName", value)}
                      placeholder="Mustermann"
                      autoCapitalize="words"
                    />
                  </View>
                  {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Geschäftliche E-Mail-Adresse</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>📧</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange("email", value)}
                    placeholder="max@unternehmen.de"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Unternehmen</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>🏢</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.company}
                    onChangeText={(value) => handleInputChange("company", value)}
                    placeholder="Ihr Unternehmen GmbH"
                    autoCapitalize="words"
                  />
                </View>
                {errors.company && <Text style={styles.errorText}>{errors.company}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Passwort</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>🔒</Text>
                  <TextInput
                    style={[styles.input, styles.passwordInput]}
                    value={formData.password}
                    onChangeText={(value) => handleInputChange("password", value)}
                    placeholder="Mindestens 8 Zeichen"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
                    <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Passwort bestätigen</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>🔒</Text>
                  <TextInput
                    style={[styles.input, styles.passwordInput]}
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange("confirmPassword", value)}
                    placeholder="Passwort wiederholen"
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Text style={styles.eyeIcon}>{showConfirmPassword ? "🙈" : "👁️"}</Text>
                  </TouchableOpacity>
                </View>
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
              </View>

              <TouchableOpacity
                style={styles.termsContainer}
                onPress={() => handleInputChange("agreeToTerms", !formData.agreeToTerms)}
              >
                <View style={[styles.checkbox, formData.agreeToTerms && styles.checkboxChecked]}>
                  {formData.agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.termsText}>
                  Ich stimme den <Text style={styles.termsLink}>Allgemeinen Geschäftsbedingungen</Text> und der{" "}
                  <Text style={styles.termsLink}>Datenschutzerklärung</Text> zu.
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.submitButton, (isLoading || !formData.agreeToTerms) && styles.submitButtonDisabled]}
                onPress={() => {
                  console.log("[v0] Submit button pressed!")
                  handleSubmit()
                }}
                disabled={isLoading || !formData.agreeToTerms}
              >
                <Text style={styles.submitButtonText}>
                  {isLoading ? "Account wird erstellt..." : "Kostenlosen Account erstellen"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Bereits ein Account?{" "}
                <Text style={styles.footerLink} onPress={() => navigation.navigate("Login" as never)}>
                  Jetzt anmelden
                </Text>
              </Text>
            </View>
          </BlurView>

          <View style={styles.securityNote}>
            <Text style={styles.securityText}>
              🔒 Ihre Daten sind bei uns sicher. DSGVO-konform und ISO 27001 zertifiziert.
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>

      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleSuccessModalClose}
      >
        <View style={styles.modalOverlay}>
          <BlurView intensity={20} style={styles.modalContainer}>
            <View style={styles.successModal}>
              <Text style={styles.successIcon}>🎉</Text>
              <Text style={styles.successTitle}>Willkommen bei VitalWork!</Text>
              <Text style={styles.successMessage}>
                Ihr Account wurde erfolgreich erstellt. Sie sind jetzt angemeldet und können alle Features nutzen.
              </Text>
              <TouchableOpacity style={styles.successButton} onPress={handleSuccessModalClose}>
                <Text style={styles.successButtonText}>Zur App</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 22,
  },
  formCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 10,
    marginBottom: 20,
  },
  form: {
    gap: 20,
  },
  nameRow: {
    flexDirection: "row",
    gap: 12,
  },
  inputGroup: {
    gap: 8,
  },
  halfWidth: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    padding: 4,
  },
  eyeIcon: {
    fontSize: 20,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: "#6366f1",
    borderColor: "#6366f1",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  termsText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
    flex: 1,
  },
  termsLink: {
    color: "#6366f1",
    fontWeight: "500",
  },
  submitButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#6366f1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginTop: 8,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#64748b",
  },
  footerLink: {
    color: "#6366f1",
    fontWeight: "600",
  },
  securityNote: {
    alignItems: "center",
  },
  securityText: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
  },
  errorText: {
    fontSize: 12,
    color: "#ef4444",
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
  successModal: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 32,
    alignItems: "center",
    maxWidth: 320,
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 12,
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  successButton: {
    backgroundColor: "#6366f1",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: "#6366f1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  successButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})
