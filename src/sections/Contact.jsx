import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

function Contact() {
  const [copyStatus, setCopyStatus] = useState('idle')
  const feedbackTimer = useRef()

  useEffect(() => () => window.clearTimeout(feedbackTimer.current), [])

  async function copyEmail() {
    window.clearTimeout(feedbackTimer.current)
    try {
      await navigator.clipboard.writeText('subramaniankv68@gmail.com')
      setCopyStatus('copied')
    } catch {
      setCopyStatus('error')
    }
    feedbackTimer.current = window.setTimeout(() => setCopyStatus('idle'), 2400)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-decoration" aria-hidden="true" />
      <div className="page-container contact-layout">
        <div className="contact-copy">
          <span className="section-eyebrow"><span /> GET IN TOUCH</span>
          <h2>Have something<br /><span>in mind?</span></h2>
          <p>I&apos;m open to conversations about thoughtful projects and new opportunities.</p>
          <div className="contact-email-actions">
            <a className="contact-email" href="mailto:subramaniankv68@gmail.com">
              <Mail size={18} aria-hidden="true" />
              subramaniankv68@gmail.com
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button className="copy-email-button" type="button" onClick={copyEmail}>
              <Copy size={14} aria-hidden="true" />
              {copyStatus === 'copied' ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
          {copyStatus !== 'idle' && (
            <div className={`copy-email-toast${copyStatus === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
              {copyStatus === 'copied' ? 'Email copied to clipboard.' : 'Unable to copy email. Please use the email link.'}
            </div>
          )}
        </div>
        <div className="contact-details">
          <a href="https://github.com/Svignesh-dev06" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon"><FaGithub size={19} aria-hidden="true" /></span>
            <span><small>GITHUB</small>Svignesh-dev06</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/vigneshs-developer/" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon"><FaLinkedinIn size={19} aria-hidden="true" /></span>
            <span><small>LINKEDIN</small>vigneshs-developer</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="tel:+918072991513">
            <span className="contact-icon"><Phone size={19} aria-hidden="true" /></span>
            <span><small>PHONE</small>+91 8072991513</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <div className="contact-location">
            <span className="contact-icon"><MapPin size={19} aria-hidden="true" /></span>
            <span><small>LOCATION</small>Tirunelveli, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
