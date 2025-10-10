import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-white text-deep-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

