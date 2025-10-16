import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingOverlay = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-white/60 dark:bg-deep-navy/60"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-warm-orange to-warm-coral"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingOverlay


