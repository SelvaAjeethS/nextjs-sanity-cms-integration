import { urlFor } from '@/lib/sanityClient'

export default function HeroSection({ data }: { data: any }) {
  const imageUrl = data?.heroImage ? urlFor(data.heroImage) : null

  return (
    <section
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
      }}
      className="relative min-h-screen bg-blue-700 bg-cover bg-center flex items-center justify-center text-white text-center px-6 pt-20"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-3xl z-10">
        <span className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-4 block">
          Healthcare Revenue Solutions
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-6">{data?.heading}</h1>
        <p className="text-blue-100 text-lg mb-10 leading-relaxed">{data?.subheading}</p>
        <a
          href="#contact"
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition shadow-lg"
        >
          {data?.ctaText}
        </a>
      </div>
    </section>
  )
}