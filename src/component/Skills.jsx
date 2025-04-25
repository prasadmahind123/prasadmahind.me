import "../Style/Skills.css"

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 70 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "SQL", level: 75 },
  ]



  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill" key={index}>
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
    ))
  }

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="skills-content">
        <div className="skills-text">
          <p>
            As a full-stack developer, I&apos;ve honed a versatile skill set that allows me to build complete web
            applications from front to back. My expertise spans across modern frontend frameworks, backend technologies,
            and development tools.
          </p>
        </div>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend</h3>
            {renderSkills(frontendSkills)}
          </div>
          <div className="skills-category">
            <h3>Backend</h3>
            {renderSkills(backendSkills)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
