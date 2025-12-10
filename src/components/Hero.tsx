'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative -mt-20">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-6"
        >
            {/* Profile Picture */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="flex justify-center mb-8"
            >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-lg shadow-teal-500/20">
                    <Image
                        src="/portfolio-page-pfp.jpeg"
                        alt="Shaheer Abbasi"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
            </motion.div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                    Shaheer Abbasi
                </span>
            </h1>
            <p className="text-slate-300 text-xl sm:text-2xl">Aspiring Full-Stack Developer</p>
        </motion.div>

        <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 text-slate-400 hover:text-teal-400 transition-colors"
        >
            <FiChevronDown className="w-8 h-8 animate-bounce" />
        </motion.a>
    </section>
    )
}