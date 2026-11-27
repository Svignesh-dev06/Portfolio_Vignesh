import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { revealItem, staggerReveal, viewportOnce } from "../motion.js";

function Contact() {
  const [copyStatus, setCopyStatus] = useState("idle");
  const [formError, setFormError] = useState("");
  const feedbackTimer = useRef();

  useEffect(() => () => window.clearTimeout(feedbackTimer.current), []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    if (!name || !email || !message) {
      setFormError("Please complete each field before opening your email app.");
      return;
    }

    setFormError("");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:subramaniankv68@gmail.com?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    window.clearTimeout(feedbackTimer.current);
    try {
      await navigator.clipboard.writeText("subramaniankv68@gmail.com");
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    feedbackTimer.current = window.setTimeout(
      () => setCopyStatus("idle"),
      2400,
    );
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-decoration" aria-hidden="true" />
      <motion.div
        className="page-container contact-layout"
        variants={staggerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className="contact-copy" variants={staggerReveal}>
          <motion.span className="section-eyebrow" variants={revealItem}>
            <span /> GET IN TOUCH
          </motion.span>
          <motion.h2 variants={revealItem}>
            Have something
            <br />
            <span>in mind?</span>
          </motion.h2>
          <motion.p variants={revealItem}>
            I&apos;m open to conversations about thoughtful projects and new
            opportunities.
          </motion.p>
          <motion.div className="contact-email-actions" variants={revealItem}>
            <a
              className="contact-email"
              href="mailto:subramaniankv68@gmail.com"
            >
              <Mail size={18} aria-hidden="true" />
              subramaniankv68@gmail.com
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              className="copy-email-button"
              type="button"
              onClick={copyEmail}
            >
              <Copy size={14} aria-hidden="true" />
              {copyStatus === "copied" ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>
          {copyStatus !== "idle" && (
            <div
              className={`copy-email-toast${copyStatus === "error" ? " is-error" : ""}`}
              role="status"
              aria-live="polite"
            >
              {copyStatus === "copied"
                ? "Email copied to clipboard."
                : "Unable to copy email. Please use the email link."}
            </div>
          )}
          <motion.form className="contact-form" onSubmit={handleSubmit} variants={revealItem}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" required />
            </label>
            {formError && <p className="contact-form-error" role="alert">{formError}</p>}
            <button className="button button-primary" type="submit">
              Open email app <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p className="contact-form-note">
              This opens your email app with your message ready to send.
            </p>
          </motion.form>
        </motion.div>
        <motion.div className="contact-details" variants={staggerReveal}>
          <motion.a
            href="https://github.com/Svignesh-dev06"
            target="_blank"
            rel="noopener noreferrer"
            variants={revealItem}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="contact-icon">
              <FaGithub size={19} aria-hidden="true" />
            </span>
            <span>
              <small>GITHUB</small>Svignesh-dev06
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vigneshs-developer/"
            target="_blank"
            rel="noopener noreferrer"
            variants={revealItem}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="contact-icon">
              <FaLinkedinIn size={19} aria-hidden="true" />
            </span>
            <span>
              <small>LINKEDIN</small>vigneshs-developer
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>
          <motion.a
            href="tel:+918072991513"
            variants={revealItem}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="contact-icon">
              <Phone size={19} aria-hidden="true" />
            </span>
            <span>
              <small>PHONE</small>+91 8072991513
            </span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>
          <motion.div className="contact-location" variants={revealItem}>
            <span className="contact-icon">
              <MapPin size={19} aria-hidden="true" />
            </span>
            <span>
              <small>LOCATION</small>Tirunelveli, Tamil Nadu, India
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
