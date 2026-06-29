export default function HeroSection({ data }: { data: any }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white text-center px-6 pt-20">
      <div className="max-w-3xl">
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