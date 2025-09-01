import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Activity, Users, BarChart3, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Stressmanagement",
    description:
      "KI-gestützte Tools zur Stresserkennung und -reduktion mit personalisierten Empfehlungen für jeden Mitarbeiter.",
  },
  {
    icon: Activity,
    title: "Gesundheits-Tracking",
    description: "Umfassendes Monitoring von Gesundheitsdaten mit Integration in Wearables und Fitness-Apps.",
  },
  {
    icon: Users,
    title: "Team-Wellbeing",
    description: "Fördern Sie den Teamzusammenhalt durch gemeinsame Gesundheitsziele und Challenges.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detaillierte Einblicke in die Mitarbeitergesundheit mit anonymisierten Berichten für HR-Teams.",
  },
  {
    icon: Shield,
    title: "Datenschutz",
    description: "DSGVO-konforme Datenverarbeitung mit höchsten Sicherheitsstandards für sensible Gesundheitsdaten.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Intuitive mobile Anwendung für iOS und Android mit Offline-Funktionalität.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Alles was Sie für das <span className="text-accent">Mitarbeiter-Wellbeing</span> brauchen
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
            Unsere Plattform bietet eine umfassende Lösung für die Gesundheit und das Wohlbefinden Ihrer Mitarbeiter –
            von der Prävention bis zur Intervention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
