import "../Style/Footer.css"
import {useNavigate} from "react-router-dom"
const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#hero">
            Prasad Mahind
          </a>
          <p>Building the web, one line at a time.</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("/about")}>About</a>
              </li>
              <li>
                <a onClick={() => navigate("/skills")}>Skills</a>
              </li>
              <li>
                <a onClick={() => navigate("/projects")}>Projects</a>
              </li>
              <li>
                <a onClick={() => navigate("/contact")}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a target="_blank" href="https://github.com/prasadmahind123">GitHub</a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/prasad-mahind-185bb6290/">LinkedIn</a>
              </li>
              <li>
                <a target="_blank" href="https://x.com/PrasadMahi86690">X</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Prasad Mahind. All Rights Reserved.</p>
        <div className="footer-social">
          <a target="_blank" href="https://github.com/prasadmahind123" aria-label="GitHub">
              <img src="/github-brands.svg" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/prasad-mahind-185bb6290/" aria-label="LinkedIn">
            <img src="linkedin-in-brands.svg" alt="" width={20} />
          </a>
          <a target="_blank" href="https://x.com/PrasadMahi86690" aria-label="Twitter">
            <img src="x-twitter-brands.svg" alt="" width={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
