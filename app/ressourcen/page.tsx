import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Video, FileText, Download, Calendar, Users, TrendingUp, Award } from "lucide-react"

export default function RessourcenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-8 tracking-tight">Ressourcen & Wissen</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere umfangreiche Sammlung an Ressourcen, Studien und Best Practices für erfolgreiches
            Corporate Wellbeing.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, title: "Studien & Whitepapers", count: "12 Dokumente" },
              { icon: Video, title: "Webinare & Videos", count: "8 Aufzeichnungen" },
              { icon: FileText, title: "Best Practice Guides", count: "15 Leitfäden" },
              { icon: Calendar, title: "Events & Workshops", count: "Kommende Termine" },
            ].map((category, index) => (
              <Card
                key={index}
                className="p-6 glass-effect border-0 hover:shadow-lg transition-all duration-300 text-center"
              >
                <category.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-slate-600 text-sm">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="pb-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Empfohlene Ressourcen</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                type: "Whitepaper",
                title: "ROI von Corporate Wellbeing Programmen",
                description:
                  "Eine umfassende Studie über die messbaren Vorteile von Mitarbeiter-Wellbeing-Programmen in deutschen Unternehmen.",
                downloadCount: "2.3k Downloads",
                icon: TrendingUp,
              },
              {
                type: "Best Practice Guide",
                title: "Implementierung von Mental Health Support",
                description:
                  "Schritt-für-Schritt Anleitung zur erfolgreichen Einführung von Mental Health Programmen am Arbeitsplatz.",
                downloadCount: "1.8k Downloads",
                icon: Users,
              },
              {
                type: "Studie",
                title: "Stress am Arbeitsplatz in Deutschland 2024",
                description:
                  "Aktuelle Erkenntnisse über Stressfaktoren und deren Auswirkungen auf die Produktivität deutscher Arbeitnehmer.",
                downloadCount: "3.1k Downloads",
                icon: Award,
              },
              {
                type: "Webinar",
                title: "KI-gestützte Wellbeing Analytics",
                description:
                  "Erfahren Sie, wie künstliche Intelligenz dabei hilft, Wellbeing-Programme zu optimieren und zu personalisieren.",
                downloadCount: "950 Teilnehmer",
                icon: Video,
              },
            ].map((resource, index) => (
              <Card key={index} className="p-8 glass-effect border-0 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <span className="text-sm text-slate-500">{resource.downloadCount}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{resource.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{resource.description}</p>
                    <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      <span>Herunterladen</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white/50">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Kommende Events</h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                date: "15. März 2024",
                time: "14:00 - 15:30 Uhr",
                title: "Webinar: Zukunft des Corporate Wellbeing",
                description: "Trends und Innovationen, die die Arbeitswelt von morgen prägen werden.",
                attendees: "245 Anmeldungen",
              },
              {
                date: "22. März 2024",
                time: "10:00 - 16:00 Uhr",
                title: "Workshop: Wellbeing Strategie entwickeln",
                description:
                  "Hands-on Workshop zur Entwicklung einer maßgeschneiderten Wellbeing-Strategie für Ihr Unternehmen.",
                attendees: "Begrenzte Plätze",
              },
              {
                date: "5. April 2024",
                time: "13:00 - 14:00 Uhr",
                title: "Produktdemo: Neue KI-Features",
                description: "Exklusive Vorstellung unserer neuesten KI-gestützten Wellbeing-Analytics.",
                attendees: "Kostenlos",
              },
            ].map((event, index) => (
              <Card key={index} className="p-6 glass-effect border-0 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-sm font-medium text-blue-600">{event.date}</span>
                      <span className="text-sm text-slate-500">{event.time}</span>
                      <span className="text-sm text-green-600">{event.attendees}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-slate-600">{event.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button>Anmelden</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Bleiben Sie informiert</h2>
            <p className="text-xl text-slate-600 mb-8">
              Erhalten Sie die neuesten Ressourcen, Studien und Best Practices direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="px-8 py-3">Abonnieren</Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">Kein Spam. Jederzeit abbestellbar. Datenschutz garantiert.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
