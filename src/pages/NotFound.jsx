import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-cream dark:bg-deep-navy px-4">
      <div className="text-center">
        <div className="text-7xl font-extrabold text-warm-orange">404</div>
        <h1 className="mt-4 text-2xl font-semibold text-deep-black dark:text-white">Page not found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto">The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="inline-block mt-6 btn-primary">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound


