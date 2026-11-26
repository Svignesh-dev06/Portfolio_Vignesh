import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from 'lucide-react'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-container about-layout">
        <div className="about-heading">
          <span className="section-eyebrow"><span /> ABOUT ME</span>
          <h2>Building for the web,<br /><span>with purpose.</span></h2>
        </div>
        <div className="about-copy">
          <p className="about-lede">
            I&apos;m Vignesh S, a Full Stack Developer (MERN Stack) who enjoys turning thoughtful ideas into useful web experiences.
          </p>
          <p className="body-copy">
            I work across the interface and the systems behind it, with a focus on clear design, responsive behavior, and dependable implementation. I&apos;m always learning and looking for ways to make the details feel right.
          </p>
          <div className="about-facts">
            <div className="education-fact">
              <GraduationCap size={19} aria-hidden="true" />
              <span>
                <small>EDUCATION</small>
                Bachelor of Commerce — The Madurai Diraviyam Thayumanavar Hindu College (2023 – 2026)
              </span>
            </div>
            <div>
              <MapPin size={18} aria-hidden="true" />
              <span><small>BASED IN</small>Tirunelveli, Tamil Nadu, India</span>
            </div>
          </div>
          <a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="about-note" aria-hidden="true"><Sparkles size={16} /> Curiosity meets craft</div>
    </section>
  )
}

export default About
