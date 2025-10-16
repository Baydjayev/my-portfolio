import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext.tsx'
import { useI18n } from '../contexts/I18nContext.tsx'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t, lang, setLang } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: t('nav_about'), id: 'about' },
    { name: t('nav_projects'), id: 'projects' },
    { name: t('nav_contact'), id: 'contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-deep-black hover:text-sky-blue transition-colors"
          >
            Baydjayev
          </motion.button>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-deep-black hover:text-sky-blue transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              aria-label="Language selector"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border border-warm-orange/50 rounded-md px-2 py-1 text-sm bg-white/70 backdrop-blur dark:bg-deep-navy/70"
            >
              <option value="tk">🇹🇲 Türkmen</option>
              <option value="uz">🇺🇿 O'zbek</option>
              <option value="tr">🇹🇷 Türkçe</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="border border-warm-orange/50 rounded-md px-3 py-2 text-sm bg-white/70 backdrop-blur dark:bg-deep-navy/70"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm"
            >
              {t('nav_contact')}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

