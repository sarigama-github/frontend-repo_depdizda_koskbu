import { Menu, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-300 to-amber-300 shadow-inner" />
          <span className="font-semibold tracking-tight text-slate-800">Mziki AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#events" className="hover:text-slate-900">Events</a>
          <a href="#music" className="hover:text-slate-900">Music</a>
          <a href="#culture" className="hover:text-slate-900">Culture</a>
          <a href="#history" className="hover:text-slate-900">History</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 shadow-sm text-slate-700">
            <Search size={16} />
            <span>Search</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-black/10"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  )
}
