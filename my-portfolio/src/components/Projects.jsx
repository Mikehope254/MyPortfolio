import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "To-do List App",
    description: "A personal task management tool with real-time updates.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/Mikehope254/To-Do-List-2",
    demo: "#",
  },
  {
    id: 2,
    title: "Online Voting System",
    description:
      "Online Voting System built with MERN Stack and secured by Json Web Tokens",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/Mikehope254/mern-voting-app",
    demo: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Framer Motion.",
    tech: ["React", "Framer Motion", "Styled Components"],
    github: "https://github.com/Mikehope254/MyPortfolio/tree/main/my-portfolio",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
