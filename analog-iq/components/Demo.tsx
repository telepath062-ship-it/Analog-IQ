'use client'

import { useState } from 'react'

export default function Demo() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: 'Voice Command',
      description: '"Create a 741 op-amp inverting amplifier with 20dB gain"',
      color: 'text-circuit-blue',
      bgColor: 'bg-circuit-blue'
    },
    {
      id: 2,
      title: 'AI Generation',
      description: 'Complete schematic appears with calculated resistor values',
      color: 'text-circuit-green',
      bgColor: 'bg-circuit-green'
    },
    {
      id: 3,
      title: 'Instant Analysis',
      description: 'Real-time simulation confirms 20dB gain and frequency response',
      color: 'text-circuit-purple',
      bgColor: 'bg-circuit-purple'
    }
  ]

  return (
    <section id="demo" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See It In Action</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how voice commands transform into professional circuits in seconds
          </p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Design Flow Example</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-all cursor-pointer ${
                      activeStep === index ? 'bg-gray-700/50' : 'hover:bg-gray-700/30'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center text-sm font-bold text-white`}>
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${step.color} mb-1`}>{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interactive Circuit Preview */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-600/50">
              <div className="text-center text-gray-400 mb-4 text-sm">Interactive Circuit Canvas</div>
              <svg viewBox="0 0 400 300" className="w-full h-64 border border-gray-600/50 rounded-lg bg-gray-800/50">
                {/* Op-amp symbol */}
                <polygon points="120,100 120,200 220,150" fill="none" stroke="#10B981" strokeWidth="2" />
                
                {/* Input resistors */}
                <rect x="40" y="115" width="60" height="20" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                <text x="70" y="110" textAnchor="middle" className="fill-blue-400 text-xs">R1 100k</text>
                
                {/* Feedback resistor */}
                <rect x="160" y="60" width="60" height="20" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                <text x="190" y="55" textAnchor="middle" className="fill-blue-400 text-xs">R2 1M</text>
                
                {/* Connections */}
                <line x1="20" y1="125" x2="40" y2="125" stroke="#10B981" strokeWidth="2" />
                <line x1="100" y1="125" x2="120" y2="125" stroke="#10B981" strokeWidth="2" />
                <line x1="220" y1="150" x2="280" y2="150" stroke="#10B981" strokeWidth="2" />
                
                {/* Labels */}
                <text x="15" y="120" className="fill-white text-xs">Vin</text>
                <text x="285" y="145" className="fill-white text-xs">Vout</text>
                <text x="170" y="165" className="fill-green-400 text-xs">LM741</text>
                
                {/* Gain indicator */}
                <text x="200" y="280" className="fill-yellow-400 text-sm font-bold">
                  Gain: 20dB (10x)
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
