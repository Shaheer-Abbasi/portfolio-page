'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Opportunity Knocks',
    location: 'Remote, USA',
    period: 'Aug 2025 – Present',
    description: 'Developing full-stack features for a growing platform, focusing on improving user experience and building scalable systems. Working with modern web technologies to create responsive interfaces and implementing real-time communication features. Collaborating with the team through Agile workflows to deliver high-quality solutions.'
  },
  {
    id: 2,
    title: 'Undergraduate Research Assistant',
    company: 'Sen Laboratory',
    location: 'Houston, TX',
    period: 'Sept 2025 – Present',
    description: 'Building bioinformatics software to support protein research and analysis workflows. Creating user-friendly desktop applications that make complex scientific processes more accessible. Optimizing computational performance to handle large-scale biological datasets efficiently.'
  },
  {
    id: 3,
    title: 'Computer Science and Mathematics Tutor',
    company: 'Varsity Tutors',
    location: 'Remote, USA',
    period: 'Sept 2024 – July 2025',
    description: 'Taught computer science and mathematics concepts to high school students through personalized one-on-one sessions. Developed custom learning strategies tailored to each student\'s needs and learning style. Helped students build confidence and achieve measurable improvements in their academic performance.'
  }
]

export default function Experience() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto w-full relative">
        {/* Timeline line - hidden on mobile, visible on larger screens */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 via-teal-400/30 to-transparent md:-translate-x-px" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-teal-400 border-4 border-[#071015] md:-translate-x-2 z-10" />

              {/* Content card */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card p-6 space-y-3 hover:scale-[1.02] transition-transform">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-teal-300 font-medium">{exp.company}</span>
                    <div className="flex flex-wrap gap-2 text-slate-400">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div>
                    <p className={`text-slate-300 leading-relaxed text-sm md:text-base ${
                      expandedExp === exp.id ? 'block' : 'md:block line-clamp-3'
                    }`}>
                      {exp.description}
                    </p>
                    <button
                      onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                      className="md:hidden text-teal-400 text-sm mt-2 inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                    >
                      {expandedExp === exp.id ? 'Show less' : 'Read more'}
                      <FiChevronDown className={`w-4 h-4 transition-transform ${
                        expandedExp === exp.id ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
