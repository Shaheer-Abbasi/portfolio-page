import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shaheer Abbasi — Portfolio',
  description: 'Shaheer Abbasi — Full Stack Developer & UI/UX Enthusiast',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="min-h-screen relative overflow-hidden">
          {/* animated gradient background element */}
          <div className="absolute inset-0 pointer-events-none gradient-anim mix-blend-screen opacity-60" />

          <main className="relative z-10">
            {children}
          </main>

    <footer className="relative z-10 mt-20 pb-8 text-center text-sm text-slate-400">
      <div className="container">
      © {new Date().getFullYear()} Shaheer Abbasi — Built with Next.js + Tailwind
      </div>
    </footer>
      </div>
      </body>
    </html>
  )
}