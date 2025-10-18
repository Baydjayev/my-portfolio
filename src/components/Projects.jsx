import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.tsx'

const Projects = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: 'Contact Bot',
      description: 'Telegram Registration Bot - A comprehensive bot for user registration and contact management with database integration.',
      image: '/assets/contact-bot.jpg',
      github: 'https://github.com/Baydjayev/Contact-Bot',
      demo: '',
      category: 'Telegram Bot',
      technologies: ['Python', 'Aiogram', 'SQLite', 'Telegram API']
    },
    {
      id: 2,
      title: 'UZ Latin-Cyrillic Converter',
      description: 'A web tool for converting between Uzbek Latin and Cyrillic scripts with real-time text transformation.',
      image: '/assets/uz-converter.jpg',
      github: 'https://github.com/Baydjayev/uz-latin-cyrillic',
      demo: 'https://baydjayev.github.io/uz-latin-cyrillic/',
      category: 'Language Tool',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web API']
    },
    {
      id: 3,
      title: 'QR Code Generator',
      description: 'A creative calculator website with QR code generation functionality and modern web design.',
      image: '/assets/qr-generator.jpg',
      github: 'https://github.com/Baydjayev/qr-code-generator',
      demo: 'https://baydjayev.github.io/qr-code-generator/',
      category: 'Web Application',
      technologies: ['HTML', 'CSS', 'JavaScript', 'QR API']
    },
    {
      id: 4,
      title: 'Channel Manager Bot',
      description: 'Telegram bot for managing channels with automated posting, user management, and content scheduling.',
      image: '/assets/channel-manager.jpg',
      github: 'https://github.com/Baydjayev/Channel-Manager',
      demo: '',
      category: 'Telegram Bot',
      technologies: ['Python', 'Aiogram', 'Telegram API', 'Database']
    },
    {
      id: 5,
      title: 'Quiz App',
      description: 'Mini quiz application for programming languages with interactive questions and scoring system.',
      image: '/assets/quiz-app.jpg',
      github: 'https://github.com/Baydjayev/programming-quiz',
      demo: 'https://baydjayev.github.io/programming-quiz/',
      category: 'Educational Tool',
      technologies: ['JavaScript', 'GUI', 'Quiz Logic', 'User Interface']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills with modern design and responsive layout.',
      image: '/assets/portfolio-website.jpg',
      github: 'https://github.com/Baydjayev/Baydjayev.github.io',
      demo: 'https://baydjayev.github.io/',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages']
    }
  ]

  const categories = useMemo(() => [
    'All',
    'Web Development',
    'Web Application',
    'Educational Tool',
    'Language Tool',
    'Telegram Bot'
  ], [])
  const [activeCat, setActiveCat] = useState('All')
  const filtered = activeCat === 'All' ? projects : projects.filter(p => p.category === activeCat)

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-sky-blue/5 to-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black dark:text-white mb-6">
            {t('projects_heading')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('projects_intro')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              // map category keys to translation keys when available
              const keyMap = {
                'All': 'cat_all',
                'Web Development': 'cat_web_development',
                'Web Application': 'cat_web_application',
                'Educational Tool': 'cat_educational_tool',
                'Language Tool': 'cat_language_tool',
                'Telegram Bot': 'cat_telegram_bot',
              }
              const label = t(keyMap[cat] ?? cat)
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all ${activeCat === cat ? 'bg-warm-orange text-white border-warm-orange' : 'border-warm-orange/40 text-deep-black dark:text-white hover:bg-warm-orange/10'}`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl shadow-lg overflow-hidden border border-warm-orange/10"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                  <span className="text-white/80 text-xs">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-warm-orange/10 text-warm-orange text-sm rounded-full border border-warm-orange/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-secondary w-full justify-center"
                    >
                      {t('live_demo')}
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t('github')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

