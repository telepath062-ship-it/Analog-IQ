'use client'

import { Check, Zap } from 'lucide-react'

const features = [
  'Unlimited voice-controlled circuit design',
  'AI circuit generation & optimization', 
  'Real-time SPICE simulation',
  'PCB layout generation',
  'Component sourcing integration',
  'Export to major EDA formats',
  'Cloud storage & version control',
  'Priority customer support'
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Powerful Pricing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional AI-powered circuit design that pays for itself with the first project
          </p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-0 right-0 bg-gradient-circuit text-white px-4 py-1 text-sm font-medium">
            Most Popular
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-circuit-blue mr-2" />
              <h3 className="text-2xl font-bold">Analog IQ Pro</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-gradient-circuit">$8</span>
              <span className="text-gray-400 text-lg">/month</span>
            </div>
            
            <ul className="text-left space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-circuit-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gradient-circuit hover:opacity-90 py-4 rounded-lg text-lg font-semibold transition-all">
              Start Building Circuits
            </button>
            
            <p className="text-sm text-gray-400 mt-4 flex items-center justify-center">
              <Zap className="w-4 h-4 mr-1 text-yellow-400" />
              30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Value proposition */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Compare to traditional EDA tools costing $1000s+ per seat. 
            Analog IQ delivers professional results at a fraction of the cost.
          </p>
        </div>
      </div>
    </section>
  )
}
