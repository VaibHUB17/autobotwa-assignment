"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Destination {
  id: number
  name: string
  description: string
  image: string
  position: { top: string; left: string }
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    description: "Experience the city of lights with its iconic Eiffel Tower and charming cafes.",
    image: "/paris-eiffel-tower.png",
    position: { top: "42%", left: "18%" },
  },
  {
    id: 2,
    name: "Rome",
    description: "Discover ancient history at the Colosseum and Vatican City.",
    image: "/rome-colosseum.png",
    position: { top: "58%", left: "28%" },
  },
  {
    id: 3,
    name: "Barcelona",
    description: "Explore Gaudi architecture and beautiful Mediterranean beaches.",
    image: "/barcelona-sagrada-familia.png",
    position: { top: "68%", left: "12%" },
  },
  {
    id: 4,
    name: "Vienna",
    description: "Immerse yourself in imperial palaces and classical music heritage.",
    image: "/vienna-palace.jpg",
    position: { top: "38%", left: "35%" },
  },
  {
    id: 5,
    name: "Prague",
    description: "Wander through medieval streets and visit the stunning Prague Castle.",
    image: "/prague-castle.png",
    position: { top: "32%", left: "30%" },
  },
]

export function MapDestinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="relative w-full aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Background */}
              <Image src="/europe-map-new.png" alt="Map of Europe" fill className="object-cover" />

              {/* Location Pins */}
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  onClick={() => setSelectedDestination(destination)}
                  className="absolute w-6 h-6 sm:w-8 sm:h-8 -ml-3 sm:-ml-4 -mt-6 sm:-mt-8 group touch-manipulation"
                  style={{ top: destination.position.top, left: destination.position.left }}
                >
                  <div className="relative">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:scale-125">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="#EF4444"
                        stroke="#DC2626"
                        strokeWidth="1"
                      />
                      <circle cx="12" cy="9" r="2.5" fill="white" />
                    </svg>
                    <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-30 animate-ping" />
                  </div>
                </button>
              ))}

              {/* Destination Card Popup */}
              {selectedDestination && (
                <div
                  className="absolute bg-white rounded-xl shadow-2xl overflow-hidden w-64 sm:w-72 md:w-80 max-w-[90vw] animate-in fade-in zoom-in duration-200 z-20"
                  style={{
                    top: "10%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="relative h-32 sm:h-40">
                    <Image
                      src={selectedDestination.image || "/placeholder.svg"}
                      alt={selectedDestination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-2">{selectedDestination.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{selectedDestination.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Airplane decoration */}
            <div className="flex items-center justify-centre mb-8">
              <Image 
                src="/airplane-trail.png" 
                alt="Airplane with trail" 
                width={300} 
                height={60} 
                className="object-contain"
              />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              FEATURE DESTINATIONS <span className="block">ON THE MAP</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Our theme lets you <span className="text-teal-600 font-semibold">integrate Google Maps</span> on any of
                your pages. Not only this, but the maps are fully customizable so you can use the style that fits you
                the most!
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-800">You can also easily pin the destinations</span> from your
                posts right on the map!
              </p>
            </div>

            {/* Google Maps Logo */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
                <img src="/google-maps-icon.png" alt="Google Maps" width={32} height={32} className="w-8 h-8" />
                <span className="text-2xl font-semibold text-gray-700">Google Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
