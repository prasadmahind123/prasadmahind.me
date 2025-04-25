
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Skills from "./component/Skills"
import { useEffect } from "react"
export default function SkillsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }   , [])
  return (
    <div>
      <Navbar/>
      <Skills />
      <Footer />
    </div>
  )
}
