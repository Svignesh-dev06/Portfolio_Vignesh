import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { revealItem, staggerReveal, viewportOnce } from '../motion.js'

function About() {
  return (
    <section className="section about-section" id="about">
      <motion.div
        className="page-container about-layout"
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className="about-heading" variants={revealItem}>
          <span className="section-eyebrow"><span /> ABOUT ME</span>
          <h2>Building for the web,<br /><span>with purpose.</span></h2>
        </motion.div>
        <motion.div className="about-copy" variants={staggerReveal}>
          <motion.p className="about-lede" variants={revealItem}>
            I&apos;m Vignesh S, a MERN stack developer who enjoys turning thoughtful ideas into useful web experiences.
          </motion.p>
          <motion.p className="body-copy" variants={revealItem}>
            I work across interfaces and the systems behind them, focusing on clear design, responsive behavior, and dependable implementation. I&apos;m always learning and refining the details that make a product feel right.
          </motion.p>
          <motion.div className="about-facts" variants={staggerReveal}>
            <motion.div className="education-fact" variants={revealItem}>
              <GraduationCap size={19} aria-hidden="true" />
              <span>
                <small>EDUCATION</small>
                Bachelor of Commerce — The Madurai Diraviyam Thayumanavar Hindu College (2023 – 2026)
              </span>
            </motion.div>
            <motion.div variants={revealItem}>
              <MapPin size={18} aria-hidden="true" />
              <span><small>BASED IN</small>Tirunelveli, Tamil Nadu, India</span>
            </motion.div>
          </motion.div>
          <motion.a className="text-link" href="#contact" variants={revealItem}>Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" /></motion.a>
        </motion.div>
      </motion.div>
      <div className="about-note" aria-hidden="true"><Sparkles size={16} /> Curiosity meets craft</div>
    </section>
  )
}

export default About
