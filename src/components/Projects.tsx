'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const projects = [
    { id: 1, title: 'VelvetCode', desc: 'Real-time collaborative code editor with AI-powered features, supporting concurrent users with low latency synchronization and in-browser execution for multiple programming languages', img: '/velvetcode-chatroom.png', github: 'https://github.com/Shaheer-Abbasi/VelvetCode' },
    { id: 2, title: 'QuizifAI', desc: 'AI-powered learning platform that automatically generates practice quizzes from study materials using OCR and Gemini, with secure authentication and SQLite database storage', img: '/qai-home.png', github: 'https://github.com/Shaheer-Abbasi/QuizifAI' },
    { id: 3, title: 'SenLab Protein Analyzer', desc: 'Comprehensive PyQt5 GUI application for protein sequence analysis, featuring BLASTP searches, MMseqs2 clustering, and full cross-platform support for local and remote databases', img: '/slp-blastp.png', github: 'https://github.com/Shaheer-Abbasi/Protein_GUI' },
    { id: 4, title: 'Palworld Breeding Calculator', desc: 'Co-developed an interactive web application helping players determine breeding outcomes in PalWorld, built with React for a responsive and user friendly design', img: '/pbc-front_page.png', github: 'https://github.com/PaulKuruvila/palworld-breeding-calculator' }
]

export default function Projects() {
const [expandedProject, setExpandedProject] = useState<number | null>(null)

return (
    <section id="projects" className="py-20">
        <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
        >
        Featured Projects
        </motion.h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        {projects.map((p, i) => (
        <motion.div
        key={p.id}
        className="card p-6 flex flex-col group hover:scale-[1.02] transition-transform"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        >
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            {/* Image component will optimize images on build — replace public/*.png with your screenshots */}
            <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" className="group-hover:scale-105 transition-transform duration-300" />
            </div>
                <h3 className="font-semibold text-2xl mb-3">{p.title}</h3>
                <div className="mb-6 flex-1">
                  <p className={`text-slate-300 text-base ${
                    expandedProject === p.id ? 'block' : 'md:block line-clamp-2'
                  }`}>
                    {p.desc}
                  </p>
                  <button
                    onClick={() => setExpandedProject(expandedProject === p.id ? null : p.id)}
                    className="md:hidden text-teal-400 text-sm mt-2 inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                  >
                    {expandedProject === p.id ? 'Show less' : 'Read more'}
                    <FiChevronDown className={`w-4 h-4 transition-transform ${
                      expandedProject === p.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
            <div className="flex gap-3">
                <a className="px-5 py-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 transition-colors text-sm font-medium inline-flex items-center gap-2" href={p.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubAlt} className="w-4 h-4" />
                    GitHub
                </a>
            </div>
            </motion.div>
            ))}
        </div>
        </section>
    )
}