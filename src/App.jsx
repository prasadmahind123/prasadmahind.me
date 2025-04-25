
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectPage from './ProjectPage';


function App() {
 

  return (
    <>

     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectPage />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
