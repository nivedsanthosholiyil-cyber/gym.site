import hero from "../assets/hero.jpg"
import { motion } from "framer-motion"

export default function Hero() {
  return (

    <section
      id="home"
      className="h-screen w-full relative overflow-hidden"
    >

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full z-0"></div>

      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full z-0"></div>

      {/* IMAGE */}
      <img
        src={hero}
        alt="gym"
        className="w-full h-full object-cover scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 flex items-center">

        <div className="text-white px-6 md:px-10 max-w-4xl relative z-10">

          {/* TOP TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 uppercase tracking-[6px] mb-5 text-sm md:text-base"
          >
            Premium Fitness Club
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black leading-tight bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
          >
            Build Your <br />
            Dream Physique
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-zinc-300 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed"
          >
            Elite coaching, transformation-focused programs,
            and premium equipment built for serious fitness.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col md:flex-row gap-5 mt-10"
          >

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition inline-block text-center shadow-2xl"
            >
              Join Now
            </a>

            <a
              href="#programs"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition text-center"
            >
              Explore Programs
            </a>

          </motion.div>

        </div>

      </div>

    </section>

  )
}