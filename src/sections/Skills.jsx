import { skills } from '../data/skills.js'
import { motion } from 'framer-motion'
import { revealItem, staggerReveal, viewportOnce } from '../motion.js'

function Skills() {
  const groups = [
    { title: 'Frontend', categories: ['Frontend'], className: 'skill-group-wide' },
    { title: 'Backend', categories: ['Backend'] },
    { title: 'Database', categories: ['Database'] },
  ]

  return (
    <section className="section skills-section" id="skills">
      <div className="page-container">
        <motion.div
          className="section-intro"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span className="section-eyebrow" variants={revealItem}><span /> THE TOOLKIT</motion.span>
          <motion.h2 variants={revealItem}>Technology I use to<br /><span>bring ideas to life.</span></motion.h2>
          <motion.p variants={revealItem}>A focused set of tools for building modern web experiences across the stack.</motion.p>
        </motion.div>
        <motion.div
          className="skill-groups"
          variants={staggerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {groups.map(({ title, categories, className = '' }) => (
            <motion.div className={`skill-group ${className}`} key={title} variants={revealItem}>
              <h3 className="skill-group-title">{title}</h3>
              <motion.div
                className="skill-items"
                variants={staggerReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {skills.filter((skill) => categories.includes(skill.category)).map(({ name, Icon, className }) => (
                  <motion.article
                    className={`skill-item ${className}`}
                    key={name}
                    variants={revealItem}
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="skill-logo" size={32} aria-hidden="true" />
                    <span>{name}</span>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
