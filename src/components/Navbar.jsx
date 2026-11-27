import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links
      .map((label) => document.getElementById(label.toLowerCase()))
      .filter(Boolean)
    let updateTimer

    function updateActiveSection() {
      window.clearTimeout(updateTimer)
      updateTimer = window.setTimeout(() => {
        const scrollOffset = parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        )
        let activeSection = sections[0]

        sections.forEach((section) => {
          if (section.getBoundingClientRect().top <= scrollOffset + 2) {
            activeSection = section
          }
        })

        if (activeSection) setActiveSection(activeSection.id)
      }, 100)
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.clearTimeout(updateTimer)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-shell page-container" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={() => {
            setActiveSection('home')
            closeMenu()
          }}
          aria-label="Vignesh S, home"
        >
          <span className="brand-mark" aria-hidden="true">VS</span>
          <span className="brand-name">VIGNESH S</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}
        >
          {links.map((label) => {
            const id = label.toLowerCase()
            return (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => {
                  setActiveSection(id)
                  closeMenu()
                }}
              >
                {label}
              </a>
            )
          })}
         
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
