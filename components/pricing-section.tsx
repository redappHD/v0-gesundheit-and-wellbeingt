import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "15",
    description: "Perfekt für kleine Unternehmen bis 50 Mitarbeiter",
    features: [
      "Basis Gesundheits-Tracking",
      "Mobile App für alle Mitarbeiter",
      "Monatliche Berichte",
      "E-Mail Support",
      "DSGVO-konforme Datenverarbeitung",
    ],
  },
  {
    name: "Professional",
    price: "25",
    description: "Ideal für mittelständische Unternehmen bis 500 Mitarbeiter",
    features: [
      "Alle Starter Features",
      "KI-gestütztes Stressmanagement",
      "Team-Challenges und Gamification",
      "Erweiterte Analytics",
      "Wearable Integration",
      "Telefon Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Individuell",
    description: "Maßgeschneiderte Lösungen für große Unternehmen",
    features: [
      "Alle Professional Features",
      "Custom Branding",
      "API-Integration",
      "Dedicated Account Manager",
      "On-Premise Deployment möglich",
      "24/7 Premium Support",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Transparente Preise für jede Unternehmensgröße
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
            Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt. Alle Preise pro Mitarbeiter pro Monat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl bg-card/80 backdrop-blur-sm ${plan.popular ? "ring-2 ring-accent shadow-2xl scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Beliebtester Plan
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-3xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price === "Individuell" ? plan.price : `€${plan.price}`}
                  </span>
                  {plan.price !== "Individuell" && (
                    <span className="text-foreground/60 text-lg font-medium">/Mitarbeiter/Monat</span>
                  )}
                </div>
                <CardDescription className="text-lg mt-6 text-foreground/70 font-medium">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <div className="p-1 rounded-full bg-accent/10 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full h-12 text-lg font-semibold shadow-lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Individuell" ? "Kontakt aufnehmen" : "Jetzt starten"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
