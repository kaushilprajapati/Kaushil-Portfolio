import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Stack from './components/Stack'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <div className="noise relative">
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[var(--color-gold-bright)] to-[var(--color-ember)]"
      />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
