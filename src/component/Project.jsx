"use client"

import { useState } from "react"
import "../Style/Project.css"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Indian Essence",
      category: "Frontend",
      image: "/IndianEssence.png",
      technologies: ["React", "CSS", "Firebase"],
      description:
        "Idea's that showcase India's rich cultural Heritage and Tradition.",
      demoLink: "https://indian-culture-i7nq.vercel.app",
      codeLink: "https://github.com/prasadmahind123/IndianCulture.git",
    },
    {
      id: 2,
      title: "To-Do List",
      category: "frontend",
      image: "/ToDo.png",
      technologies: ["React", "CSS"],
      description: "Simple to-do list application to manage tasks with local storage.",
      demoLink: "https://to-do-app-eight-olive.vercel.app",
      codeLink: "https://github.com/prasadmahind123/ToDo-App.git",
    },
    {
      id: 3,
      title: "Password Generator",
      category: "frontend",
      image: "/Password.png",
      technologies: [ "CSS", "JavaScript"],
      description: "Random password generator with customizable options for length and character types.",
      demoLink: "https://password-generator-ashen-iota.vercel.app",
      codeLink: "https://github.com/prasadmahind123/Password-Generator.git",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      image: "/PortFolio.png",
      technologies: ["React", "CSS", "JavaScript"],
      description: "Personal portfolio website showcasing projects and skills with responsive design.",
      demoLink: "#",
      codeLink: "#",
    },

  ]

  const filterProjects = () => {
    if (filter === "all") {
      return projects
    }
    return projects.filter((project) => project.category === filter)
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>

      <div className="project-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={filter === "frontend" ? "active" : ""} onClick={() => setFilter("frontend")}>
          Frontend
        </button>
        <button className={filter === "backend" ? "active" : ""} onClick={() => setFilter("backend")}>
          Backend
        </button>
        <button className={filter === "fullstack" ? "active" : ""} onClick={() => setFilter("fullstack")}>
          Full Stack
        </button>
      </div>

      <div className="projects-grid">
        {filterProjects().map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-links">
                <a href={project.demoLink} className="btn-small" target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
                <a href={project.codeLink} className="btn-small" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
