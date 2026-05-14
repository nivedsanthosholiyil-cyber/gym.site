export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-4 gap-14">

        <div>
          <h1 className="text-4xl font-black text-yellow-400 mb-5">
            ELSIA GYM
          </h1>

          <p className="text-zinc-400">
            Premium fitness club focused on strength,
            transformation and elite performance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">

            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>

            <a href="#programs" className="hover:text-yellow-400">
              Programs
            </a>

            <a href="#pricing" className="hover:text-yellow-400">
              Pricing
            </a>

            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>

          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Contact
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">
            <p>Kochi, Kerala</p>
            <p>+91 9876543210</p>
            <p>contact@elsiagym.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Working Hours
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">
            <p>Monday - Friday</p>
            <p>5AM - 11PM</p>
            <p>Saturday - Sunday</p>
            <p>6AM - 10PM</p>
          </div>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-zinc-500">
        © 2026 Elsia Gym. All rights reserved.
      </div>

    </footer>
  )
}