import Navbar from "./component/Navbar"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import { useEffect } from "react"
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }   , [])
  return (
    <div>
      <Navbar />
      <Contact/>
      <Footer/>
    </div>
  )
}

