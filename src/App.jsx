import { useEffect, useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { EventsGrid, MusicCulture, Pricing, BlogList, Contact, Chat } from './components/Sections'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [events, setEvents] = useState([])
  const [posts, setPosts] = useState([])
  const [tiers, setTiers] = useState([])
  const [messages, setMessages] = useState([{ role: 'assistant', text: "Karibu! I’m your Kenyan arts & culture guide." }])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${API}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
    fetch(`${API}/api/blogs`).then(r => r.json()).then(setPosts).catch(() => setPosts([]))
    fetch(`${API}/api/pricing`).then(r => r.json()).then(data => setTiers(data.tiers || [])).catch(() => setTiers([]))
  }, [])

  const onContact = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) setStatus('Thanks! We will be in touch.')
  }

  const [status, setStatus] = useState('')

  const onSend = async (e) => {
    e.preventDefault()
    const prompt = new FormData(e.currentTarget).get('prompt')
    if (!prompt) return
    const next = [...messages, { role: 'user', text: String(prompt) }]
    setMessages(next)
    setLoading(true)
    try {
      const r = await fetch(`${API}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: prompt }) })
      const data = await r.json()
      setMessages([...next, { role: 'assistant', text: data.reply }])
    } catch (e) {
      setMessages([...next, { role: 'assistant', text: 'Sorry, something went wrong.' }])
    } finally {
      setLoading(false)
      e.currentTarget.reset()
    }
  }

  const softBg = useMemo(() => 'bg-[radial-gradient(circle_at_10%_10%,#ffe4e6,transparent_40%),radial-gradient(circle_at_90%_20%,#fde68a,transparent_40%),radial-gradient(circle_at_20%_90%,#bbf7d0,transparent_40%)]', [])

  return (
    <div className={`min-h-screen ${softBg} text-slate-800`}> 
      <Navbar />
      <main className="pt-16">
        <Hero />
        <EventsGrid events={events} />
        <MusicCulture />
        <Pricing tiers={tiers} />
        <BlogList posts={posts} />
        <Chat onSend={onSend} messages={messages} loading={loading} />
        <Contact onSubmit={onContact} status={status} />
      </main>
      <footer className="py-10 text-center text-sm text-slate-600">Made with love for Kenya’s creatives 🇰🇪</footer>
    </div>
  )
}
