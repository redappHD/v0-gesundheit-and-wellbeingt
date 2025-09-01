"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"

interface UserData {
  firstName: string
  lastName: string
  email: string
  company: string
  createdAt: Date
}

interface AuthContextType {
  user: User | null
  userData: UserData | null
  loading: boolean
  signUp: (email: string, password: string, userData: Omit<UserData, "email" | "createdAt">) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)

      if (user && db) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid))
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData)
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      } else {
        setUserData(null)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signUp = async (email: string, password: string, additionalData: Omit<UserData, "email" | "createdAt">) => {
    if (!auth || !db) {
      throw new Error("Firebase not initialized. Please check your configuration.")
    }

    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: `${additionalData.firstName} ${additionalData.lastName}`,
    })

    const userData: UserData = {
      ...additionalData,
      email,
      createdAt: new Date(),
    }

    await setDoc(doc(db, "users", user.uid), userData)
    setUserData(userData)
  }

  const signIn = async (email: string, password: string) => {
    if (!auth) {
      throw new Error("Firebase not initialized. Please check your configuration.")
    }
    await signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    if (!auth) {
      throw new Error("Firebase not initialized. Please check your configuration.")
    }
    await signOut(auth)
  }

  const resetPassword = async (email: string) => {
    if (!auth) {
      throw new Error("Firebase not initialized. Please check your configuration.")
    }
    await sendPasswordResetEmail(auth, email)
  }

  const value: AuthContextType = {
    user,
    userData,
    loading,
    signUp,
    signIn,
    logout,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
