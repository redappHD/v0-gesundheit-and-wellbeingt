import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="relative bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-16 lg:p-24 text-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/happy-productive-employees-modern-workplace.png"
              alt="Glückliche und produktive Mitarbeiter am modernen Arbeitsplatz"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Bereit für gesündere und produktivere Mitarbeiter?
            </h2>
            <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
              Starten Sie noch heute mit VitalWork und erleben Sie, wie sich das Wohlbefinden Ihrer Mitarbeiter auf den
              Unternehmenserfolg auswirkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-4 h-14 font-semibold shadow-xl">
                Kostenlose Demo buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14 font-semibold bg-transparent">
                Preise ansehen
              </Button>
            </div>
            <p className="text-foreground/60 font-medium">
              30 Tage kostenlos testen • Keine Kreditkarte erforderlich • DSGVO-konform
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
