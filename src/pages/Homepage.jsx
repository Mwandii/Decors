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
  return (
    <>
      <Navbar/>
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