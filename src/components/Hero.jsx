import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-amber-50/60 to-white pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Discover Kenya's Arts, Music & Culture
        </h1>
        <p className="text-lg sm:text-xl text-slate-700">
          A playful AI guide to events, history and creative scenes across Nairobi, Mombasa, Kisumu, and beyond.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a href="#chat" className="px-5 py-3 rounded-full bg-slate-900 text-white shadow hover:bg-slate-800 transition">Chat with the Guide</a>
          <a href="#events" className="px-5 py-3 rounded-full bg-white text-slate-900 border border-black/10 shadow hover:bg-white/70 transition">Explore Events</a>
        </div>
      </div>
    </section>
  )
}
