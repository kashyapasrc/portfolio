import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="accent">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span key={skill.name} className="skill-item">
                      <Icon />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
