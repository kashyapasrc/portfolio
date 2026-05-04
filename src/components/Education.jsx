import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="accent">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and certifications.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {education.map((item, i) => (
            <motion.div
              key={i}
              className="education-card"
              variants={cardVariants}
            >
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-period">{item.period}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
