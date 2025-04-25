import "../Style/Hero.css"
import { useNavigate } from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate()
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          <span className="greeting">Hello, I&apos;m</span>
          <span className="name">Prasad Mahind</span>
          <span className="title">Full Stack Developer</span>
        </h1>
        <p className="description">I build responsive, user-friendly web applications with modern technologies.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Resume
          </a>
          <p onClick={() => navigate('/contact')} className="btn btn-secondary">
            Contact Me
          </p>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-img-container">
          <img src="/m3.png" alt="Developer" />
        </div>
      </div>
    </section>
  )
}

export default Hero
