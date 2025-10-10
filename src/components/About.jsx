import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Aiogram', level: 85 },
    { name: 'SQLite', level: 80 },
    { name: 'React', level: 85 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'API Integration', level: 88 }
  ]

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      description: 'Building Telegram bots and web applications with Python and React'
    },
    {
      year: '2022 - 2023',
      title: 'Backend Developer',
      description: 'Specialized in Python backend development and API integrations'
    },
    {
      year: '2021 - 2022',
      title: 'Frontend Developer',
      description: 'Creating responsive web interfaces with React and modern CSS'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
            About <span className="text-sky-blue">Me</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in building Telegram bots using Python and Aiogram, 
            and creating modern web applications with React. I love automating tasks and creating 
            user-friendly interfaces that make complex systems simple to use.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-deep-black mb-8">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-r from-sky-blue/10 to-white p-4 rounded-lg border border-sky-blue/20"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-deep-black">{skill.name}</span>
                    <span className="text-sky-blue font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-sky-blue to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-deep-black mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-sky-blue/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-sky-blue rounded-full border-4 border-white shadow-lg" />
                  <div className="bg-gradient-to-r from-sky-blue/5 to-white p-6 rounded-lg border border-sky-blue/10">
                    <div className="text-sky-blue font-semibold text-sm mb-2">{exp.year}</div>
                    <h4 className="text-xl font-bold text-deep-black mb-2">{exp.title}</h4>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

