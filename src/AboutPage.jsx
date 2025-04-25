import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import About from "./component/About"

import { useEffect } from "react"
export default function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }   , [])

  return (
    <div>
      <Navbar />
      <About/>
      <Footer/>
    </div>
  )
}
