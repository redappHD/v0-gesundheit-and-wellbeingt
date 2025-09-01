"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Password reset request:", { email })
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header />

        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">E-Mail gesendet!</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Wir haben Ihnen eine E-Mail mit Anweisungen zum Zurücksetzen Ihres Passworts gesendet.
              </p>
            </div>

            <Card className="glass-effect border-0 shadow-2xl p-8">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  E-Mail gesendet an: <strong>{email}</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Überprüfen Sie auch Ihren Spam-Ordner, falls Sie keine E-Mail erhalten haben.
                </p>
                <div className="pt-4">
                  <Link href="/anmelden">
                    <Button className="w-full">Zurück zur Anmeldung</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          {/* Back Link */}
          <Link
            href="/anmelden"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Anmeldung
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Passwort vergessen?</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Kein Problem! Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen.
            </p>
          </div>

          {/* Reset Form */}
          <Card className="glass-effect border-0 shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-Mail-Adresse
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre@email.de"
                    className="pl-10 h-12 glass-input"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base font-medium shadow-lg" disabled={isLoading}>
                {isLoading ? "E-Mail wird gesendet..." : "Passwort zurücksetzen"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Erinnern Sie sich wieder an Ihr Passwort?{" "}
                <Link href="/anmelden" className="text-primary hover:text-primary/80 transition-colors font-medium">
                  Jetzt anmelden
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
