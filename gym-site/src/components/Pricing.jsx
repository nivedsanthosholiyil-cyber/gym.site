export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-zinc-950 text-white py-24 px-10"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Membership Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-10 rounded-3xl hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all">

          <h3 className="text-3xl font-bold mb-4">
            Basic
          </h3>

          <p className="text-5xl font-bold text-yellow-400 mb-6">
            ₹999
          </p>

          <div className="space-y-4 text-zinc-300">
            <p>✔ Gym Access</p>
            <p>✔ Cardio Area</p>
            <p>✔ Locker Access</p>
          </div>

        </div>

        <div className="bg-yellow-400 text-black p-10 rounded-3xl scale-105 shadow-2xl hover:-translate-y-2 duration-300 transition-all">

          <h3 className="text-3xl font-bold mb-4">
            Premium
          </h3>

          <p className="text-5xl font-bold mb-6">
            ₹2499
          </p>

          <div className="space-y-4">
            <p>✔ Personal Trainer</p>
            <p>✔ Diet Guidance</p>
            <p>✔ Full Access</p>
          </div>

        </div>

        <div className="bg-zinc-900 p-10 rounded-3xl hover:-translate-y-2 hover:shadow-2xl duration-300 transition-all">

          <h3 className="text-3xl font-bold mb-4">
            Elite
          </h3>

          <p className="text-5xl font-bold text-yellow-400 mb-6">
            ₹4999
          </p>

          <div className="space-y-4 text-zinc-300">
            <p>✔ VIP Coaching</p>
            <p>✔ Recovery Sessions</p>
            <p>✔ Premium Access</p>
          </div>

        </div>

      </div>

    </section>
  )
}