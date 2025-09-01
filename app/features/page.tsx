import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart,
  Brain,
  Activity,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Clock,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-8 tracking-tight">Alle Features im Überblick</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere umfassende Plattform für Corporate Wellbeing mit wissenschaftlich fundierten Lösungen
            für gesündere und produktivere Teams.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Stressmanagement",
                description: "Personalisierte Entspannungstechniken, Atemübungen und Meditation für den Arbeitsalltag.",
              },
              {
                icon: Brain,
                title: "Mental Health Support",
                description: "Professionelle Beratung und Ressourcen für psychisches Wohlbefinden am Arbeitsplatz.",
              },
              {
                icon: Activity,
                title: "Fitness & Bewegung",
                description: "Maßgeschneiderte Trainingsprogramme und Bewegungspausen für Büroarbeiter.",
              },
              {
                icon: Users,
                title: "Team Challenges",
                description: "Motivierende Gruppen-Aktivitäten zur Stärkung des Teamgeists und der Gesundheit.",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Detaillierte Einblicke in Mitarbeiter-Wellbeing und ROI-Messungen für HR-Teams.",
              },
              {
                icon: Shield,
                title: "Datenschutz & Sicherheit",
                description: "DSGVO-konforme Datenverarbeitung mit höchsten Sicherheitsstandards.",
              },
              {
                icon: Smartphone,
                title: "Mobile App",
                description: "Vollständig responsive Plattform für Desktop, Tablet und Smartphone.",
              },
              {
                icon: Clock,
                title: "24/7 Verfügbarkeit",
                description: "Rund um die Uhr verfügbare Ressourcen und Support für alle Mitarbeiter.",
              },
              {
                icon: Target,
                title: "Personalisierung",
                description: "KI-gestützte Empfehlungen basierend auf individuellen Bedürfnissen und Zielen.",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8 glass-effect hover:shadow-xl transition-all duration-300 border-0">
                <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-white/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Erweiterte Funktionen</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professionelle Tools für maximale Wirkung in Ihrem Unternehmen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  title: "KI-gestützte Insights",
                  description: "Automatische Erkennung von Stress-Mustern und proaktive Empfehlungen",
                },
                {
                  icon: CheckCircle,
                  title: "Compliance Management",
                  description: "Vollständige Einhaltung aller Arbeitsschutz- und Gesundheitsvorschriften",
                },
                {
                  icon: TrendingUp,
                  title: "ROI Tracking",
                  description: "Messbare Verbesserungen bei Produktivität, Krankenstand und Mitarbeiterzufriedenheit",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-effect rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Integration & API</h3>
              <ul className="space-y-4">
                {[
                  "Nahtlose Integration in bestehende HR-Systeme",
                  "Single Sign-On (SSO) Unterstützung",
                  "REST API für Custom Entwicklungen",
                  "Webhook-Support für Echtzeit-Updates",
                  "Export-Funktionen für Reporting",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Bereit für gesündere Teams?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Starten Sie noch heute mit einer kostenlosen Demo und erleben Sie die Vorteile unserer Plattform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 shadow-lg">
              Kostenlose Demo buchen
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              Preise ansehen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
