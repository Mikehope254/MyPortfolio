import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    id: 1,
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2025",
    description:
      "Built responsive websites and web applications. Worked with clients to implement features and fix bugs.",
  },
];

const education = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    institution: "Machakos University",
    period: "2021-2025",
  },
  {
    id: 2,
    degree: "MERN-Stack Development",
    institution: "Freecodecamp",
    period: "2025",
  },
  {
    id: 3,
    degree: "Cyfrin Updraft Web3 Development",
    institution: "Cyfrin Updraft",
    period: "2025",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          <h3 className="timeline-title">
            <FaBriefcase /> Work Experience
          </h3>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <h4>{exp.role}</h4>
                <h5>
                  {exp.company} • {exp.period}
                </h5>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="timeline">
          <h3 className="timeline-title">
            <FaGraduationCap /> Education & Certifications
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <h4>{edu.degree}</h4>
                <h5>
                  {edu.institution} • {edu.period}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
