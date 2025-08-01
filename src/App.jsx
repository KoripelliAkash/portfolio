import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplineBackground from './components/SplineBackground'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = {
    home: <Hero />,
    about: <About />,
    work: <Work />,
    contact: <Contact />
  }

  return (
    <div className="portfolio">
      <SplineBackground />
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}