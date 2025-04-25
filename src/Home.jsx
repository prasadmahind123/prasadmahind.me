import "./Style/App.css"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import About from "./component/About"
import Skills from "./component/Skills"
import Projects from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
export default function Home() {

  return (
    <div>
    <div className="app">
        <Navbar  />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        <Footer />
    </div>
    </div>
  )
}
