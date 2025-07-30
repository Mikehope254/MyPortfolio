import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiDocker } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, level: 70 },
  { name: "TypeScript", icon: <SiTypescript />, level: 5 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { name: "AWS", icon: <FaAws />, level: 70 },
  { name: "MongoDB", icon: <FaDatabase />, level: 60 },
  { name: "Docker", icon: <SiDocker />, level: 20 },
  ,
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p>
              I'm a passionate software engineer with 5 years of experience
              building web applications. My expertise lies in JavaScript, React,
              Node.js, and cloud technologies.
            </p>
            <p>
              I enjoy solving complex problems and creating efficient, scalable
              solutions. When I'm not coding, you can find me contributing to
              open-source projects or learning new technologies.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="skill-item"
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-wrapper">
              <img
                src="src/assets/gitProfile.png"
                alt="Mike's Profile Pic"
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
