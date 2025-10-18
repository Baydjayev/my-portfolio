import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '../contexts/I18nContext.tsx'

const Hero = () => {
  const { t } = useI18n()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Typing effect for professional title
  const fullTitle = t('hero_title')
  const [typed, setTyped] = useState('')
  useEffect(() => {
    setTyped('')
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(fullTitle.slice(0, i))
      if (i >= fullTitle.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [fullTitle])

  // Animated counters
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' })
  const stats = useMemo(() => ([
    { value: 1, suffix: '+', label: t('stats_experience') },
    { value: 8, suffix: '+', label: t('stats_projects') },
    { value: 10, suffix: '+', label: t('stats_students') },
    { value: 2, suffix: '', label: t('stats_institutions') },
  ]), [t])
  const [counts, setCounts] = useState([0, 0, 0, 0])
  useEffect(() => {
    if (!statsInView) return
    const durations = [900, 900, 900, 900]
    const start = performance.now()
    const anim = () => {
      const now = performance.now()
      const progress = durations.map((d) => Math.min(1, (now - start) / d))
      setCounts(progress.map((p, idx) => Math.floor(p * stats[idx].value)))
      if (progress.some((p) => p < 1)) requestAnimationFrame(anim)
    }
    requestAnimationFrame(anim)
  }, [statsInView, stats])

  return (
    <section id="hero" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-sky-blue/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/20 rounded-full blur-xl"
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-black mb-6 leading-tight"
            >
              {t('hero_greeting')}{' '}
              <span className="text-warm-orange">Baydjayev Mulkomon</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium">
                {typed}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl"
            >
              {t('hero_subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                {t('cta_contact_me')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                {t('cta_view_projects')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-sky-blue via-white to-deep-black rounded-full p-1"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-sky-blue/20 to-deep-black/20 flex items-center justify-center"
              >
                {/* Profile Image */}
                <img
                  src="/assets/profile-image.jpg"
                  alt="Baydjayev Mulkomon - Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Stats */}
        <div ref={statsRef} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="backdrop-blur bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10 rounded-xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-warm-orange">
                {counts[i]}{counts[i] >= stats[i].value ? stats[i].suffix : ''}
              </div>
              <div className="text-sm mt-1 opacity-80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

