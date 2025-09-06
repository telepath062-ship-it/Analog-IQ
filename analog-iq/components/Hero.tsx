'use client'

import { Mic, Play, ArrowRight } from 'lucide-react'
import VoiceDemo from './VoiceDemo'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-circuit-blue/10 via-circuit-green/10 to-circuit-purple/10 opacity-50" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-circuit-purple/20 border border-circuit-purple/30 rounded-full mb-8">
          <Mic className="w-4 h-4 mr-2 text-circuit-purple" />
          <span className="text-circuit-purple font-medium">World's First Voice-Controlled EDA</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Design Circuits with{' '}
          <span className="text-gradient-circuit">
            Your Voice
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          The revolutionary AI-powered platform that lets you create, analyze, and optimize 
          electronic circuits using natural language commands and voice interaction.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-circuit hover:opacity-90 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 group">
            <Mic className="w-5 h-5" />
            Try Voice Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Voice Demo Component */}
        <VoiceDemo />
      </div>
    </section>
  )
}
