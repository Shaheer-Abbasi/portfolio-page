'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-slate-900 rounded-xl shadow-2xl border border-slate-700/50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <h3 className="text-xl font-semibold">Resume</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-4">
              <iframe
                src="/Shaheer-Abbasi-Resume-SWE.pdf"
                className="w-full h-full rounded-lg border border-slate-700/50"
                title="Resume PDF"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-700/50 flex justify-center">
              <a
                href="/Shaheer-Abbasi-Resume-SWE.pdf"
                download
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all font-medium"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
