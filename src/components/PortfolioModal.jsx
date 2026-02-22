import { useEffect, useRef, useState } from 'react'

/* ── Icons ── */
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const MetaItem = ({ label, value }) => (
  <div className="border-l-2 border-gold pl-3">
    <div className="text-[9px] tracking-[3px] uppercase text-gold mb-0.5 font-medium">{label}</div>
    <div className="text-[13px] text-white/80 font-light">{value}</div>
  </div>
)

export default function PortfolioModal({ item, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const [animateIn, setAnimateIn] = useState(false)
  const [sliding,   setSliding]   = useState(false)
  const [slideDir,  setSlideDir]  = useState(null)

  const touchStartX = useRef(null)

  const total = item.gallery.length

  /* ── Animate in ── */
  useEffect(() => {
    const t = setTimeout(() => setAnimateIn(true), 20)
    return () => clearTimeout(t)
  }, [])

  /* ── Lock scroll ── */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     handleClose()
      if (e.key === 'ArrowLeft')  navigate('prev')
      if (e.key === 'ArrowRight') navigate('next')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeImg, sliding])

  /* ── Navigate ── */
  const navigate = (dir) => {
    if (sliding || total <= 1) return
    setSliding(true)
    setSlideDir(dir === 'next' ? 'left' : 'right')
    setTimeout(() => {
      setActiveImg(prev => dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total)
      setSlideDir(null)
      setSliding(false)
    }, 300)
  }

  /* ── Touch swipe ── */
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 44) navigate(dx < 0 ? 'next' : 'prev')
    touchStartX.current = null
  }

  /* ── Close ── */
  const handleClose = () => {
    setAnimateIn(false)
    setTimeout(onClose, 350)
  }

  /* ── Pre-fill contact ── */
  const handleQuote = () => {
    handleClose()
    setTimeout(() => {
      const contact = document.getElementById('contact')
      if (!contact) return
      contact.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const select = contact.querySelector('select[name="eventType"]')
        if (select) {
          // Map portfolio category to contact form option
          const map = {
            Wedding:    'Wedding',
            Corporate:  'Corporate Event',
            Graduation: 'Graduation Party',
            Birthday:   'Birthday Party',
            Outdoor:    'Outdoor Event',
          }
          select.value = map[item.category] || 'Other'
          select.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, 800)
    }, 400)
  }

  if (!item) return null

  const slideClass = slideDir === 'left'
    ? 'portfolio-slide-left'
    : slideDir === 'right'
    ? 'portfolio-slide-right'
    : ''

  return (
    <>
      <style>{`
        @keyframes pSlideFromRight { from { opacity:0; transform:translateX(52px);  } to { opacity:1; transform:none; } }
        @keyframes pSlideFromLeft  { from { opacity:0; transform:translateX(-52px); } to { opacity:1; transform:none; } }
        @keyframes pFadeHint { 0%{opacity:.5} 60%{opacity:.5} 100%{opacity:0} }
        .portfolio-slide-left  { animation: pSlideFromRight 0.3s cubic-bezier(.25,.46,.45,.94) forwards; }
        .portfolio-slide-right { animation: pSlideFromLeft  0.3s cubic-bezier(.25,.46,.45,.94) forwards; }
        .p-swipe-hint { animation: pFadeHint 2.2s ease 1s forwards; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-200 flex items-center justify-center p-4 lg:p-8"
        style={{
          backgroundColor: `rgba(26,22,18,${animateIn ? 0.92 : 0})`,
          transition: 'background-color 0.35s ease',
        }}
        onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
      >
        {/* Modal — dark theme to feel immersive / editorial */}
        <div
          className="relative w-full max-w-285 max-h-[92vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
          style={{
            background:  '#1A1612',
            opacity:     animateIn ? 1 : 0,
            transform:   animateIn ? 'translateY(0) scale(1)' : 'translateY(44px) scale(0.97)',
            transition:  'opacity 0.4s ease, transform 0.4s ease',
          }}
        >

          {/* ══ LEFT — full-bleed image carousel ══ */}
          <div
            className="relative w-full lg:w-[58%] shrink-0 overflow-hidden bg-dark"
            style={{ minHeight: '300px' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Image */}
            <div className="relative h-72 lg:h-full overflow-hidden">
              <img
                key={activeImg}
                src={item.gallery[activeImg]}
                alt={`${item.theme} — photo ${activeImg + 1}`}
                className={`w-full h-full object-cover ${slideClass}`}
              />

              {/* Top gradient for counter legibility */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-dark/70 to-transparent pointer-events-none" />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-dark/90 to-transparent pointer-events-none" />

              {/* ── Desktop arrows ── */}
              {total > 1 && (
                <>
                  <button
                    onClick={() => navigate('prev')}
                    aria-label="Previous photo"
                    className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-dark/50 border border-white/15 text-white hover:bg-gold hover:border-gold hover:text-dark transition-all duration-250 cursor-pointer backdrop-blur-sm"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => navigate('next')}
                    aria-label="Next photo"
                    className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-dark/50 border border-white/15 text-white hover:bg-gold hover:border-gold hover:text-dark transition-all duration-250 cursor-pointer backdrop-blur-sm"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}

              {/* Mobile swipe hint */}
              {total > 1 && (
                <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="p-swipe-hint text-white/40 text-[10px] tracking-[3px] uppercase">← swipe →</span>
                </div>
              )}

              {/* Counter */}
              {total > 1 && (
                <div className="absolute top-4 left-4 bg-dark/50 backdrop-blur-sm border border-white/10 px-2.5 py-1">
                  <span className="text-[10px] tracking-[2px] text-white/60">{activeImg + 1} / {total}</span>
                </div>
              )}
            </div>

            {/* ── Thumbnail strip — desktop ── */}
            {total > 1 && (
              <div className="hidden lg:flex absolute bottom-10 left-0 right-0 justify-center gap-2 px-6">
                {item.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!sliding) { setSlideDir(i > activeImg ? 'left' : 'right'); setTimeout(() => { setActiveImg(i); setSlideDir(null) }, 300) } }}
                    aria-label={`View photo ${i + 1}`}
                    className="overflow-hidden border-2 transition-all duration-300 cursor-pointer shrink-0"
                    style={{
                      width:       '56px',
                      height:      '40px',
                      borderColor: activeImg === i ? '#C9A84C' : 'rgba(255,255,255,0.15)',
                      opacity:     activeImg === i ? 1 : 0.45,
                      transform:   activeImg === i ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Dot indicators */}
            {total > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {item.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i > activeImg ? 'next' : 'prev')}
                    className="cursor-pointer border-none transition-all duration-300"
                    style={{
                      width:           activeImg === i ? '20px' : '6px',
                      height:          '6px',
                      borderRadius:    '3px',
                      backgroundColor: activeImg === i ? '#C9A84C' : 'rgba(255,255,255,0.25)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ══ RIGHT — case study details ══ */}
          <div className="flex-1 overflow-y-auto flex flex-col p-7 lg:p-10">

            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
              style={{ background: 'rgba(26,22,18,0.8)' }}
            >
              <CloseIcon />
            </button>

            {/* Category pill */}
            <div className="mb-5">
              <span className="inline-block text-[9px] tracking-[3px] uppercase border border-gold/50 text-gold px-3 py-1.5">
                {item.category}
              </span>
            </div>

            {/* Theme / title */}
            <h2
              className="font-display font-light leading-tight text-white mb-3"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
            >
              {item.theme}
            </h2>

            {/* Gold divider */}
            <div className="w-10 h-px bg-gold mb-6" />

            {/* Summary */}
            <p
              className="text-[14px] lg:text-[15px] leading-[1.9] mb-8"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {item.summary}
            </p>

            {/* Meta grid */}
            <div
              className="grid grid-cols-2 gap-5 mb-8 pb-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <MetaItem label="Location" value={item.location} />
              <MetaItem label="Guests"   value={item.guests}   />
              <MetaItem label="Theme"    value={item.theme.split(' ').slice(0, 3).join(' ')} />
              <MetaItem label="Year"     value={item.year}     />
            </div>

            {/* Photo count indicator */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {item.gallery.map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 overflow-hidden border border-white/10 cursor-pointer transition-all duration-300"
                    style={{ opacity: activeImg === i ? 1 : 0.4, transform: activeImg === i ? 'scale(1.15)' : 'scale(1)' }}
                    onClick={() => navigate(i > activeImg ? 'next' : 'prev')}
                  >
                    <img src={item.gallery[i]} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] tracking-[2px] text-white/30 uppercase">
                {total} photos
              </span>
            </div>

            <div className="flex-1" />

            {/* CTA */}
            <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[12px] text-white/30 mb-4 tracking-wide">
                Inspired by this event?
              </p>
              <button
                onClick={handleQuote}
                className="group relative flex items-center gap-3 bg-gold text-dark px-8 py-3.5 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 overflow-hidden"
              >
                <span
                  className="absolute inset-0 -translate-x-100 group-hover:translate-x-100 transition-transform duration-700"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                />
                <span className="relative">Plan a Similar Event</span>
                <span className="relative"><ArrowIcon /></span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}