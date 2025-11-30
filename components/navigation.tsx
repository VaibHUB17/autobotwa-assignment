"use client"

import { Search, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-4 sm:left-6 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2">
            <a href="#home" className="text-white font-medium hover:text-teal-300 transition-colors text-sm xl:text-base">
              Home
            </a>
            <a href="#destination" className="text-white font-medium hover:text-teal-300 transition-colors text-sm xl:text-base">
              Destination
            </a>
            <a href="#contact" className="text-white font-medium hover:text-teal-300 transition-colors text-sm xl:text-base">
              Contact Us
            </a>
            <a href="#blog" className="text-white font-medium hover:text-teal-300 transition-colors text-sm xl:text-base">
              Blog
            </a>
          </div>

          {/* Search Bar and User - Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="w-40 lg:w-56 xl:w-64 bg-white/90 backdrop-blur-sm border-0 rounded-full pl-4 pr-10 py-2 lg:py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-white"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-teal-600 hover:bg-teal-700"
              >
                <Search className="h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
            </div>

            {/* Login Button */}
            <Button
              size="icon"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
            >
              <User className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white font-medium hover:text-teal-300 transition-colors">
                Home
              </a>
              <a href="#destination" className="text-white font-medium hover:text-teal-300 transition-colors">
                Destination
              </a>
              <a href="#contact" className="text-white font-medium hover:text-teal-300 transition-colors">
                Contact Us
              </a>
              <a href="#blog" className="text-white font-medium hover:text-teal-300 transition-colors">
                Blog
              </a>
              <div className="pt-4 border-t border-white/20">
                <div className="relative mb-4">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-full pl-4 pr-10 py-2 text-sm focus-visible:ring-2 focus-visible:ring-white"
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-teal-600 hover:bg-teal-700"
                  >
                    <Search className="h-3 w-3" />
                  </Button>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
