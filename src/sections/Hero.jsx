import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowRight, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { skills } from '../data/skills.js'
import Button from '../components/Button.jsx'
import profile from '../assets/Profile.png'

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Web Developer']

function Hero() {
  const [typedRole, setTypedRole] = useState('')
  const [hasProfileImage, setHasProfileImage] = useState(true)
  const [resumeAvailable, setResumeAvailable] = useState(false)

  useEffect(() => {
    let roleIndex = 0
    let currentText = ''
    let deleting = false
    let timer

    function typeNext() {
      const target = roles[roleIndex]
      if (deleting) {
        currentText = target.slice(0, currentText.length - 1)
        setTypedRole(currentText)
        if (!currentText) {
          deleting = false
          roleIndex = (roleIndex + 1) % roles.length
          timer = window.setTimeout(typeNext, 320)
          return
        }
        timer = window.setTimeout(typeNext, 38)
        return
      }

      currentText = target.slice(0, currentText.length + 1)
      setTypedRole(currentText)
      if (currentText === target) {
        deleting = true
        timer = window.setTimeout(typeNext, 1500)
        return
      }
      timer = window.setTimeout(typeNext, 82)
    }

    timer = window.setTimeout(typeNext, 400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((response) => {
        if (!cancelled) {
          setResumeAvailable(response.ok && response.headers.get('content-type')?.includes('application/pdf'))
        }
      })
      .catch(() => {
        if (!cancelled) setResumeAvailable(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="hero-section" id="home">
      <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
      <div className="hero-decoration hero-decoration-two" aria-hidden="true" />
      <div className="hero-layout page-container">
        <div className="portrait-column">
          <div className="portrait-frame">
            {hasProfileImage ? (
              <img
                src={profile}
                alt="Portrait of Vignesh S"
                onError={() => setHasProfileImage(false)}
              />
            ) : (
              <div className="portrait-fallback" aria-label="Vignesh S monogram">
                <span>VS</span>
                <small>VIGNESH S</small>
              </div>
            )}
          </div>
          <div className="portrait-caption">
            <span className="caption-dot" />
            <span>Based in Tirunelveli, India</span>
          </div>
          <span className="portrait-index" aria-hidden="true">01 / 03</span>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker"><span /> HELLO, I&apos;M VIGNESH S</p>
          <h1 className="hero-title" aria-label={typedRole}>
            <span className="typed-role">{typedRole}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </h1>
          <p className="hero-value-line">
            <span className="hero-value-marker" aria-hidden="true" />
            Building responsive MERN stack web apps
          </p>
          <p className="hero-description">
            I create modern, user-friendly experiences across the frontend and backend.
          </p>
          <div className="hero-actions">
            <Button href="#projects" icon={<ArrowRight size={16} aria-hidden="true" />}>
              View My Projects
            </Button>
            <Button
              href={resumeAvailable ? '/resume.pdf' : undefined}
              download
              disabled={!resumeAvailable}
              variant="secondary"
              icon={<ArrowDownToLine size={16} aria-hidden="true" />}
              title={resumeAvailable ? 'Download resume PDF' : 'Add a real PDF at /resume.pdf to enable this download'}
            >
              {resumeAvailable ? 'Download Resume' : 'Resume Unavailable'}
            </Button>
          </div>
          <div className="hero-bottom">
            <div className="social-links" aria-label="Social profiles">
              <a href="https://github.com/Svignesh-dev06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={18} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/vigneshs-developer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={18} aria-hidden="true" />
              </a>
            </div>
            <span className="hero-social-label">Find me online</span>
            <span className="hero-location"><MapPin size={14} aria-hidden="true" /> Tirunelveli, India</span>
          </div>
        </div>

        <aside className="tech-composition" aria-label="Technology stack">
          <div className="tech-heading">
            <span className="tech-heading-line" />
            <span>MY TOOLKIT</span>
            <span className="tech-heading-line" />
          </div>
          <div className="tech-grid">
            {skills.map(({ name, Icon, className }, index) => (
              <div
                className={`tech-card ${className}`}
                key={name}
                style={{ '--float-delay': `${index * -0.37}s` }}
                title={name}
              >
                <Icon size={25} aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className="tech-caption">Tools for thoughtful digital experiences.</p>
          <svg className="tech-orbit" viewBox="0 0 360 330" fill="none" aria-hidden="true">
            <path d="M13 57C96 17 102 114 179 82S271 37 347 83" />
            <path d="M12 258C99 191 119 289 194 230S270 174 348 221" />
            <circle cx="27" cy="58" r="3" />
            <circle cx="335" cy="84" r="3" />
            <circle cx="328" cy="221" r="3" />
          </svg>
        </aside>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Hero
