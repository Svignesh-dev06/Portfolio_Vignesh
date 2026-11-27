import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { skills } from "../data/skills.js";
import Button from "../components/Button.jsx";
import profile from "../assets/Profile.jpg";
import { revealItem, staggerReveal } from "../motion.js";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Web Developer"];
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const [hasProfileImage, setHasProfileImage] = useState(true);
  const [resumeAvailable, setResumeAvailable] = useState(false);

  useEffect(() => {
    let roleIndex = 0;
    let currentText = "";
    let deleting = false;
    let timer;

    function typeNext() {
      const target = roles[roleIndex];
      if (deleting) {
        currentText = target.slice(0, currentText.length - 1);
        setTypedRole(currentText);
        if (!currentText) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timer = window.setTimeout(typeNext, 320);
          return;
        }
        timer = window.setTimeout(typeNext, 38);
        return;
      }

      currentText = target.slice(0, currentText.length + 1);
      setTypedRole(currentText);
      if (currentText === target) {
        deleting = true;
        timer = window.setTimeout(typeNext, 1500);
        return;
      }
      timer = window.setTimeout(typeNext, 82);
    }

    timer = window.setTimeout(typeNext, 400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(resumeUrl, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) {
          setResumeAvailable(
            response.ok &&
              response.headers.get("content-type")?.includes("application/pdf"),
          );
        }
      })
      .catch(() => {
        if (!cancelled) setResumeAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
      <div className="hero-decoration hero-decoration-two" aria-hidden="true" />
      <div className="hero-layout page-container">
        <motion.div
          className="portrait-column"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            x: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="portrait-frame">
            {hasProfileImage ? (
              <img
                src={profile}
                alt="Portrait of Vignesh S"
                fetchPriority="high"
                decoding="async"
                onError={() => setHasProfileImage(false)}
              />
            ) : (
              <div
                className="portrait-fallback"
                aria-label="Vignesh S monogram"
              >
                <span>VS</span>
                <small>VIGNESH S</small>
              </div>
            )}
          </div>
          <div className="portrait-caption">
            <span className="caption-dot" />
            <span>Based in Tirunelveli, India</span>
          </div>
          <span className="portrait-index" aria-hidden="true">
            01 / 03
          </span>
        </motion.div>

        <motion.div
          className="hero-copy"
          variants={staggerReveal}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-kicker" variants={revealItem}>
            <span /> HELLO, I&apos;M VIGNESH S
          </motion.p>
          <motion.h1 className="hero-title" aria-label={typedRole} variants={revealItem}>
            <span className="typed-role">{typedRole}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </motion.h1>
          <motion.p className="hero-value-line" variants={revealItem}>
            <span className="hero-value-marker" aria-hidden="true" />
            Building responsive MERN stack web apps
          </motion.p>
          <motion.p className="hero-description" variants={revealItem}>
            I build responsive, user-friendly web applications with thoughtful
            frontend experiences and dependable backend implementation.
          </motion.p>
          <motion.div className="hero-actions" variants={revealItem}>
            <Button
              href="#projects"
              icon={<ArrowRight size={16} aria-hidden="true" />}
            >
              View My Projects
            </Button>
            <Button
              href={resumeAvailable ? resumeUrl : undefined}
              download
              disabled={!resumeAvailable}
              variant="secondary"
              icon={<ArrowDownToLine size={16} aria-hidden="true" />}
              title={
                resumeAvailable
                  ? "Download resume PDF"
                  : "Add a resume PDF at public/resume.pdf to enable this download"
              }
            >
              {resumeAvailable ? "Download Resume" : "Resume Unavailable"}
            </Button>
          </motion.div>
          {!resumeAvailable && (
            <motion.p className="resume-unavailable-note" variants={revealItem}>
              Add a valid PDF at public/resume.pdf to enable this download.
            </motion.p>
          )}
          <motion.div className="hero-bottom" variants={revealItem}>
            <div className="social-links" aria-label="Social profiles">
              <motion.a
                href="https://github.com/Svignesh-dev06"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <FaGithub size={18} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vigneshs-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <FaLinkedinIn size={18} aria-hidden="true" />
              </motion.a>
            </div>
            <span className="hero-social-label">Find me online</span>
            <span className="hero-location">
              <MapPin size={14} aria-hidden="true" /> Tirunelveli, India
            </span>
          </motion.div>
        </motion.div>

        <motion.aside
          className="tech-composition"
          aria-label="Technology stack"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="tech-heading">
            <span className="tech-heading-line" />
            <span>MY TOOLKIT</span>
            <span className="tech-heading-line" />
          </div>
          <div className="tech-grid">
            {skills.map(({ name, Icon, className }, index) => (
              <motion.div
                className={`tech-card ${className}`}
                key={name}
                title={name}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  delay: 0.5 + index * 0.085,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3, scale: 1.06 }}
              >
                <Icon size={25} aria-hidden="true" />
                <span>{name}</span>
              </motion.div>
            ))}
          </div>
          <p className="tech-caption">
            Tools for thoughtful digital experiences.
          </p>
          <svg
            className="tech-orbit"
            viewBox="0 0 360 330"
            fill="none"
            aria-hidden="true"
          >
            <path d="M13 57C96 17 102 114 179 82S271 37 347 83" />
            <path d="M12 258C99 191 119 289 194 230S270 174 348 221" />
            <circle cx="27" cy="58" r="3" />
            <circle cx="335" cy="84" r="3" />
            <circle cx="328" cy="221" r="3" />
          </svg>
        </motion.aside>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;
