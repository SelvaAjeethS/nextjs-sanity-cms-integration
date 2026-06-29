export default function WhyUsSection({ data }: { data: any[] }) {
  return (
    <section id="why-us" className="py-24 bg-blue-700 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
          <p className="text-blue-200 mt-3">Numbers that speak for themselves</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.map((item) => (
            <div key={item._id} className="bg-blue-800 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">{item.stat}</div>
              <div className="text-blue-300 font-semibold mb-3">{item.point}</div>
              <p className="text-blue-200 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}