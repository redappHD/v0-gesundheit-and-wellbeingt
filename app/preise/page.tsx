import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-8 tracking-tight">Transparente Preise</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Wählen Sie das passende Paket für Ihr Unternehmen. Alle Preise verstehen sich pro Mitarbeiter und Monat,
            ohne versteckte Kosten.
          </p>

          <div className="inline-flex items-center space-x-4 bg-white/70 rounded-full p-2 glass-effect">
            <span className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">Jährlich (-20%)</span>
            <span className="px-6 py-2 text-slate-600 font-medium">Monatlich</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="p-8 glass-effect border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-600 mb-6">Perfekt für kleine Teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">€12</span>
                  <span className="text-slate-600">/Mitarbeiter/Monat</span>
                </div>
                <Button className="w-full shadow-lg">Jetzt starten</Button>
              </div>

              <ul className="space-y-4">
                {[
                  "Bis zu 50 Mitarbeiter",
                  "Grundlegende Wellbeing-Programme",
                  "Mobile App Zugang",
                  "E-Mail Support",
                  "Basis Analytics",
                  "Stressmanagement Tools",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 glass-effect border-2 border-blue-200 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>Beliebteste Wahl</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
                <p className="text-slate-600 mb-6">Ideal für wachsende Unternehmen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">€24</span>
                  <span className="text-slate-600">/Mitarbeiter/Monat</span>
                </div>
                <Button className="w-full shadow-lg">Jetzt starten</Button>
              </div>

              <ul className="space-y-4">
                {[
                  "Bis zu 500 Mitarbeiter",
                  "Alle Starter Features",
                  "Erweiterte Analytics & Reports",
                  "Team Challenges & Gamification",
                  "Mental Health Support",
                  "Priority Support",
                  "Custom Branding",
                  "API Zugang",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 glass-effect border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-600 mb-6">Für große Organisationen</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">€39</span>
                  <span className="text-slate-600">/Mitarbeiter/Monat</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Kontakt aufnehmen
                </Button>
              </div>

              <ul className="space-y-4">
                {[
                  "Unbegrenzte Mitarbeiter",
                  "Alle Professional Features",
                  "KI-gestützte Insights",
                  "Dedicated Account Manager",
                  "Custom Integrationen",
                  "White-Label Lösung",
                  "24/7 Premium Support",
                  "On-Premise Deployment",
                  "Compliance Management",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Return on Investment</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unsere Kunden sehen durchschnittlich diese Verbesserungen innerhalb der ersten 6 Monate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "25%", description: "Reduktion der Krankheitstage" },
              { metric: "40%", description: "Steigerung der Mitarbeiterzufriedenheit" },
              { metric: "18%", description: "Erhöhung der Produktivität" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">{item.metric}</div>
                <p className="text-slate-700 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Häufige Fragen</h2>

          <div className="space-y-8">
            {[
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer:
                  "Nein, alle unsere Pläne können monatlich gekündigt werden. Bei jährlicher Zahlung erhalten Sie 20% Rabatt.",
              },
              {
                question: "Wie schnell kann die Plattform implementiert werden?",
                answer:
                  "Die Implementierung dauert in der Regel 1-2 Wochen. Unser Onboarding-Team unterstützt Sie dabei vollständig.",
              },
              {
                question: "Sind die Daten DSGVO-konform gespeichert?",
                answer:
                  "Ja, alle Daten werden ausschließlich in deutschen Rechenzentren gespeichert und sind vollständig DSGVO-konform.",
              },
              {
                question: "Kann ich zwischen den Plänen wechseln?",
                answer:
                  "Ja, Sie können jederzeit upgraden oder downgraden. Änderungen werden zum nächsten Abrechnungszyklus wirksam.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 glass-effect border-0">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
