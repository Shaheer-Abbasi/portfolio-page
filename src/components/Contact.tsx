'use client'

import { useState } from 'react'
import { FiGithub, FiLinkedin, FiFile, FiMapPin } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import ResumeModal from './ResumeModal'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [isResumeOpen, setIsResumeOpen] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('https://formspree.io/f/mzznjdjj', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    return (
        <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto w-full text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">Let's Connect</motion.h2>
        
        <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 mb-2"
        >
            Have a project in mind? Let's create something amazing together.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-slate-400 mb-8"
        >
            <FiMapPin className="w-4 h-4" />
            <span>Katy, TX</span>
        </motion.div>

        <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 mb-8"
        >
            <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-2 text-left">Name</label>
                <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/40 border border-slate-700/50 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-2 text-left">Email</label>
                <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/40 border border-slate-700/50 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm text-slate-300 mb-2 text-left">Message</label>
                <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/40 border border-slate-700/50 focus:border-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors resize-none"
                />
            </div>
            {submitStatus === 'success' && (
                <p className="text-teal-400 text-sm text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
            )}
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </motion.form>

        <motion.button
            onClick={() => setIsResumeOpen(true)}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors mb-6"
        >
            <FiFile className="w-4 h-4" />
            <span>View Resume</span>
        </motion.button>

        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
        >
            <a href="https://github.com/Shaheer-Abbasi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-teal-400 transition-colors">
                <FiGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/shaheer06/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-teal-400 transition-colors">
                <FiLinkedin className="w-6 h-6" />
            </a>
        </motion.div>
        </div>

        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    )
}