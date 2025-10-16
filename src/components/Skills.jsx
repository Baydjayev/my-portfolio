import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.tsx'

const skillsData = [
  {
    group: 'Backend Development',
    items: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'Flask', level: 65 },
      { name: 'Aiogram', level: 90 },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 65 },
      { name: 'SQLite', level: 80 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'HTML5 & CSS3', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'React.js', level: 75 },
      { name: 'TailwindCSS', level: 85 },
    ],
  },
  {
    group: 'Tools & Tech',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Linux', level: 70 },
      { name: 'RESTful APIs', level: 75 },
      { name: 'Bot Development', level: 90 },
    ],
  },
]

const Skills = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-warm-cream to-white dark:from-deep-navy dark:to-deep-navy/80">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black dark:text-white mb-4">{t('skills_heading')}</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Core technical skills grouped by area, with animated proficiency bars.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group) => (
            <div key={group.group} className="backdrop-blur bg-white/60 dark:bg-white/5 border border-warm-orange/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-deep-black dark:text-white">{group.group}</h3>
              <div className="space-y-4">
                {group.items.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-warm-orange font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.05 }}
                        className="h-2 rounded-full bg-gradient-to-r from-warm-orange to-warm-coral"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


