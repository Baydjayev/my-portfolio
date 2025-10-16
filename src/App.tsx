import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-warm-cream text-deep-black dark:bg-deep-navy dark:text-white transition-colors">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


