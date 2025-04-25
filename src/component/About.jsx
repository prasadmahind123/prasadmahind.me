import "../Style/About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/me2.jpg" alt="About me" />
        </div>
        <div className="about-text">
          <h3>Who am I?</h3>
          <p>
            Hi, I&apos;m Prasad Mariti Mahind, a passionate Computer Science Engineering student currently pursuing my B.Tech from D.Y. Patil Technical Campus, Kolhapur. I&apos;m a web developer who loves building clean, responsive, and user-friendly websites.
          </p>
          <p>
          Right now, I’m focused on improving my full-stack development skills and working on real-world projects that make a meaningful impact. I enjoy solving problems, collaborating with others, and bringing ideas to life through code.
          </p>
          <p>
            When I&apos;m not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
            I&apos;m always eager to learn new technologies and techniques to enhance my skills.
          </p>
          <div className="about-details">
            <div className="detail">
              <span className="label">Name:</span>
              <span>Prasad Mahind</span>
            </div>
            <div className="detail">
              <span className="label">Email:</span>
              <span>prasadmahind34@gmail.com</span>
            </div>
            <div className="detail">
              <span className="label">Location:</span>
              <span>Maharashtra , India</span>
            </div>
            <div className="detail">
              <span className="label">Availability:</span>
              <span>Freelance / Full-time</span>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
