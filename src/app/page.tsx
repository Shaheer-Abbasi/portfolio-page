'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import BackToTop from '../components/BackToTop'


export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <BackToTop />
    </div>
  )
}