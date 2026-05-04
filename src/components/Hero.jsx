import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero-greeting">{personalInfo.greeting}</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.tagline}</p>
          <div className="hero-buttons">
            <Link to="projects" smooth duration={500} offset={-70}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-70}>
              <button className="btn btn-outline">Get in Touch</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
