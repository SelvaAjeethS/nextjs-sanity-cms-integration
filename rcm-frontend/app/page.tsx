import { client } from '@/lib/sanityClient'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyUsSection from '@/components/WhyUsSection'
import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'

// re-fetch from Sanity every 30 seconds 
async function getData() {
  const [hero, services, whyUs, contact] = await Promise.all([
    client.fetch(`*[_type == "hero"][0]`, {}, { next: { revalidate: 30 } }),
    client.fetch(`*[_type == "service"] | order(order asc)`, {}, { next: { revalidate: 30 } }),
    client.fetch(`*[_type == "whyUs"]`, {}, { next: { revalidate: 30 } }),
    client.fetch(`*[_type == "contactSection"][0]`, {}, { next: { revalidate: 30 } }),
  ])
  return { hero, services, whyUs, contact }
}

export default async function Home() {
  const { hero, services, whyUs, contact } = await getData()

  return (
    <main className="font-sans text-gray-800">
      <Navbar />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <WhyUsSection data={whyUs} />
      <ContactSection data={contact} />
    </main>
  )
}