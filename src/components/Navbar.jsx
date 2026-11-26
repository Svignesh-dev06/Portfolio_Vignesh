import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links
      .map((label) => document.getElementById(label.toLowerCase()))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.1, 0.3] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav-shell page-container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Vignesh S, home">
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
                onClick={closeMenu}
              >
                {label}
              </a>
            )
          })}
         
        </div>
      </nav>
    </header>
  )
}

export default Navbar
