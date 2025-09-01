import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
  updateProfile,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "../config/firebase"

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  company?: string
  position?: string
  createdAt: Date
}

class AuthService {
  // Benutzer registrieren
  async register(
    email: string,
    password: string,
    displayName: string,
    company?: string,
    position?: string,
  ): Promise<User> {
    try {
      console.log("[v0] AuthService: Starting registration for", email)

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log("[v0] AuthService: User created successfully", user.uid)

      // Profil aktualisieren
      await updateProfile(user, { displayName })
      console.log("[v0] AuthService: Profile updated successfully")

      // Benutzerprofil in Firestore speichern
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email!,
        displayName,
        company,
        position,
        createdAt: new Date(),
      }

      console.log("[v0] AuthService: Saving user profile to Firestore", userProfile)
      await setDoc(doc(db, "users", user.uid), userProfile)
      console.log("[v0] AuthService: User profile saved successfully")

      return user
    } catch (error: any) {
      console.log("[v0] AuthService: Registration error", {
        code: error.code,
        message: error.message,
      })
      throw new Error(this.getErrorMessage(error.code))
    }
  }

  // Benutzer anmelden
  async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return userCredential.user
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code))
    }
  }

  // Benutzer abmelden
  async logout(): Promise<void> {
    try {
      await signOut(auth)
    } catch (error: any) {
      throw new Error("Fehler beim Abmelden")
    }
  }

  // Benutzerprofil abrufen
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const docRef = doc(db, "users", uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data() as UserProfile
      }
      return null
    } catch (error) {
      console.error("Fehler beim Abrufen des Benutzerprofils:", error)
      return null
    }
  }

  // Fehlermeldungen übersetzen
  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "Diese E-Mail-Adresse wird bereits verwendet."
      case "auth/weak-password":
        return "Das Passwort ist zu schwach."
      case "auth/invalid-email":
        return "Ungültige E-Mail-Adresse."
      case "auth/user-not-found":
        return "Benutzer nicht gefunden."
      case "auth/wrong-password":
        return "Falsches Passwort."
      case "auth/too-many-requests":
        return "Zu viele Anmeldeversuche. Versuchen Sie es später erneut."
      default:
        return "Ein unbekannter Fehler ist aufgetreten."
    }
  }
}

export default new AuthService()
