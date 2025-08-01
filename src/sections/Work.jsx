import { motion } from 'framer-motion'
import img1 from '../assets/ai.jpeg'
import img2 from '../assets/fit.jpeg'
import img3 from '../assets/fin.png'
import img4 from '../assets/pro.png'
import img5 from '../assets/car.png'

export default function Work() {
  const projects = [
    {
      id: 1,
      title: 'AI-Driven Recruitment Automation',
      description:
        'Built an end-to-end recruitment system using n8n, Google Sheets, Flask, and Apify. Enabled resume & LinkedIn scraping, AI-based candidate shortlisting, and real-time interviews with TTS/STT.',
      tags: ['n8n', 'Google Sheets API', 'Flask', 'Apify', 'TTS/STT', 'Automation'],
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7345354285183877120/',
      image: img1
    },
    {
      id: 2,
      title: 'FitFrame – A Fitness Assisting',
      description:
        'Flask-based real-time posture detection system using OpenCV, MediaPipe, and CNN. Includes gamified rewards and a diet planner for gym and yoga users.',
      tags: ['Flask', 'OpenCV', 'MediaPipe', 'Machine Learning', 'CNN'],
      link: 'https://github.com/yourusername/fitframe',
      image: img2
    },
    {
      id: 3,
      title: 'Student Expenditure Management System',
      description:
        'C++ application using file handling and DSA to manage student expenses. Tracks budgets, categorizes spending, and generates monthly reports.',
      tags: ['C++', 'DSA', 'File Handling', 'CLI App'],
      link: 'https://github.com/KoripelliAkash/Student_Expenditure',
      image: img3
    },
    {
      id: 4,
      title: 'CoreSpect – Product Verification via ML',
      description:
        'Used sentiment analysis and RandomForestClassifier to predict product verification status based on ratings, reviews, and pricing. Includes advanced data cleaning, visualization, and model evaluation.',
      tags: ['Python', 'Pandas', 'TextBlob', 'Scikit-Learn', 'ML', 'Sentiment Analysis'],
      link: 'https://github.com/KoripelliAkash/CoreSpect-A_Product_verification_platform',
      image: img4
    },
    {
      id: 5,
      title: 'Car Rental Management System',
      description:
        'Developed a full-stack car rental solution for managing bookings, vehicle inventory, and user records.',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'Full Stack'],
      link: 'https://github.com/KoripelliAkash/vehiclink-haven',
      image: img5
    }
  ];

  return (
    <section className="work">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Work</h2>
        <hr />
        <div className="projects-grid">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-image-placeholder">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <hr />
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}