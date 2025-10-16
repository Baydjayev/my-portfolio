import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg bg-gradient-to-r from-warm-orange to-warm-coral text-white hover:scale-105 transition-transform"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop


