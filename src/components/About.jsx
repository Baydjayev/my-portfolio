import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.tsx'

const About = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Aiogram', level: 85 },
    { name: 'SQLite', level: 80 },
    { name: 'React', level: 85 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'API Integration', level: 88 }
  ]

  const education = [
    { year: 'Sep 2025 - Present', title: t('edu_polytechnic'), description: 'Computer Science / Programming' },
  { year: 'Sep 2024 - Present', title: 'Al-Xorazmiy Vorislari (IT Park)', description: 'Backend Development & Telegram Bots' },
    { year: 'Sep 2016 - 2025', title: 'Secondary School', description: 'General secondary education' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-deep-navy">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black dark:text-white mb-6">
            {t('about_heading')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about_paragraph')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-deep-black dark:text-white mb-8">{t('skills_heading')} & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-r from-warm-orange/10 to-white/60 dark:to-white/5 p-4 rounded-lg border border-warm-orange/20"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-deep-black dark:text-white">{skill.name}</span>
                    <span className="text-warm-orange font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-warm-orange to-warm-coral h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-deep-black dark:text-white mb-8">{t('education_heading')}</h3>
            <div className="space-y-8">
              {education.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-warm-orange/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-warm-orange rounded-full border-4 border-white shadow-lg" />
                  <div className="bg-gradient-to-r from-warm-orange/5 to-white/60 dark:to-white/5 p-6 rounded-lg border border-warm-orange/10">
                    <div className="text-warm-orange font-semibold text-sm mb-2">{exp.year}</div>
                    <h4 className="text-xl font-bold text-deep-black dark:text-white mb-2">{exp.title}</h4>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

