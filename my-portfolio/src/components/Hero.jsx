import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Michael Hope</span>
          </h1>
          <h2 className="hero-subtitle">
            Full-Stack Developer, Smart Contract Developer
          </h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern technologies.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
