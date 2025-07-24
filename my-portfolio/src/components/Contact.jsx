import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setMessage({ text: "Message sent successfully!", type: "success" });
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setMessage({
            text: "Failed to send message. Please try again.",
            type: "error",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>

            <div className="contact-methods">
              <a href="mailto:your.email@example.com" className="contact-item">
                <HiOutlineMail /> your.email@example.com
              </a>

              <div className="social-links">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <FaPaperPlane />
            </button>
            {message.text && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
