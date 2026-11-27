import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { revealItem, staggerReveal, viewportOnce } from '../motion.js'

function Footer() {
  return (
    <motion.footer
      className="site-footer"
      variants={staggerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="page-container footer-content" variants={staggerReveal}>
        <motion.a className="brand footer-brand" href="#home" aria-label="Vignesh S, back to top" variants={revealItem}>
          <span className="brand-mark" aria-hidden="true">VS</span>
          <span className="brand-name">VIGNESH S</span>
        </motion.a>
        <motion.span className="footer-note" variants={revealItem}>Full Stack Developer (MERN Stack)</motion.span>
        <motion.a className="footer-top-link" href="#home" variants={revealItem} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          Back to top <ArrowUpRight size={15} aria-hidden="true" />
        </motion.a>
      </motion.div>
      <motion.div className="footer-bottom page-container" variants={revealItem}>
        <span>© {new Date().getFullYear()} Vignesh S</span>
        <span>Tirunelveli, Tamil Nadu, India</span>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
