import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">TripEase</h3>
              <p className="text-slate-300 leading-relaxed">Your AI-powered travel companion for smarter journeys</p>
            </div>

            <div className="flex flex-col md:items-end gap-4">
              <nav className="flex flex-wrap gap-6">
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#destination" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </nav>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-white" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-500 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} TripEase. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
