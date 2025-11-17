import { Music, MapPin, Ticket, BookOpenText } from 'lucide-react'

export function EventsGrid({ events }) {
  return (
    <section id="events" className="py-16 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Upcoming Events</h2>
          <a href="#" className="text-rose-700 hover:text-rose-800">See all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(events || []).map((e) => (
            <div key={e._id} className="rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden">
              {e.image_url ? (
                <img src={e.image_url} alt={e.title} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 w-full bg-gradient-to-br from-rose-200 to-amber-200" />
              )}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-rose-700 text-sm font-medium">
                    <Ticket size={16} /> {e.category}
                  </span>
                  {e.price != null && <span className="text-sm font-medium text-slate-700">KES {e.price}</span>}
                </div>
                <h3 className="font-semibold text-slate-900">{e.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} /> <span>{e.city}</span>
                  <span className="opacity-50">•</span>
                  <span>{e.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MusicCulture() {
  return (
    <section id="music" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Sounds of Kenya</h2>
          <p className="text-slate-700">From benga and genge to coastal taarab and contemporary afro-fusion—discover artists, playlists, and venues shaping the scene.</p>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 text-sm"><Music size={16} /> Genge</span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm"><Music size={16} /> Benga</span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm"><Music size={16} /> Afro-fusion</span>
          </div>
        </div>
        <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100 p-8 shadow-inner">
          <p className="text-slate-700 leading-relaxed">Dive into curated guides to Nairobi's live venues, Mombasa's coastal rhythms, and emerging scenes in Kisumu and Nakuru. Ask the AI for recommendations by mood, city, or date.</p>
        </div>
      </div>
    </section>
  )
}

export function Pricing({ tiers }) {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Simple Pricing</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-black/5 shadow-sm p-6">
              <h3 className="font-semibold text-slate-900">{t.name}</h3>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">{t.price === 0 ? 'Free' : `KES ${t.price}`}</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-400" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-full bg-slate-900 text-white">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogList({ posts }) {
  return (
    <section id="blog" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">From the Blog</h2>
          <a href="#" className="text-rose-700 hover:text-rose-800">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(posts || []).map((p) => (
            <article key={p._id} className="rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden">
              {p.image_url ? (
                <img src={p.image_url} alt={p.title} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 w-full bg-gradient-to-br from-emerald-200 to-rose-200" />
              )}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                {p.excerpt && <p className="text-sm text-slate-700">{p.excerpt}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact({ onSubmit, status }) {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Say hello</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white" required />
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white" required />
          </div>
          <textarea name="message" placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white" required />
          <button className="px-5 py-3 rounded-full bg-slate-900 text-white">Send</button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export function Chat({ onSend, messages, loading }) {
  return (
    <section id="chat" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Chat with the Kenyan Guide</h2>
        <div className="rounded-2xl border border-black/5 bg-white p-4 space-y-3 max-h-[420px] overflow-y-auto">
          {(messages || []).map((m, i) => (
            <div key={i} className={"flex " + (m.role === 'assistant' ? 'justify-start' : 'justify-end')}>
              <div className={(m.role === 'assistant' ? 'bg-rose-50 text-slate-800' : 'bg-slate-900 text-white') + ' px-4 py-2 rounded-2xl max-w-[80%]'}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-sm text-slate-600">Thinking…</div>}
        </div>
        <form onSubmit={onSend} className="mt-3 flex gap-2">
          <input name="prompt" placeholder="Ask about events, music, or history…" className="flex-1 px-4 py-3 rounded-xl border border-black/10 bg-white" />
          <button className="px-5 py-3 rounded-xl bg-rose-600 text-white">Send</button>
        </form>
      </div>
    </section>
  )
}
