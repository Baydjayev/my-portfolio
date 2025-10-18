import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '../contexts/I18nContext.tsx'

// Build a twemoji URL from an emoji like '🇹🇲' -> '1f1f9-1f1f2'
function emojiToCodepoints(emoji) {
  const codePoints = Array.from(emoji).map((ch) => ch.codePointAt(0).toString(16))
  return codePoints.join('-')
}

function twemojiUrl(emoji) {
  const cp = emojiToCodepoints(emoji)
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${cp}.png`
}

const languages = [
  { value: 'tk', label: "Türkmen", emoji: '🇹🇲' },
  { value: 'uz', label: "O'zbek", emoji: '🇺🇿' },
  { value: 'tr', label: 'Türkçe', emoji: '🇹🇷' },
  { value: 'ru', label: 'Русский', emoji: '🇷🇺' },
  { value: 'en', label: 'English', emoji: '🇬🇧' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const current = languages.find((l) => l.value === lang) || languages[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="flex items-center gap-2 border border-warm-orange/20 rounded-md px-3 py-1.5 text-sm bg-white/90 dark:bg-gray-900 text-deep-black dark:text-white shadow-sm hover:shadow-md transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-sky-blue/50"
      >
        <img src={twemojiUrl(current.emoji)} alt={current.label} className="w-5 h-5 rounded-sm object-cover ring-0 dark:ring-1 dark:ring-white/10" />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-900 text-deep-black dark:text-gray-100 rounded-lg shadow-2xl z-50 overflow-hidden border border-gray-200 dark:border-gray-800">
          {languages.map((l) => (
            <button
              key={l.value}
              onClick={() => {
                setLang(l.value)
                setOpen(false)
              }}
              className={`w-full text-left px-3 py-2 flex items-center gap-3 transition-colors duration-150 ${l.value === lang ? 'bg-sky-blue/20 dark:bg-sky-blue/700/30' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <img src={twemojiUrl(l.emoji)} alt={l.label} className="w-5 h-5 rounded-sm object-cover ring-0 dark:ring-1 dark:ring-white/10" />
              <span className="flex-1 text-sm">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
