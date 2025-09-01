"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/contexts/AuthContext"
import { LogOut, User, Building } from "lucide-react"

export default function DashboardPage() {
  const { user, userData, logout, loading } = useAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/anmelden")
    }
  }, [user, loading, router])

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Laden...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">VitalWork</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Willkommen, {userData?.firstName}!</span>
            <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut} className="bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              {isLoggingOut ? "Abmelden..." : "Abmelden"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Dashboard</h1>
            <p className="text-xl text-slate-600">Verwalten Sie Ihr Corporate Wellbeing Programm</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 glass-effect border-0">
              <div className="flex items-center space-x-4 mb-4">
                <User className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Profil-Informationen</h3>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span> {userData?.firstName} {userData?.lastName}
                </p>
                <p>
                  <span className="font-medium">E-Mail:</span> {userData?.email}
                </p>
                <p>
                  <span className="font-medium">Unternehmen:</span> {userData?.company}
                </p>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-0">
              <div className="flex items-center space-x-4 mb-4">
                <Building className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Account Status</h3>
              </div>
              <div className="space-y-2">
                <p className="text-green-600 font-medium">✓ Account aktiv</p>
                <p className="text-green-600 font-medium">✓ E-Mail verifiziert</p>
                <p className="text-slate-600">
                  Registriert seit:{" "}
                  {userData?.createdAt
                    ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString("de-DE")
                    : "Unbekannt"}
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Willkommen bei VitalWork!</h2>
            <p className="text-slate-600 mb-8">Ihr Dashboard wird bald weitere Features enthalten.</p>
            <Button size="lg" className="shadow-lg">
              Programm konfigurieren
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
