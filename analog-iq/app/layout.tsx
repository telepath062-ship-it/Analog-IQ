import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Analog IQ - Voice-Powered Circuit Design',
  description: 'Revolutionary AI-powered platform for designing circuits with voice commands and natural language processing.',
  keywords: 'circuit design, EDA, voice control, AI, electronics, schematic, PCB',
  authors: [{ name: 'Analog IQ' }],
  openGraph: {
    title: 'Analog IQ - Voice-Powered Circuit Design',
    description: 'Design circuits with your voice using AI-powered tools',
    type: 'website',
    url: 'https://analogiq.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
