import Header from './components/Header'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import Regulatory from './components/Regulatory'
import ClientPortal from './components/ClientPortal'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Features />
        <Regulatory />
        <ClientPortal />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
