export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-zinc-950 text-white py-24 px-10"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Client Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="bg-zinc-900 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all"
          >

            <p className="text-zinc-300 text-lg leading-relaxed">
              Amazing atmosphere, elite trainers,
              and top-tier equipment.
            </p>

            <div className="mt-6">

              <h3 className="font-bold text-yellow-400">
                Premium Member
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}