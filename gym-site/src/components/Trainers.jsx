import trainer from "../assets/trainer.jpg"

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="bg-black text-white py-24 px-10"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Elite Trainers
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all"
          >

            <img
              src={trainer}
              className="h-96 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Professional Coach
              </h3>

              <p className="text-yellow-400 mt-2">
                Strength Specialist
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}