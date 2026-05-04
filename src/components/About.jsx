import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
          <p className="section-subtitle">
            A little background on who I am and what I do.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="about-grid"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="about-image-wrapper">
            {personalInfo.avatar ? (
              <img src={personalInfo.avatar} alt={personalInfo.name} />
            ) : (
              personalInfo.name.charAt(0)
            )}
          </div>

          <div className="about-text">
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
