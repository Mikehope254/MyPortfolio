import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates using Socket.io.",
    tech: ["React", "Express", "Socket.io", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Weather application with forecast data from OpenWeatherMap API.",
    tech: ["React", "Chart.js", "OpenWeatherMap API"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Framer Motion.",
    tech: ["React", "Framer Motion", "Styled Components"],
    github: "#",
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
