import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import IntroBand    from '../components/IntroBand'
import About        from '../components/About'
import Services     from '../components/Services'
import Portfolio    from '../components/Portfolio'
import WhyUs        from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import CTABand      from '../components/CTABand'
import Contact      from '../components/Contact'
import Footer       from '../components/Footer'

export default function HomePage() {
  const { hash } = useLocation()

  /* ── On mount, if there's a hash in the URL scroll to that section ── */
  useEffect(() => {
    if (!hash) return
    // Small delay lets the page fully render before scrolling
    const t = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroBand />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}