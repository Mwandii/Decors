import { useState } from 'react'
import FadeIn      from '../animations/FadeIn'
import { CONTACT } from '../data/siteData'

/* ── Paste your Formspree endpoint here ── */
const FORMSPREE_URL = 'https://formspree.io/f/xnjbovve'

const inputClass =
  'bg-warmwhite border border-border px-4 py-3.5 text-[14px] text-dark font-light outline-none focus:border-gold transition-colors duration-300 w-full'

const EMPTY_FORM = {
  name: '', phone: '', eventType: '',
  date: '', guests: '', venue: '', message: '',
}

export default function Contact() {
  const { label, heading, headingEm, body, details, eventTypes } = CONTACT

  const [form,     setForm]     = useState(EMPTY_FORM)
  const [status,   setStatus]   = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name:         form.name,
          Phone:        form.phone,
          'Event Type': form.eventType,
          'Event Date': form.date,
          Guests:       form.guests  || 'Not specified',
          Venue:        form.venue   || 'Not specified',
          Message:      form.message || 'No additional details provided.',
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        throw new Error('Formspree error')
      }
    } catch (err) {
      console.error('Form error:', err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or contact us directly.')
    }
  }

  const handleReset = () => {
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-16 bg-cream">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── Left — contact info ── */}
        <div>
          <FadeIn>
            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-5 font-medium">
              {label}
            </p>
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
                <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 mt-0.5">
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

        {/* ── Right — form / states ── */}
        <FadeIn direction="left" delay={200}>

          {/* SUCCESS */}
          {status === 'success' && (
            <div className="flex flex-col items-center justify-center text-center py-24 gap-5">
              <div
                className="w-16 h-16 border border-gold flex items-center justify-center"
                style={{ animation: 'popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275) forwards' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gold">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-light text-brown">Inquiry Sent!</h3>
              <p className="text-muted text-[15px] max-w-xs leading-relaxed">
                We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-2 text-[11px] tracking-[2px] uppercase text-gold border-b border-gold pb-0.5 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0 font-normal hover:opacity-60 transition-opacity"
              >
                Send another inquiry
              </button>
              <style>{`@keyframes popIn { from{transform:scale(0.6);opacity:0} to{transform:scale(1);opacity:1} }`}</style>
            </div>
          )}

          {/* FORM */}
          {status !== 'success' && (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Error banner */}
              {status === 'error' && (
                <div className="sm:col-span-2 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-red-400 shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="text-[13px] text-red-600 leading-relaxed">{errorMsg}</p>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Your Name *</label>
                <input
                  name="name" required value={form.name} onChange={handleChange}
                  placeholder="e.g. Amara Johnson"
                  disabled={status === 'loading'}
                  className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Phone Number *</label>
                <input
                  name="phone" required value={form.phone} onChange={handleChange}
                  placeholder="+254 700 000 000" type="tel"
                  disabled={status === 'loading'}
                  className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Event type */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Event Type *</label>
                <select
                  name="eventType" required value={form.eventType} onChange={handleChange}
                  disabled={status === 'loading'}
                  className={`${inputClass} appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <option value="">Select event type</option>
                  {eventTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              {/* Event date */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Event Date *</label>
                <input
                  name="date" required value={form.date} onChange={handleChange}
                  type="date"
                  disabled={status === 'loading'}
                  className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Number of Guests</label>
                <input
                  name="guests" value={form.guests} onChange={handleChange}
                  placeholder="e.g. 150"
                  disabled={status === 'loading'}
                  className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Venue */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Venue / Location</label>
                <input
                  name="venue" value={form.venue} onChange={handleChange}
                  placeholder="e.g. Nairobi, Garden Estate"
                  disabled={status === 'loading'}
                  className={`${inputClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] tracking-[2.5px] uppercase text-muted font-medium">Tell Us About Your Vision</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe the theme, colors, or any specific ideas you have in mind..."
                  rows={5}
                  disabled={status === 'loading'}
                  className={`${inputClass} resize-y disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold text-dark py-4 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status !== 'loading' && (
                    <span
                      className="absolute inset-0 -translate-x-100 group-hover:translate-x-100 transition-transform duration-700"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
                    />
                  )}
                  {status === 'loading' ? (
                    <span className="relative flex items-center justify-center gap-3">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                        <path d="M12 2a10 10 0 0 1 10 10"/>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="relative">
                      {status === 'error' ? 'Try Again →' : 'Send Inquiry →'}
                    </span>
                  )}
                </button>
                <p className="text-[11px] text-muted mt-3 text-center">
                  We'll get back to you within 24 hours.
                </p>
              </div>

            </form>
          )}

        </FadeIn>
      </div>
    </section>
  )
}