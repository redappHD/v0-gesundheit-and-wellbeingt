import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Gesündere Mitarbeiter, <span className="text-accent">produktivere Teams</span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
                Unsere digitale Wellbeing-Plattform hilft Unternehmen dabei, die Gesundheit und Zufriedenheit ihrer
                Mitarbeiter zu steigern – mit messbaren Ergebnissen für Produktivität und Mitarbeiterbindung.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-10 py-4 h-14 font-semibold shadow-xl">
                Kostenlose Demo buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14 font-semibold bg-transparent">
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-foreground/60 font-medium">Unternehmen</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">25%</div>
                <div className="text-sm text-foreground/60 font-medium">Produktivitätssteigerung</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-2xl bg-accent/10">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">90%</div>
                <div className="text-sm text-foreground/60 font-medium">Zufriedenheitsrate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/5 to-accent/10 p-12 flex items-center justify-center shadow-2xl">
              <img
                src="/professional-business-team-meeting-corporate-office.png"
                alt="Professionelles Business-Team in modernem Büro bei strategischer Besprechung"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
