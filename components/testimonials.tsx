import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    image: "/diverse-woman-smiling.png",
    review: "TripEase planned my Goa trip perfectly!",
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    image: "/smiling-man.png",
    review: "The budget tool saved me so much money.",
  },
  {
    name: "Anjali Verma",
    initials: "AV",
    image: "/woman-happy.jpg",
    review: "Loved the curated food spots—super accurate!",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-slate-900">
              Loved by Travelers Worldwide
            </h2>
            <p className="text-xl text-slate-600 text-pretty leading-relaxed">
              See what our users have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-teal-100 text-teal-600 font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg text-slate-900">{testimonial.name}</p>
                      <div className="flex gap-1 text-yellow-500 text-sm">{"★★★★★"}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{testimonial.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
