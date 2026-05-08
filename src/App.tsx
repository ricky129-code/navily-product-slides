import { Hero } from './sections/Hero'
import { Pain } from './sections/Pain'
import { Vision } from './sections/Vision'
import { Solution } from './sections/Solution'
import { Experience } from './sections/Experience'
import { HowToUse } from './sections/HowToUse'
import { Pricing } from './sections/Pricing'
import { CTA } from './sections/CTA'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Pain />
        <Vision />
        <Solution />
        <Experience />
        <HowToUse />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
