export default function ServicesSection({ data }: { data: any[] }) {
  return (
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-500 mt-3">Comprehensive solutions across the full revenue cycle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}