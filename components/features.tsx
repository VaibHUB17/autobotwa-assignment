import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, DollarSign, MapPin } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI Travel Planner",
    description: "Automatically generates personalized itineraries based on preferences, time, and budget.",
  },
  {
    icon: DollarSign,
    title: "Smart Budget Suggestions",
    description: "Helps estimate accommodation, travel, and food costs for any trip.",
  },
  {
    icon: MapPin,
    title: "Curated Spots & Activities",
    description: "Recommends the best places to explore, eat, and experience.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white" id="destination">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-slate-900">
              Everything You Need to Travel Better
            </h2>
            <p className="text-xl text-slate-600 text-pretty leading-relaxed">
              Powered by AI to make your travel planning effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-teal-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-teal-50/30 backdrop-blur-sm group"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                      <Icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-slate-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
