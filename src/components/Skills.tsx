'use client'

import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'TailwindCSS',
  'Flask',
  'Database Management',
  'API Development',
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills & Technologies
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card p-6 text-center font-medium text-lg w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)]"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
