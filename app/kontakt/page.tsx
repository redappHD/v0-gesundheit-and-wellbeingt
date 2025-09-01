import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users, Headphones } from "lucide-react"

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-8 tracking-tight">Kontakt aufnehmen</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen zu unserer Corporate Wellbeing Plattform? Unser Expertenteam steht Ihnen gerne zur
            Verfügung und berät Sie individuell.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Sofortige Antworten",
                action: "Chat starten",
                available: "Mo-Fr 9-18 Uhr",
              },
              {
                icon: Calendar,
                title: "Demo buchen",
                description: "Persönliche Präsentation",
                action: "Termin vereinbaren",
                available: "30 Min kostenlos",
              },
              {
                icon: Phone,
                title: "Telefonberatung",
                description: "Direkter Kontakt",
                action: "Anrufen",
                available: "+49 30 12345678",
              },
              {
                icon: Mail,
                title: "E-Mail Support",
                description: "Detaillierte Anfragen",
                action: "E-Mail senden",
                available: "24h Antwortzeit",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="p-6 glass-effect border-0 hover:shadow-xl transition-all duration-300 text-center"
              >
                <option.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{option.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{option.description}</p>
                <p className="text-xs text-slate-500 mb-4">{option.available}</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 glass-effect border-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Vorname *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nachname *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail-Adresse *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="max.mustermann@unternehmen.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Unternehmen</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Anzahl Mitarbeiter</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Bitte wählen</option>
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>501-1000</option>
                    <option>1000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ihre Nachricht *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Beschreiben Sie Ihre Anfrage oder Ihr Interesse an unserer Plattform..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-slate-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. *
                  </p>
                </div>

                <Button className="w-full py-3 text-lg shadow-lg">Nachricht senden</Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 glass-effect border-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontaktinformationen</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Adresse</h4>
                      <p className="text-slate-600">
                        VitalWork GmbH
                        <br />
                        Unter den Linden 1<br />
                        10117 Berlin, Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Telefon</h4>
                      <p className="text-slate-600">+49 30 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">E-Mail</h4>
                      <p className="text-slate-600">kontakt@vitalwork.de</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Geschäftszeiten</h4>
                      <p className="text-slate-600">
                        Montag - Freitag: 9:00 - 18:00 Uhr
                        <br />
                        Samstag - Sonntag: Geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 glass-effect border-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Spezialisierte Teams</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-slate-900">Vertrieb: </span>
                      <span className="text-slate-600">vertrieb@vitalwork.de</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Headphones className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-slate-900">Support: </span>
                      <span className="text-slate-600">support@vitalwork.de</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-slate-900">Partnerschaften: </span>
                      <span className="text-slate-600">partner@vitalwork.de</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Häufige Fragen</h2>

          <div className="space-y-6">
            {[
              {
                question: "Wie schnell erhalten Sie eine Antwort auf meine Anfrage?",
                answer:
                  "Wir antworten in der Regel innerhalb von 24 Stunden auf E-Mail-Anfragen. Bei dringenden Anliegen nutzen Sie bitte unseren Live-Chat oder rufen Sie uns direkt an.",
              },
              {
                question: "Ist die Demo-Präsentation wirklich kostenlos?",
                answer:
                  "Ja, die 30-minütige Demo-Präsentation ist vollständig kostenlos und unverbindlich. Sie erhalten einen umfassenden Überblick über unsere Plattform und können alle Ihre Fragen stellen.",
              },
              {
                question: "Können Sie auch vor Ort Präsentationen durchführen?",
                answer:
                  "Ja, für größere Unternehmen (ab 200 Mitarbeitern) bieten wir auch Vor-Ort-Präsentationen an. Kontaktieren Sie uns für weitere Details.",
              },
              {
                question: "Bieten Sie auch Beratung zur Wellbeing-Strategie an?",
                answer:
                  "Absolut! Unser Expertenteam unterstützt Sie bei der Entwicklung einer maßgeschneiderten Wellbeing-Strategie für Ihr Unternehmen.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 glass-effect border-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
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
