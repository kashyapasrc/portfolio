import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/portfolio';

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and the roles I've held.
          </p>
        </div>

        <div className="timeline" ref={ref}>
          {experience.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: i * 0.15 }}
            >
              <div className="timeline-dot" />
              <span className="timeline-date">{item.period}</span>
              <h3 className="timeline-title">{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul className="timeline-bullets">
                {item.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
