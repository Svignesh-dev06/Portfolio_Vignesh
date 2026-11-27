import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects.js'
import { revealItem, staggerReveal, viewportOnce } from '../motion.js'

function ProjectVisual({ type, previewVideo }) {
  const videoRef = useRef(null)
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false)

  function playPreview() {
    videoRef.current?.play().catch((error) => {
      if (error.name !== 'AbortError') {
        console.error('Unable to play project preview video.', error)
      }
    })
  }

  function pausePreview() {
    videoRef.current?.pause()
    setIsPreviewPlaying(false)
  }

  return (
    <div
      className={`project-visual visual-${type}${isPreviewPlaying ? ' preview-playing' : ''}`}
      onMouseEnter={previewVideo ? playPreview : undefined}
      onMouseLeave={previewVideo ? pausePreview : undefined}
      aria-hidden="true"
    >
      {previewVideo && (
        <video
          ref={videoRef}
          className="project-preview-video"
          src={previewVideo}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setIsPreviewPlaying(true)}
          onPause={() => setIsPreviewPlaying(false)}
        />
      )}
      <div className="browser-window">
        <div className="browser-bar"><i /><i /><i /><span>vignesh.dev / work</span></div>
        {type === 'apple' && (
          <div className="apple-screen">
            <span>Apple Store</span>
            <small>New arrivals</small>
            <strong>Designed to<br />move you.</strong>
            <div className="apple-product"><i /><b /></div>
          </div>
        )}
        {type === 'cinema' && (
          <div className="cinema-screen">
            <span>NOW SHOWING</span>
            <strong>Find your<br />next movie.</strong>
            <div className="movie-strip"><i /><i /><i /></div>
          </div>
        )}
        {type === 'movemate' && (
          <div className="movemate-screen">
            <span>movemate <i /></span>
            <strong>Make moving<br />feel lighter.</strong>
            <div className="move-panels"><i /><i /><i /></div>
          </div>
        )}
      </div>
      <span className="visual-decoration" />
      <span className="visual-number">{projects.find((project) => project.visual === type)?.number}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-container">
        <div className="projects-heading">
          <motion.div
            className="section-intro"
            variants={staggerReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span className="section-eyebrow" variants={revealItem}><span /> SELECTED PROJECTS</motion.span>
            <motion.h2 variants={revealItem}>Ideas made<br /><span>into experiences.</span></motion.h2>
          </motion.div>
          <motion.p
            variants={revealItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >From polished frontend experiences to full-stack MERN applications, each project brings practical ideas to life.</motion.p>
        </div>
        <motion.div
          className="project-grid"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.number}
              variants={revealItem}
              whileHover={{ y: -4 }}
            >
              <ProjectVisual type={project.visual} previewVideo={project.previewVideo} />
              <div className="project-card-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
                <h3>{project.title}<ArrowUpRight size={19} aria-hidden="true" /></h3>
                <p>{project.description}</p>
                {project.previewNote && (
                  <p className="project-preview-note">{project.previewNote}</p>
                )}
                <ul className="project-tech-stack" aria-label={`${project.title} technology stack`}>
                  {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {(project.repository || project.liveDemo) ? (
                  <div className="project-links">
                    {project.repository && (
                      <a href={project.repository} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={15} aria-hidden="true" /> Source code <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live project <MoveUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="project-links project-links-unavailable">
                    <p>Repository and live demo links to be added.</p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
