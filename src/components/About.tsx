'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-300 leading-relaxed text-lg"
        >
          I'm Shaheer Abbasi, a Computer Science student at the University of Houston with a passion for building software that makes a real impact. 
          I love turning ideas into functional applications. Whether it's improving user experiences, automating tedious processes, or creating tools that help people work more efficiently. 
          My journey in tech has taken me from developing collaborative platforms to working on research applications, and each project has reinforced my belief that the best code is code that solves real problems for real people.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 leading-relaxed text-lg"
        >
          I'm driven by the challenge of learning new technologies and applying them to meaningful projects. 
          Whether it's full-stack development, AI integration, or system optimization, I'm always eager to dive into new opportunities and expand my skill set. 
          I'm looking for roles where I can contribute to projects that matter, collaborate with talented teams, and continue growing as a developer. 
          View my projects and work below!
        </motion.p>
      </div>
    </section>
  )
}
