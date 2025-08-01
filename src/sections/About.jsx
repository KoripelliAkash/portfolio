import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import AboutSplineModel from '../components/AboutSplineModel'

export default function About() {
  const skillPairs = [
    { front: 'react', back: 'mysql' },
    { front: 'nodejs', back: 'mongodb' },
    { front: 'express', back: 'cpp' },
    { front: 'tailwind', back: 'java' },
    { front: 'figma', back: 'python' },
    { front: 'git', back: 'javascript' }
  ]

  return (
    <section className="about">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-glass-container"
      >
        <h2>Know Who I Am</h2>
        <div className="about-content">
          <div className="about-top glass-effect">
            <div className="bio">
              <p className="intro">
                Hi Everyone, I'm <span className="highlight">Akash Koripelli</span> from India.
                I’m passionate about solving real-world problems through code, automation, and scalable system design. Driven by the overlap of software and AI, where smart systems are born.
              </p>
              

              <p className="interest">
                I strongly believe in writing clean, maintainable code, and building systems that don't just work—but work reliably at <span className="highlight">Scale</span>.
              </p>

              <div className="hobbies">
                <p>Apart from coding and building stuff, here are a few things I enjoy:</p>
                <ul>
                  <li>🎮 Gaming (strategy & team-based)</li>
                  <li>✍️ Learning about Tech & Tools</li>
                  <li>🌍 Exploring new places and cultures</li>
                </ul>
              </div>

              <blockquote className="quote">
                "Build things that solve problems—automate the rest."
                <cite>— Akash</cite>
              </blockquote>
            </div>
            
            <div className="skills">
              <h3>Skills</h3>
              <hr />
              <div className="skills-grid">
                {skillPairs.map((pair, index) => (
                  <SkillCard
                    key={index}
                    frontSkill={pair.front}
                    backSkill={pair.back}
                  />
                ))}
              </div>
              <p className="skills-hint">flip to find</p>
            </div>
          </div>
          
          <div className="about-bottom">
            <AboutSplineModel />
            
          </div>
        </div>
      </motion.div>
    </section>
  )
}