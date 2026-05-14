export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-3xl font-black text-yellow-400 tracking-wide">
          ELSIA GYM
        </h1>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-lg font-semibold">

          <a
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#programs"
            className="hover:text-yellow-400 transition duration-300"
          >
            Programs
          </a>

          <a
            href="#pricing"
            className="hover:text-yellow-400 transition duration-300"
          >
            Pricing
          </a>

          <a
            href="#trainers"
            className="hover:text-yellow-400 transition duration-300"
          >
            Trainers
          </a>

          <a
            href="#reviews"
            className="hover:text-yellow-400 transition duration-300"
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}