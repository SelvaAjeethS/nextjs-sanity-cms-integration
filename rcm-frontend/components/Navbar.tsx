export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-8 py-4 flex justify-between items-center">
      <span className="text-blue-700 font-bold text-xl">RCM<span className="text-gray-800">Services</span></span>
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <a href="#services" className="hover:text-blue-700 transition">Services</a>
        <a href="#why-us" className="hover:text-blue-700 transition">Why Us</a>
        <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
      </div>
    </nav>
  )
}