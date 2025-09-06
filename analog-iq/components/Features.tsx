'use client'

import { Mic, Brain, Zap, Settings, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Voice-First Design',
    description: 'Speak your circuits into existence. "Create a low-noise audio preamp" generates complete schematics instantly.',
    color: 'text-circuit-blue',
    bgColor: 'bg-circuit-blue/20'
  },
  {
    icon: Brain,
    title: 'AI Circuit Generation',
    description: 'Advanced AI analyzes your requirements and generates optimized circuits with real component values.',
    color: 'text-circuit-green',
    bgColor: 'bg-circuit-green/20'
  },
  {
    icon: Zap,
    title: 'Real-Time Simulation',
    description: 'Instant SPICE analysis with voice queries. "What\'s the bandwidth?" gets immediate responses.',
    color: 'text-circuit-purple',
    bgColor: 'bg-circuit-purple/20'
  },
  {
    icon: Settings,
    title: 'Smart Optimization',
    description: 'AI automatically optimizes for cost, performance, or board area based on your priorities.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time voice collaboration with team members across different locations.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption protects your designs with role-based access controls.',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/20'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge AI, controlled by voice, designed for the future of electronics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-gray-600/50 transition-all group"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
