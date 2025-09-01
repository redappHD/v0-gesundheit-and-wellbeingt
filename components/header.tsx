"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-xl">V</span>
          </div>
          <Link href="/" className="text-2xl font-bold text-foreground tracking-tight">
            VitalWork
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/features" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Features
          </Link>
          <Link href="/preise" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Preise
          </Link>
          <Link href="/ressourcen" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Ressourcen
          </Link>
          <Link href="/kontakt" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Kontakt
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/anmelden">
            <Button variant="ghost" className="font-medium">
              Anmelden
            </Button>
          </Link>
          <Button className="font-medium shadow-lg">Demo buchen</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 glass-effect">
          <nav className="container py-6 space-y-6">
            <Link
              href="/features"
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/preise"
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Preise
            </Link>
            <Link
              href="/ressourcen"
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Ressourcen
            </Link>
            <Link
              href="/kontakt"
              className="block text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Kontakt
            </Link>
            <div className="pt-6 space-y-3">
              <Link href="/anmelden">
                <Button variant="ghost" className="w-full font-medium">
                  Anmelden
                </Button>
              </Link>
              <Button className="w-full font-medium shadow-lg">Demo buchen</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
