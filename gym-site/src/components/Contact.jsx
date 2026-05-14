export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-10"
    >

      <div className="max-w-5xl mx-auto bg-zinc-900 rounded-3xl p-12 text-center border border-zinc-800">

        <h2 className="text-5xl font-bold mb-6">
          Ready To Transform?
        </h2>

        <p className="text-zinc-400 text-lg mb-10">
          Join Kerala’s premium fitness community today.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition inline-block"
          >
            Join Now
          </a>

          <button className="border border-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  )
}