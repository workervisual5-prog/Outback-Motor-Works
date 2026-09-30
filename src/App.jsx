import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, Clock, CalendarCheck } from 'lucide-react'
import { SITE, NAV, HOURS, SERVICES, WHY, REVIEWS, GALLERY } from './data/site'

const Facebook = (p) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.8c0-.9.4-1.7 1.8-1.7h1.5V4.3S15.5 4 14.3 4C11.9 4 10.3 5.500 10.3 8.1v2.7H7.6V14h2.700v8z"/></svg>)
const Instagram = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>)

function Title({ pre, word, post, sub }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-4xl sm:text-5xl">{pre} <span className="text-orange">{word}</span> {post}</h2>
      <div className="dots mt-4 h-2 w-24" />
      {sub && <p className="mt-4 text-muted">{sub}</p>}
    </div>
  )
}
const Section = ({ id, alt, children }) => (
  <section id={id} className={`py-16 sm:py-24 ${alt ? 'bg-bg2' : ''}`}><div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div></section>
)

function Header() {
  const [open, setOpen] = useState(false)
  const [small, setSmall] = useState(false)
  useEffect(() => { const f = () => setSmall(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/95 backdrop-blur transition-all ${small ? 'py-1.5' : 'py-3'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <img src="/images/logo.png" alt="" className={`rounded-full transition-all ${small ? 'h-9 w-9' : 'h-12 w-12'}`} />
          <span className="font-display text-lg font-bold uppercase leading-none tracking-wider text-white sm:text-xl">Outback <span className="text-orange">Motor Works</span></span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {NAV.slice(1, -1).map(([l, id]) => <a key={id} href={`#${id}`} className="font-display text-base font-semibold uppercase tracking-wider text-ink hover:text-orange">{l}</a>)}
          <a href="#contact" className="font-display text-base font-semibold uppercase tracking-wider text-ink hover:text-orange">Contact</a>
          <a href={SITE.phoneHref} className="btn btn-primary !py-1.5"><Phone size={16} />{SITE.phone}</a>
        </nav>
        <button className="p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-line bg-bg px-4 py-3 lg:hidden" aria-label="Mobile">
          {NAV.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 font-display text-lg font-semibold uppercase tracking-wider text-ink">{l}</a>)}
          <a href={SITE.phoneHref} className="btn btn-primary mt-2 w-full"><Phone size={16} />Call {SITE.phone}</a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="bg-bg pt-20">
      <div className="mx-auto aspect-[2/1] max-h-[46vh] w-full max-w-6xl overflow-hidden sm:aspect-[2.9/1]">
        <img src="/images/banner.png" alt="Outback Motor Works. Keeping the Territory Moving." className="h-full w-full object-cover object-top" fetchpriority="high" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <h1 className="max-w-3xl text-4xl sm:text-6xl">Your <span className="text-orange">Winnellie mechanic</span> for Darwin drivers</h1>
        <p className="tagline mt-3 text-xl text-silver">{SITE.tagline}</p>
        <p className="mt-4 max-w-xl text-muted">Car servicing, repairs and 4WD work on all makes and models, petrol and diesel. Straight advice. Fair work.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#book" className="btn btn-primary"><CalendarCheck size={18} />Book a service</a>
          <a href={SITE.phoneHref} className="btn btn-ghost"><Phone size={18} />{SITE.phone}</a>
        </div>
      </div>
    </section>
  )
}

const Services = () => (
  <Section id="services" alt>
    <Title pre="Our" word="services" sub="Mechanical repairs and car servicing in Darwin and Winnellie. All makes and models, petrol and diesel." />
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map(({ icon: Icon, title, text }) => (
        <li key={title} className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-orange">
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sunset text-white"><Icon size={26} strokeWidth={1.8} /></span>
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 text-muted">{text}</p>
        </li>
      ))}
    </ul>
  </Section>
)

const About = () => (
  <Section id="about">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative">
        <div className="dots absolute -bottom-4 -right-4 h-32 w-32 rounded-lg" aria-hidden="true" />
        <img src="/images/about.png" alt="Outback Motor Works workshop front in Winnellie, Darwin" loading="lazy" className="relative aspect-[4/5] w-full rounded-lg border border-line object-cover object-top" />
      </div>
      <div>
        <Title pre="About" word="Outback" post="Motor Works" />
        <p>We are a local Darwin workshop based in Winnellie. We service and repair petrol and diesel vehicles, from daily drivers to work utes and touring 4WDs.</p>
        <p className="mt-4 text-muted">Our job is simple. Find the real problem, tell you plainly, and fix it properly. You get kept in the loop from drop-off to pick-up.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {WHY.map(([t, d]) => <li key={t} className="border-l-2 border-orange pl-4"><h3 className="text-xl">{t}</h3><p className="text-sm text-muted">{d}</p></li>)}
        </ul>
      </div>
    </div>
  </Section>
)

function Gallery() {
  const [i, setI] = useState(null)
  const n = GALLERY.length
  const go = (d) => setI((v) => (v + d + n) % n)
  useEffect(() => {
    if (i === null) return
    const k = (e) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [i])
  return (
    <Section id="gallery" alt>
      <Title pre="Inside the" word="workshop" sub="A look at the work we do every day. Tap a photo to view it larger." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {GALLERY.map((g, k) => (
          <button key={g.src} onClick={() => setI(k)} className="group aspect-square overflow-hidden rounded-md border border-line bg-surface" aria-label={`Open photo: ${g.alt}`}>
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setI(null)}>
          <button className="absolute right-4 top-4 p-2 text-white" onClick={() => setI(null)} aria-label="Close"><X size={28} /></button>
          <button className="absolute left-2 p-2 text-white sm:left-6" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous photo"><ChevronLeft size={36} /></button>
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-full flex-col items-center">
            <img src={GALLERY[i].src} alt={GALLERY[i].alt} className="max-h-[80vh] max-w-full rounded-md object-contain" />
            <figcaption className="mt-3 text-center text-sm text-muted">{GALLERY[i].alt} ({i + 1} of {n})</figcaption>
          </figure>
          <button className="absolute right-2 p-2 text-white sm:right-6" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next photo"><ChevronRight size={36} /></button>
        </div>
      )}
    </Section>
  )
}

const Stars = () => <span className="flex text-dot" aria-label="5 out of 5 stars">{[0,1,2,3,4].map((k) => <Star key={k} size={18} fill="currentColor" />)}</span>
const Reviews = () => (
  <Section id="reviews">
    <Title pre="What our" word="customers" post="say" />
    <div className="mb-6 flex items-center gap-3"><span className="font-display text-4xl font-bold text-white">{SITE.rating}</span><Stars /><span className="text-muted">on Google</span></div>
    <div className="grid gap-4 md:grid-cols-2">
      {REVIEWS.map((r) => (
        <blockquote key={r.name} className="rounded-lg border border-line bg-surface p-6">
          <Stars /><p className="mt-3">“{r.text}”</p><footer className="mt-4 font-display text-lg uppercase tracking-wider text-orange">{r.name}</footer>
        </blockquote>
      ))}
    </div>
    <a href={SITE.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8"><Star size={18} />Write a Google review</a>
  </Section>
)

const TIMES = Array.from({ length: 16 }, (_, k) => { const m = 480 + k * 30; return `${String(Math.floor(m / 60)).padStart(2, '0')}:${m % 60 ? '30' : '00'}` })
const today = () => new Date().toISOString().split('T')[0]

// Swap this stub for EmailJS later: emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
async function sendBooking(data) { console.info('Booking (mock):', data); await new Promise((r) => setTimeout(r, 600)) }

function Booking() {
  const [f, setF] = useState({ name: '', phone: '', email: '', service: SERVICES[2].title, vehicle: '', date: '', time: '', notes: '' })
  const [state, setState] = useState({ status: 'idle', error: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    const day = new Date(f.date + 'T00:00').getDay()
    if (day === 0 || day === 6) return setState({ status: 'idle', error: 'We are closed on weekends. Please pick a weekday.' })
    setState({ status: 'sending', error: '' })
    try { await sendBooking(f); setState({ status: 'done', error: '' }) } catch { setState({ status: 'idle', error: 'Something went wrong. Please call us on ' + SITE.phone + '.' }) }
  }
  const calUrl = () => {
    const s = f.date.replaceAll('-', '') + 'T' + f.time.replace(':', '') + '00'
    const [h, m] = f.time.split(':').map(Number); const e = new Date(0, 0, 0, h + 1, m)
    const end = f.date.replaceAll('-', '') + 'T' + String(e.getHours()).padStart(2, '0') + String(e.getMinutes()).padStart(2, '0') + '00'
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(f.service + ' at ' + SITE.name)}&dates=${s}/${end}&location=${encodeURIComponent(SITE.address)}`
  }
  return (
    <Section id="book" alt>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Title pre="Book an" word="appointment" sub="Pick a service, day and time. We will confirm your booking by phone or email." />
          <p className="text-muted">Open Monday to Friday, 8:00 am to 4:30 pm. Need it sooner? Call <a className="text-orange" href={SITE.phoneHref}>{SITE.phone}</a>.</p>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-lg border border-line bg-surface p-5 sm:grid-cols-2 sm:p-8 lg:col-span-3">
          {state.status === 'done' ? (
            <div className="sm:col-span-2">
              <h3 className="text-3xl text-orange">Booking request sent</h3>
              <p className="mt-2">Thanks {f.name}. We will be in touch to confirm.</p>
              <a href={calUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4"><CalendarCheck size={18} />Add to Google Calendar</a>
            </div>
          ) : (<>
            <label className="text-sm">Full name<input required className="field mt-1" value={f.name} onChange={set('name')} autoComplete="name" /></label>
            <label className="text-sm">Phone<input required type="tel" className="field mt-1" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
            <label className="text-sm">Email<input required type="email" className="field mt-1" value={f.email} onChange={set('email')} autoComplete="email" /></label>
            <label className="text-sm">Service<select className="field mt-1" value={f.service} onChange={set('service')}>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select></label>
            <label className="text-sm sm:col-span-2">Vehicle (make, model, year)<input required className="field mt-1" value={f.vehicle} onChange={set('vehicle')} /></label>
            <label className="text-sm">Preferred date<input required type="date" min={today()} className="field mt-1" value={f.date} onChange={set('date')} /></label>
            <label className="text-sm">Preferred time<select required className="field mt-1" value={f.time} onChange={set('time')}><option value="">Select a time</option>{TIMES.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label className="text-sm sm:col-span-2">Notes (optional)<textarea rows="3" className="field mt-1" value={f.notes} onChange={set('notes')} /></label>
            {state.error && <p role="alert" className="text-red sm:col-span-2">{state.error}</p>}
            <button className="btn btn-primary sm:col-span-2" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending…' : 'Request booking'}</button>
          </>)}
        </form>
      </div>
    </Section>
  )
}

const Hours = () => {
  const now = new Date().getDay()
  return (
    <Section id="hours">
      <Title pre="Opening" word="hours" sub="Closed weekends. Open Monday to Friday." />
      <ul className="max-w-xl divide-y divide-line rounded-lg border border-line bg-surface">
        {HOURS.map(([d, name, t]) => (
          <li key={name} className={`flex justify-between px-5 py-3 ${d === now ? 'text-white' : 'text-muted'}`}>
            <span className="flex items-center gap-2 font-display text-lg uppercase tracking-wider">{d === now && <Clock size={16} className="text-orange" />}{name}</span>
            <span className={t === 'Closed' ? 'text-red' : ''}>{t}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

const Contact = () => {
  const items = [
    [Phone, 'Call', SITE.phone, SITE.phoneHref], [Mail, 'Email', SITE.email, `mailto:${SITE.email}`],
    [MapPin, 'Visit', SITE.address, SITE.mapsUrl], [Facebook, 'Facebook', 'Outback Motor Works', SITE.facebook], [Instagram, 'Instagram', '@outback.motor.works', SITE.instagram],
  ]
  return (
    <Section id="contact" alt>
      <Title pre="Get in" word="touch" sub="Find us in Winnellie, Darwin. Call, message or drop in." />
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-3">
          {items.map(([Icon, label, text, href]) => (
            <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-line bg-surface p-4 hover:border-orange">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sunset text-white"><Icon width={22} height={22} size={22} /></span>
              <span><span className="block font-display text-sm uppercase tracking-wider text-muted">{label}</span><span className="break-all text-white">{text}</span></span>
            </a></li>
          ))}
        </ul>
        <iframe title="Outback Motor Works on Google Maps" src={SITE.mapEmbed} loading="lazy" className="h-72 w-full rounded-lg border border-line lg:h-full" />
      </div>
    </Section>
  )
}

const Footer = () => (
  <footer className="border-t border-line bg-bg py-10">
    <div className="dots mx-auto mb-8 h-2 max-w-6xl" />
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
      <img src="/images/logo.png" alt="" className="h-16 w-16 rounded-full" />
      <p className="tagline text-lg text-silver">{SITE.tagline}</p>
      <p className="text-sm text-muted">{SITE.address} · <a href={SITE.phoneHref}>{SITE.phone}</a></p>
      <div className="flex gap-4 text-silver"><a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook width={24} height={24} /></a><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram width={24} height={24} /></a></div>
      <p className="text-xs text-muted">© {new Date().getFullYear()} {SITE.name}. Mechanic in Darwin and Winnellie, NT.</p>
    </div>
  </footer>
)

export default function App() {
  return (<><Header /><main><Hero /><Services /><About /><Gallery /><Reviews /><Booking /><Hours /><Contact /></main><Footer /></>)
}
