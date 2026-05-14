import { motion } from "framer-motion"

export default function Stats() {
  return (

    <section className="bg-zinc-950 text-white py-24 px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800"
        >
          <h2 className="text-6xl font-black text-yellow-400">
            5K+
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Active Members
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800"
        >
          <h2 className="text-6xl font-black text-yellow-400">
            20+
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Elite Trainers
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800"
        >
          <h2 className="text-6xl font-black text-yellow-400">
            12
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Years Experience
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800"
        >
          <h2 className="text-6xl font-black text-yellow-400">
            98%
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Client Satisfaction
          </p>
        </motion.div>

      </div>

    </section>

  )
}