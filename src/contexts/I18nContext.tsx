import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

export type Language = 'tk' | 'uz' | 'tr' | 'ru' | 'en'

type Dictionary = Record<string, string>
type Translations = Record<Language, Dictionary>

const STORAGE_KEY = 'bm_lang'

const translations: Translations = {
  tk: {
    nav_about: 'Barada',
    nav_projects: 'Taslamalar',
    nav_contact: 'Habarlaşmak',
    hero_greeting: 'Salam, men',
    hero_title: 'Backend Programmist we Telegram Bot hünärmeni',
    cta_view_projects: 'Taslamalary Gör',
    cta_contact_me: 'Meni Bilen Habarlaş',
    stats_experience: 'ýyl tejribe',
    stats_projects: 'taslama tamamlandy',
    stats_students: 'talyp öwretdim',
    stats_institutions: 'bilim edaralary',
    about_heading: 'Meniň Hakymda',
    education_heading: 'Bilim',
    skills_heading: 'Başarnyklar',
    projects_heading: 'Taslamalar',
    contact_heading: 'Habarlaşmak',
    download_cv: 'CV Göçürip Al',
    send_message: 'Habar Ugrat',
  },
  uz: {
    nav_about: 'Haqida',
    nav_projects: 'Loyihalar',
    nav_contact: 'Bog‘lanish',
    hero_greeting: 'Salom, men',
    hero_title: 'Backend Dasturchi va Telegram Bot Mutaxassisi',
    cta_view_projects: 'Loyihalarni ko‘rish',
    cta_contact_me: 'Men bilan bog‘lanish',
    stats_experience: 'yil tajriba',
    stats_projects: 'ta loyiha',
    stats_students: 'ta talaba o‘qitgan',
    stats_institutions: 'ta ta’lim muassasasi',
    about_heading: 'Men haqimda',
    education_heading: 'Ta’lim',
    skills_heading: 'Ko‘nikmalar',
    projects_heading: 'Loyihalar',
    contact_heading: 'Bog‘lanish',
    download_cv: 'CV yuklab olish',
    send_message: 'Xabar yuborish',
  },
  tr: {
    nav_about: 'Hakkımda',
    nav_projects: 'Projeler',
    nav_contact: 'İletişim',
    hero_greeting: 'Merhaba, ben',
    hero_title: 'Backend Geliştirici ve Telegram Bot Uzmanı',
    cta_view_projects: 'Projeleri Gör',
    cta_contact_me: 'Benimle İletişime Geç',
    stats_experience: 'yıl deneyim',
    stats_projects: 'proje tamamlandı',
    stats_students: 'öğrenci eğitildi',
    stats_institutions: 'eğitim kurumu',
    about_heading: 'Hakkımda',
    education_heading: 'Eğitim',
    skills_heading: 'Yetenekler',
    projects_heading: 'Projeler',
    contact_heading: 'İletişim',
    download_cv: 'CV İndir',
    send_message: 'Mesaj Gönder',
  },
  ru: {
    nav_about: 'Обо мне',
    nav_projects: 'Проекты',
    nav_contact: 'Контакты',
    hero_greeting: 'Привет, я',
    hero_title: 'Backend разработчик и специалист по Telegram-ботам',
    cta_view_projects: 'Смотреть проекты',
    cta_contact_me: 'Связаться со мной',
    stats_experience: 'год опыта',
    stats_projects: 'проектов завершено',
    stats_students: 'студентов обучено',
    stats_institutions: 'учебных учреждения',
    about_heading: 'Обо мне',
    education_heading: 'Образование',
    skills_heading: 'Навыки',
    projects_heading: 'Проекты',
    contact_heading: 'Контакты',
    download_cv: 'Скачать CV',
    send_message: 'Отправить сообщение',
  },
  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_greeting: "Hi, I'm",
    hero_title: 'Backend Developer & Telegram Bot Specialist',
    cta_view_projects: 'View Projects',
    cta_contact_me: 'Contact Me',
    stats_experience: 'years experience',
    stats_projects: 'projects completed',
    stats_students: 'students taught',
    stats_institutions: 'educational institutions',
    about_heading: 'About Me',
    education_heading: 'Education',
    skills_heading: 'Skills',
    projects_heading: 'Projects',
    contact_heading: 'Get in Touch',
    download_cv: 'Download CV',
    send_message: 'Send Message',
  },
}

type I18nContextValue = {
  lang: Language
  t: (key: string) => string
  setLang: (l: Language) => void
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('tk')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved && ['tk', 'uz', 'tr', 'ru', 'en'].includes(saved)) {
      setLangState(saved)
    } else {
      setLangState('tk')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    t: (key: string) => translations[lang][key] ?? key,
    setLang: (l: Language) => setLangState(l),
  }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


