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
    hero_subtitle: 'Men akylly botlar we wezipeleri awtomatlaşdyrýan, owadan web çözümlerini döredýän.',
    about_paragraph: 'Men Aiogram ulanyp Telegram botlaryny gurmakda we zamana laýyk web sahypalary döretmekde ýöriteleşýärin. Häzirki wagtda 10+ talyba okuw berip we täze taslamalar üstünde işleýärin.',
    projects_intro: 'Iň soňky taslamalarym — Telegram botlary, web programmalary we doly stack çözgütleri görkezýär.',
    cat_all: 'Hemmesi',
    cat_web_development: 'Web Ösdürme',
    cat_web_application: 'Web Programmalar',
    cat_educational_tool: 'Öwrediş Gurallary',
    cat_language_tool: 'Dil Gurallary',
    cat_telegram_bot: 'Telegram Bot',
    live_demo: 'Onlaýn Demo',
    github: 'GitHub',
    page_title: 'Baydjayev Mulkomon — Backend Programmist & Telegram Bot',
    page_description: 'Men Aiogram botlaryny we häzirki zaman web çözgütlerini döredýän. Portfolio we taslamalarym bilen tanyşyň.',
    contact_paragraph: 'Telegramda habarlaşyň ýa-da email iberiň — adatça 48 sagadyň içinde jogap berýärin.',
    contact_connect_heading: 'Goşulalyň',
    contact_connect_text: 'Hyzmatlar we taslamalar barada gürleşmäge hemişe açyk. Telegram boty ýa-da web çözgüdi isleseňiz habarlaşyň.',
    placeholder_name: 'Adyňyz',
    placeholder_email: 'Emailiňiz',
    placeholder_message: 'Taslamaňyz barada gysgaça aýdyp geçiň ýa-da salama ýazyň',
    back_to_top: 'Başyna gaýdyp',
    built_with: 'Built with ❤️ using React & Tailwind',
    view_source: 'View source code',
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
    hero_subtitle: "Men aqlli botlar va vazifalarni avtomatlashtiruvchi, chiroyli ko'rinadigan veb yechimlar yarataman.",
    about_paragraph: "Men Aiogram yordamida Telegram botlarini yaratishga va zamonaviy veb-saytlar ishlab chiqishga ixtisoslashganman. Hozirda 10+ talabaga dars beraman va yangi loyihalar ustida ishlayapman.",
    projects_intro: "So'nggi loyihalarim Telegram botlari, veb-ilovalar va to'liq stack yechimlarini namoyish etadi.",
    cat_all: 'Barchasi',
    cat_web_development: 'Veb Dasturlash',
    cat_web_application: 'Veb Ilovalar',
    cat_educational_tool: "Ta'lim Vositalari",
    cat_language_tool: 'Til Vositalari',
    cat_telegram_bot: 'Telegram Bot',
    live_demo: 'Jonli Demo',
    github: 'GitHub',
    page_title: "Baydjayev Mulkomon — Backend Dasturchi & Telegram Bot",
    page_description: "Men Aiogram botlarini va zamonaviy veb yechimlarni yarataman. Portfolio va loyihalarim bilan tanishing.",
    contact_paragraph: "Telegramda murojaat qiling yoki elektron pochta yuboring — odatda 48 soat ichida javob beraman.",
    contact_connect_heading: 'Bog‘lanamiz',
    contact_connect_text: "Xizmatlar va loyihalar haqida suhbatlashishga doim tayyorman. Telegram bot yoki veb yechim kerak bo‘lsa, yozing.",
    placeholder_name: 'Ismingiz',
    placeholder_email: 'Emailingiz',
    placeholder_message: 'Loyihangiz haqida qisqacha yozing yoki salom ayting',
    back_to_top: 'Yuqoriga qaytish',
    built_with: 'Built with ❤️ using React & Tailwind',
    view_source: 'View source code',
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
    hero_subtitle: 'Akıllı botlar ve görevleri otomatikleştiren, şık görünen web çözümleri geliştiriyorum.',
    about_paragraph: 'Aiogram kullanarak Telegram botları oluşturma ve modern web siteleri geliştirme konusunda uzmanım. Şu anda 10+ öğrenciye ders veriyorum ve yeni projeler geliştiriyorum.',
    projects_intro: 'Son projelerim Telegram botları, web uygulamaları ve full-stack çözümlerini gösteriyor.',
    cat_all: 'Tümü',
    cat_web_development: 'Web Geliştirme',
    cat_web_application: 'Web Uygulamaları',
    cat_educational_tool: 'Eğitim Araçları',
    cat_language_tool: 'Dil Aracı',
    cat_telegram_bot: 'Telegram Bot',
    live_demo: 'Canlı Demo',
    github: 'GitHub',
    page_title: 'Baydjayev Mulkomon — Backend Geliştirici & Telegram Bot',
    page_description: 'Aiogram botları ve modern web çözümleri geliştiriyorum. Portföy ve projelerime göz atın.',
    contact_paragraph: 'Telegram üzerinden ulaşın veya e-posta gönderin — genellikle 48 saat içinde cevap veriyorum.',
    contact_connect_heading: 'Bağlanalım',
    contact_connect_text: 'Hizmetler ve projeler hakkında konuşmaya her zaman açığım. Telegram botu veya web çözümü istiyorsanız bana ulaşın.',
    placeholder_name: 'Adınız',
    placeholder_email: 'E-postanız',
    placeholder_message: 'Projeniz hakkında kısa bir şey yazın veya merhaba deyin',
    back_to_top: 'Başa Dön',
    built_with: 'Built with ❤️ using React & Tailwind',
    view_source: 'View source code',
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
    hero_subtitle: 'Я создаю умных ботов и веб-решения, которые автоматизируют задачи и выглядят отлично.',
    about_paragraph: 'Я специализируюсь на создании Telegram-ботов с использованием Aiogram и разработке современных веб-сайтов. В настоящее время обучаю более 10 студентов и работаю над новыми проектами.',
    projects_intro: 'Некоторые из моих последних проектов: Telegram-боты, веб-приложения и полнофункциональные решения.',
    cat_all: 'Все',
    cat_web_development: 'Веб-разработка',
    cat_web_application: 'Веб-приложения',
    cat_educational_tool: 'Образовательные инструменты',
    cat_language_tool: 'Языковые инструменты',
    cat_telegram_bot: 'Telegram-бот',
    live_demo: 'Демо',
    github: 'GitHub',
    page_title: 'Baydjayev Mulkomon — Backend разработчик & Telegram-боты',
    page_description: 'Я создаю Telegram-ботов на Aiogram и современные веб-решения. Ознакомьтесь с портфолио и проектами.',
    contact_paragraph: 'Свяжитесь через Telegram или отправьте письмо — обычно отвечаю в течение 48 часов.',
    contact_connect_heading: 'Давайте свяжемся',
    contact_connect_text: 'Я всегда открыт для обсуждения услуг и проектов. Если вам нужен Telegram-бот или веб-решение, напишите мне.',
    placeholder_name: 'Ваше имя',
    placeholder_email: 'Ваш Email',
    placeholder_message: 'Коротко расскажите о вашем проекте или просто поздоровайтесь',
    back_to_top: 'Наверх',
    built_with: 'Built with ❤️ using React & Tailwind',
    view_source: 'View source code',
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
    hero_subtitle: 'I build smart bots and web solutions that automate tasks and look great.',
    about_paragraph: 'I specialize in building Telegram bots using Aiogram and creating modern websites. Currently teaching 10+ students while developing new projects.',
    projects_intro: 'Here are some of my recent projects that showcase Telegram bots, web applications, and full-stack solutions.',
    cat_all: 'All',
    cat_web_development: 'Web Development',
    cat_web_application: 'Web Application',
    cat_educational_tool: 'Educational Tool',
    cat_language_tool: 'Language Tool',
    cat_telegram_bot: 'Telegram Bot',
    live_demo: 'Live Demo',
    github: 'GitHub',
    page_title: 'Baydjayev Mulkomon — Backend Developer & Telegram Bot',
    page_description: 'I build Aiogram bots and modern web solutions. Browse my portfolio and projects.',
    contact_paragraph: 'Reach out on Telegram or send an email — I usually reply within 48 hours.',
    contact_connect_heading: "Let's Connect",
    contact_connect_text: "I'm always interested in new opportunities and exciting projects. Whether you need a Telegram bot, a web application, or just want to chat about technology, feel free to reach out!",
    placeholder_name: 'Your name',
    placeholder_email: 'your.email@example.com',
    placeholder_message: 'Tell me about your project or just say hello!',
    back_to_top: 'Back to Top',
    built_with: 'Built with ❤️ using React & Tailwind',
    view_source: 'View source code',
  },
}

type I18nContextValue = {
  lang: Language
  t: (key: string) => string
  setLang: (l: Language) => void
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null
    if (saved && ['tk', 'uz', 'tr', 'ru', 'en'].includes(saved)) {
      setLangState(saved)
    } else {
      setLangState('en')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    // Update document title and meta description if present
    const title = translations[lang].page_title
    const desc = translations[lang].page_description
    if (title) document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta && desc) meta.setAttribute('content', desc)
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


