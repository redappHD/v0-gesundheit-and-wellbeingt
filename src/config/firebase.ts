import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Ersetzen Sie diese Konfiguration mit Ihren Firebase-Projektdaten
const firebaseConfig = {
  apiKey: "AIzaSyDvsPm7tvhjpBN9TTC3QttobXLM5HdJxfU",
  authDomain: "vitalwork-e5bb7.firebaseapp.com",
  projectId: "vitalwork-e5bb7",
  storageBucket: "vitalwork-e5bb7.firebasestorage.app",
  messagingSenderId: "362606376447",
  appId: "1:362606376447:web:8053812a3f005c582863ca",
  measurementId: "G-HMXK6PYLCK"
}

// Firebase initialisieren
const app = initializeApp(firebaseConfig)

// Auth und Firestore exportieren
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
