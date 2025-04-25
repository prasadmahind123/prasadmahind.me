import Navbar from "./component/Navbar"
import Project from "./component/Project"
import Footer from "./component/Footer"
import { useEffect } from "react"
export default function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }   , [])
  return (
    <div>
        <Navbar />
        <Project />
        <Footer />
    </div>
  )
}
