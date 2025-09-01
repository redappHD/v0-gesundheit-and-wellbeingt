import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Müller",
    role: "HR-Direktorin",
    company: "TechCorp GmbH",
    content:
      "VitalWork hat unsere Krankenstandsrate um 30% reduziert. Die Mitarbeiter sind motivierter und produktiver als je zuvor.",
    rating: 5,
    image: "/corporate-executive-woman-office.png",
  },
  {
    name: "Michael Schmidt",
    role: "Geschäftsführer",
    company: "InnovateLab AG",
    content:
      "Die ROI-Berechnung war eindeutig: Für jeden Euro, den wir in VitalWork investieren, sparen wir 3 Euro an Krankheitskosten.",
    rating: 5,
    image: "/corporate-ceo-modern-office.png",
  },
  {
    name: "Lisa Weber",
    role: "People & Culture Manager",
    company: "StartupHub Berlin",
    content:
      "Unsere Mitarbeiterzufriedenheit ist seit der Einführung von VitalWork um 40% gestiegen. Ein Game-Changer für unser Unternehmen.",
    rating: 5,
    image: "/corporate-hr-manager-professional.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Was unsere Kunden sagen</h2>
          <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
            Über 500 Unternehmen vertrauen bereits auf VitalWork für das Wellbeing ihrer Mitarbeiter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-lg">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg lg:text-xl mb-8 text-foreground/80 leading-relaxed font-medium">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-foreground/60 font-medium">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
