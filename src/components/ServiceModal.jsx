import { useEffect, useRef, useState } from 'react'

/* ─── Icons ─── */
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 shrink-0 text-gold">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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

export default function ServiceModal({ service, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const [animateIn, setAnimateIn] = useState(false)
  const [sliding,   setSliding]   = useState(false)
  const [slideDir,  setSlideDir]  = useState(null) // 'left' | 'right'

  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const allImages = [service.modalImage, ...(service.gallery || [])]
  const total     = allImages.length

  /* ── Animate in ── */
  useEffect(() => {
    const t = setTimeout(() => setAnimateIn(true), 20)
    return () => clearTimeout(t)
  }, [])

  /* ── Lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  /* ── Keyboard: Escape + arrow keys ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     handleClose()
      if (e.key === 'ArrowLeft')  navigate('prev')
      if (e.key === 'ArrowRight') navigate('next')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeImg, sliding])

  /* ── Navigate with slide animation ── */
  const navigate = (dir) => {
    if (sliding || total <= 1) return
    const goingNext = dir === 'next'
    setSliding(true)
    setSlideDir(goingNext ? 'left' : 'right')
    setTimeout(() => {
      setActiveImg(prev => goingNext ? (prev + 1) % total : (prev - 1 + total) % total)
      setSlideDir(null)
      setSliding(false)
    }, 300)
  }

  const goTo = (i) => {
    if (sliding || i === activeImg) return
    navigate(i > activeImg ? 'next' : 'prev')
    // We let navigate handle the index via its timeout, but override it
    // by directly setting after the animation:
    const targetIndex = i
    setTimeout(() => setActiveImg(targetIndex), 300)
  }

  /* ── Touch swipe ── */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 44) {
      navigate(dx < 0 ? 'next' : 'prev')
    }
    touchStartX.current = null
  }

  /* ── Animated close ── */
  const handleClose = () => {
    setAnimateIn(false)
    setTimeout(onClose, 350)
  }

  /* ── Pre-fill contact + scroll ── */
  const handleQuote = () => {
    handleClose()
    setTimeout(() => {
      const contact = document.getElementById('contact')
      if (!contact) return
      contact.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const select = contact.querySelector('select[name="eventType"]')
        if (select) {
          select.value = service.quoteEventType
          select.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, 800)
    }, 400)
  }

  if (!service) return null

  return (
    <>
      <style>{`
        @keyframes slideInFromRight { from { opacity:0; transform:translateX(48px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInFromLeft  { from { opacity:0; transform:translateX(-48px); } to { opacity:1; transform:translateX(0); } }
        @keyframes hintFade         { 0%{opacity:.6} 60%{opacity:.6} 100%{opacity:0} }
        .slide-from-right { animation: slideInFromRight 0.3s cubic-bezier(.25,.46,.45,.94) forwards; }
        .slide-from-left  { animation: slideInFromLeft  0.3s cubic-bezier(.25,.46,.45,.94) forwards; }
        .swipe-hint       { animation: hintFade 2.2s ease 1s forwards; }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-200 flex items-center justify-center p-4 lg:p-8"
        style={{
          backgroundColor: `rgba(26,22,18,${animateIn ? 0.87 : 0})`,
          transition: 'background-color 0.35s ease',
        }}
        onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
      >

        {/* ── Modal ── */}
        <div
          className="relative bg-warmwhite w-full max-w-275 max-h-[92vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
          style={{
            opacity:    animateIn ? 1 : 0,
            transform:  animateIn ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >

          {/* ══ LEFT — Image carousel panel ══ */}
          <div
            className="relative w-full lg:w-[48%] shrink-0 bg-dark overflow-hidden select-none"
            style={{ minHeight: '280px' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* ── Main image with slide animation ── */}
            <div className="relative h-64 lg:h-full overflow-hidden">
              <img
                key={activeImg}
                src={allImages[activeImg]}
                alt={`${service.title} — photo ${activeImg + 1} of ${total}`}
                className={`w-full h-full object-cover ${
                  slideDir === 'left'  ? 'slide-from-right' :
                  slideDir === 'right' ? 'slide-from-left'  : ''
                }`}
              />

              {/* Gradient vignette bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-dark/80 to-transparent pointer-events-none" />

              {/* ── Desktop prev/next arrows ── */}
              {total > 1 && (
                <>
                  <button
                    onClick={() => navigate('prev')}
                    aria-label="Previous image"
                    className="
                      hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-10
                      w-10 h-10 items-center justify-center
                      bg-dark/50 border border-white/20 text-white
                      hover:bg-gold hover:border-gold hover:text-dark
                      transition-all duration-250 cursor-pointer
                      backdrop-blur-sm
                    "
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => navigate('next')}
                    aria-label="Next image"
                    className="
                      hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-10
                      w-10 h-10 items-center justify-center
                      bg-dark/50 border border-white/20 text-white
                      hover:bg-gold hover:border-gold hover:text-dark
                      transition-all duration-250 cursor-pointer
                      backdrop-blur-sm
                    "
                  >
                    <ChevronRight />
                  </button>
                </>
              )}

              {/* ── Mobile swipe hint ── */}
              {total > 1 && (
                <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="swipe-hint text-white/50 text-[10px] tracking-[3px] uppercase">
                    ← swipe →
                  </span>
                </div>
              )}
            </div>

            {/* ── Thumbnail strip — desktop only ── */}
            {total > 1 && (
              <div className="hidden lg:flex absolute bottom-12 left-0 right-0 justify-center gap-2 px-4">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`View photo ${i + 1}`}
                    className="overflow-hidden border-2 transition-all duration-300 cursor-pointer shrink-0"
                    style={{
                      width:       '54px',
                      height:      '38px',
                      borderColor: activeImg === i ? '#C9A84C' : 'rgba(255,255,255,0.18)',
                      opacity:     activeImg === i ? 1 : 0.5,
                      transform:   activeImg === i ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* ── Dot indicators — both mobile & desktop ── */}
            {total > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className="cursor-pointer border-none transition-all duration-300"
                    style={{
                      width:           activeImg === i ? '20px' : '6px',
                      height:          '6px',
                      borderRadius:    '3px',
                      backgroundColor: activeImg === i ? '#C9A84C' : 'rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>
            )}

            {/* ── Counter badge ── */}
            {total > 1 && (
              <div className="absolute top-4 right-4 bg-dark/55 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                <span className="text-[10px] tracking-[2px] text-white/65">
                  {activeImg + 1} / {total}
                </span>
              </div>
            )}

            {/* Watermark number */}
            <span
              className="absolute top-3 left-4 font-display text-white/[0.07] select-none pointer-events-none leading-none"
              style={{ fontSize: '72px' }}
            >
              {String(service.id).padStart(2, '0')}
            </span>
          </div>

          {/* ══ RIGHT — Content panel ══ */}
          <div className="flex-1 overflow-y-auto p-7 lg:p-10 flex flex-col">

            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 border border-border flex items-center justify-center text-muted hover:border-dark hover:text-dark transition-all duration-300 cursor-pointer bg-warmwhite z-10"
            >
              <CloseIcon />
            </button>

            <p className="text-[10px] tracking-[4px] uppercase text-gold mb-3 font-medium">
              Our Services
            </p>

            <h2
              className="font-display font-light leading-tight text-brown mb-2"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
            >
              {service.title}
            </h2>

            <p className="font-display italic text-[16px] text-muted mb-5 leading-snug">
              {service.tagline}
            </p>

            <div className="w-10 h-px bg-gold mb-6" />

            <p className="text-[14px] lg:text-[15px] text-muted leading-[1.85] mb-8">
              {service.about}
            </p>

            {/* What's included */}
            <div className="mb-8">
              <h3 className="text-[10px] tracking-[3px] uppercase text-brown font-medium mb-4">
                What's Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] text-muted leading-snug"
                    style={{
                      opacity:    animateIn ? 1 : 0,
                      transform:  animateIn ? 'none' : 'translateX(-8px)',
                      transition: `opacity 0.4s ease ${0.2 + i * 0.05}s, transform 0.4s ease ${0.2 + i * 0.05}s`,
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1" />

            {/* CTA */}
            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleQuote}
                className="group relative flex items-center gap-3 bg-gold text-dark px-8 py-3.5 text-[11px] tracking-[2.5px] uppercase font-medium cursor-pointer border-none hover:bg-gold-light transition-colors duration-300 overflow-hidden"
              >
                <span
                  className="absolute inset-0 -translate-x-100 group-hover:translate-x-100 transition-transform duration-700"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
                />
                <span className="relative">Get a Quote for This</span>
                <span className="relative"><ArrowRightIcon /></span>
              </button>
              <p className="text-[12px] text-muted">We'll reply within 24 hours.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}