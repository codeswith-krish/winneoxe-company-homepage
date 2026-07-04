import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Clients } from '@/components/clients'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { CTABanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <Services />
        <WhyUs />
        <Process />
        <Technologies />
        <Projects />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
