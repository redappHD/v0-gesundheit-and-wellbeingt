export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 8) {
    return { isValid: false, message: "Passwort muss mindestens 8 Zeichen lang sein" }
  }
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, message: "Passwort muss mindestens einen Kleinbuchstaben enthalten" }
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, message: "Passwort muss mindestens einen Großbuchstaben enthalten" }
  }
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, message: "Passwort muss mindestens eine Zahl enthalten" }
  }
  return { isValid: true }
}

export const validateRequired = (value: string, fieldName: string): { isValid: boolean; message?: string } => {
  if (!value.trim()) {
    return { isValid: false, message: `${fieldName} ist erforderlich` }
  }
  return { isValid: true }
}
