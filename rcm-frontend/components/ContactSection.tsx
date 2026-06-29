export default function ContactSection({ data }: { data: any }) {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{data?.heading}</h2>
        <p className="text-gray-500 mb-10 text-lg">{data?.subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={`mailto:${data?.email}`}
            className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            📧 {data?.email}
          </a>
          <a
            href={`tel:${data?.phone}`}
            className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            📞 {data?.phone}
          </a>
        </div>
        <p className="text-gray-400 text-sm">© 2026 RCM Services. All rights reserved.</p>
      </div>
    </section>
  )
}