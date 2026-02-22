import { useState } from 'react'
import FadeIn from '../animations/FadeIn'
import { CONTACT } from '../data/siteData'

const inputClass =
  'bg-warmwhite border border-border px-4 py-3.5 text-[14px] text-dark font-light outline-none focus:border-gold transition-colors duration-300 w-full'

export default function Contact() {
  const { label, heading, headingEm, body, details, eventTypes } = CONTACT

  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', date: '',
    guests: '', venue: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    /* TODO: wire up to your backend / email service */
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 px-6 lg:px-16 bg-cream"
    >
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >

        {/* Left — info */}
        <div>
          <FadeIn>
            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-5 font-medium">{label}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2
              className="font-display font-light leading-[1.15] text-brown mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {heading}<br />
              <em className="italic text-gold">{headingEm}</em>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-muted text-[15px] leading-[1.9] mb-10">{body}</p>
          </FadeIn>

          {details.map(({ label: l, value }, i) => (
            <FadeIn key={l} delay={280 + i * 80}>
              <div className="flex items-start gap-5 mb-7">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
                <div>
                  <strong className="block text-[10px] tracking-[2.5px] uppercase text-brown mb-1 font-medium">
                    {l}
                  </strong>
                  <span className="text-[14px] text-muted">{value}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Right — form */}
        <FadeIn direction="left" delay={200}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-24 gap-5">
              <div className="w-16 h-16 border border-gold flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-light text-brown">Thank you!</h3>
              <p className="text-muted text-[15px] max-w-xs">We've received your inquiry and will be in touch within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[11px] tracking-[2px] uppercase text-gold border-b border-gold pb-0.5 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 font-normal hover:opacity-60 transition-opacity"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Your Name *</label>
                <input
                  name="name" required value={form.name} onChange={handleChange}
                  placeholder="e.g. Amara Johnson" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Phone Number *</label>
                <input
                  name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="+254 700 000 000" type="tel" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Event Type *</label>
                <select
                  name="eventType" required value={form.eventType} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Event Date *</label>
                <input
                  name="date" required value={form.date} onChange={handleChange}
                  type="date" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Number of Guests</label>
                <input
                  name="guests" value={form.guests} onChange={handleChange}
                  placeholder="e.g. 150" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Venue / Location</label>
                <input
                  name="venue" value={form.venue} onChange={handleChange}
                  placeholder="e.g. Nairobi, Garden Estate" className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Tell Us About Your Vision</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe the theme, colors, or any specific ideas you have in mind..."
                  rows={5}
                  className={`${inputClass} resize-y`}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gold text-dark py-4 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 relative overflow-hidden group"
                >
                  <span
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                  />
                  <span className="relative">Send Inquiry →</span>
                </button>
              </div>
            </form>
          )}
        </FadeIn>

      </div>
    </section>
  )
}