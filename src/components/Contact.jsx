import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { personalInfo, FaGithub, FaLinkedin } from '../data/portfolio';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get in <span className="accent">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="contact-socials">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit" className="btn btn-primary">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
