import weights from "../assets/weights.jpg"
import trainer from "../assets/trainer.jpg"

export default function Services() {
  return (
    <section
      id="programs"
      className="bg-black text-white py-24 px-10"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Our Programs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all">

          <img
            src={weights}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-3">
              Muscle Building
            </h3>

            <p className="text-zinc-400">
              Elite hypertrophy and strength-focused training.
            </p>

          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all">

          <img
            src={trainer}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-3">
              Personal Coaching
            </h3>

            <p className="text-zinc-400">
              One-on-one transformation coaching.
            </p>

          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all">

          <img
            src={weights}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-3">
              Fat Loss
            </h3>

            <p className="text-zinc-400">
              Structured plans for rapid body transformation.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}