"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { useState, useEffect } from "react"

interface DestinationCard {
  id: number
  image: string
  title: string
  description: string
  alt: string
}

const destinations: DestinationCard[] = [
  {
    id: 1,
    image: "/tropical-beach-turquoise.png",
    title: "Tropical Paradise",
    description: "Discover pristine beaches and crystal-clear waters in exotic locations perfect for relaxation.",
    alt: "Tropical Beach"
  },
  {
    id: 2,
    image: "/mountain-landscape-with-pine-trees.jpg",
    title: "Mountain Escape",
    description: "Experience breathtaking mountain views and serene forest trails for the adventure seeker.",
    alt: "Mountain Escape"
  },
  {
    id: 3,
    image: "/scenic-coastal-bay-with-boats.jpg",
    title: "Coastal Retreat",
    description: "Explore charming coastal towns with stunning bay views and vibrant local culture.",
    alt: "Coastal Bay"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/modern-travel-illustration-with-airplane-and-landm.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-teal-900/70" />
      </div>

      {/* Social Media Icons - Left Side */}
      <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-4 lg:gap-6">
        <a href="#" className="text-white hover:text-teal-300 transition-colors">
          <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />
        </a>
        <a href="#" className="text-white hover:text-teal-300 transition-colors">
          <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
        </a>
        <a href="#" className="text-white hover:text-teal-300 transition-colors">
          <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
        </a>
        <a href="#" className="text-white hover:text-teal-300 transition-colors">
          <Youtube className="w-5 h-5 lg:w-6 lg:h-6" />
        </a>
      </div>

      {/* Decorative Dot Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="grid grid-cols-4 gap-2 lg:gap-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/40 rounded-full" />
          ))}
        </div>
      </div>

      {/* Decorative Arrows - Right Side */}
      <div className="absolute top-1/4 right-8 lg:right-12 z-10 hidden lg:flex gap-2 animate-slide-left">
        {Array.from({ length: 5 }).map((_, i) => (
          <ChevronRight key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-white/60" />
        ))}
      </div>

      {/* Decorative Arrows - Bottom Right */}
      <div className="absolute bottom-1/4 right-8 lg:right-12 z-10 hidden lg:flex gap-2 animate-slide-left">
        {Array.from({ length: 4 }).map((_, i) => (
          <ChevronRight key={i} className="w-5 h-5 lg:w-6 lg:h-6 text-white/60" />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 py-16 sm:py-20 z-20">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-start gap-6 lg:gap-8 xl:gap-12">
          {/* Left Content - Hero Text */}
          <div className="flex-1 w-full xl:w-auto space-y-6 lg:space-y-8">
            {/* Vertical Line Accent */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-0.5 sm:w-1 h-36 sm:h-40 lg:h-48 bg-white/80 shrink-0 mt-2" />

              <div className="space-y-4 lg:space-y-6 flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  EXPLORE
                  <br />
                  DREAM
                  <br />
                  <span className="text-white" style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
                    DESTINATION
                  </span>
                </h1>

                <p className="text-white/90 text-base lg:text-lg max-w-md leading-relaxed">
                  TripEase uses AI to create personalized itineraries, budget plans, and curated experiences for your
                  next trip.
                </p>

                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg rounded-md font-medium group"
                >
                  BOOK NOW
                  <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Destination Cards Carousel */}
          <div className="flex-1 w-full max-w-56 sm:max-w-64 lg:max-w-72 xl:max-w-80 xl:ml-auto">
            <div className="relative">
              {/* Universal Carousel - All Screen Sizes */}
              <div className="relative">
                {/* Carousel Container */}
                <div 
                  className="relative overflow-hidden rounded-lg"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {destinations.map((destination) => (
                      <div key={destination.id} className="w-full shrink-0">
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col">
                          <div className="relative h-48 sm:h-56 lg:h-64 xl:h-72 shrink-0">
                            <img src={destination.image} alt={destination.alt} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3 sm:p-4 lg:p-5 xl:p-6 space-y-2 sm:space-y-3 lg:space-y-4 flex flex-col flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800">{destination.title}</h3>
                            <p className="text-slate-600 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed flex-1">
                              {destination.description}
                            </p>
                            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-1.5 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base mt-auto">
                              READ MORE
                              <ChevronRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 lg:space-x-3 xl:space-x-4 mt-4 lg:mt-6">
                  {destinations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-1 h-1 lg:w-3 lg:h-3 xl:w-3 xl:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-white scale-110'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
