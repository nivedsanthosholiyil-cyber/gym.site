import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Trainers from "./components/Trainers"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Whatsapp from "./components/Whatsapp"
import Stats from "./components/Stats"

function App() {
  return (

    <div className="bg-black text-white overflow-hidden selection:bg-yellow-400 selection:text-black">

      <Navbar />

      <Hero />

      <Services />

      <Pricing />

      <Trainers />

      <Testimonials />

      <Contact />

      <Stats />

      <Whatsapp />

      <Footer />

    </div>

  )
}

export default App