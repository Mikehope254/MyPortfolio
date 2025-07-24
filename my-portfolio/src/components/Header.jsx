import React from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <motion.a
            href="#hero"
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &lt;DevName/&gt;
          </motion.a>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
