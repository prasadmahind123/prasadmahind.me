import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"
import "../Style/Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }



  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#hero" className="logo">
          Prasad Mahind
        </a>

        <div className="nav-controls">
         

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a onClick={() => navigate("/")} >
                Home
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/about")}>
                About
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/skills")}>
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/projects")}>
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/contact")}>
                Contact
              </a>
            </li>
            
          </ul>
  
        </nav>
      </div>
    </header>
  )
}

export default Navbar
