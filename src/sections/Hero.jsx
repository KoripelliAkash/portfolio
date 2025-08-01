import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hello there!,</h1>
        <h1>I'm <span>Koripelli Akash</span></h1>
        <h2>
          <TypeAnimation
            sequence={[
              'Creative Developer',
              2000,
              'Data Scientist',
              2000,
              'Automation Developer',
              2000,
              'Software Engineer',
              2000,
              'System Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </h2>
        <p>koripelliakash@gmail.com</p>
      </motion.div>
    </section>
  )
}