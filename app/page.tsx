import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MapDestinations } from "@/components/map-destinations"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <MapDestinations />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
