import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <a className="brand footer-brand" href="#home" aria-label="Vignesh S, back to top">
          <span className="brand-mark" aria-hidden="true">VS</span>
          <span className="brand-name">VIGNESH S</span>
        </a>
        <span className="footer-note">Full Stack Developer (MERN Stack)</span>
        <a className="footer-top-link" href="#home">
          Back to top <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom page-container">
        <span>© {new Date().getFullYear()} Vignesh S</span>
        <span>Tirunelveli, Tamil Nadu, India</span>
      </div>
    </footer>
  )
}

export default Footer
