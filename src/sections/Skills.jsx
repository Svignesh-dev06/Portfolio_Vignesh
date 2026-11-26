import { skills } from '../data/skills.js'

function Skills() {
  const groups = [
    { title: 'Frontend Skills', categories: ['Frontend'] },
    { title: 'Backend & Database Skills', categories: ['Backend', 'Database'] },
  ]

  return (
    <section className="section skills-section" id="skills">
      <div className="page-container">
        <div className="section-intro">
          <span className="section-eyebrow"><span /> THE TOOLKIT</span>
          <h2>Technology I use to<br /><span>bring ideas to life.</span></h2>
          <p>A focused set of tools for building modern web experiences across the stack.</p>
        </div>
        <div className="skill-groups">
          {groups.map(({ title, categories }) => (
            <div className="skill-group" key={title}>
              <h3 className="skill-group-title">{title}</h3>
              <div className="skill-items">
                {skills.filter((skill) => categories.includes(skill.category)).map(({ name, Icon, className }) => (
                  <article className={`skill-item ${className}`} key={name}>
                    <Icon className="skill-logo" size={32} aria-hidden="true" />
                    <span>{name}</span>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
