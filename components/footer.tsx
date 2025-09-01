import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-20">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">VitalWork</span>
            </div>
            <p className="text-foreground/70 leading-relaxed font-medium">
              Die führende Plattform für Corporate Wellbeing in Deutschland. Gesündere Mitarbeiter, produktivere Teams.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">Produkt</h3>
            <ul className="space-y-4 text-foreground/70">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors font-medium">
                  Preise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors font-medium">
                  Integrationen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors font-medium">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">Unternehmen</h3>
            <ul className="space-y-4 text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition-colors font-medium">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors font-medium">
                  Karriere
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors font-medium">
                  Presse
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors font-medium">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">Newsletter</h3>
            <p className="text-foreground/70 mb-6 font-medium">
              Bleiben Sie auf dem Laufenden über neue Features und Wellbeing-Trends.
            </p>
            <div className="flex gap-3">
              <Input placeholder="Ihre E-Mail-Adresse" className="flex-1 h-12" />
              <Button className="h-12 px-6 font-semibold shadow-lg">Abonnieren</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/60 font-medium">© 2024 VitalWork. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8 text-foreground/60 font-medium">
            <a href="#" className="hover:text-foreground transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              AGB
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
