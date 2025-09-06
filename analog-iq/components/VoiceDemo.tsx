'use client'

import { useState, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'

interface SpeechRecognition {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onresult: (event: any) => void
  onerror: (event: any) => void
  onend: () => void
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition
    webkitSpeechRecognition?: new () => SpeechRecognition
  }
}

export default function VoiceDemo() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = false
        recognitionInstance.interimResults = true
        recognitionInstance.lang = 'en-US'

        recognitionInstance.onresult = (event) => {
          const currentTranscript = event.results[0][0].transcript
          setTranscript(currentTranscript)
          
          // Simulate AI response
          setTimeout(() => {
            if (currentTranscript.toLowerCase().includes('op-amp') || currentTranscript.toLowerCase().includes('amplifier')) {
              setResponse('Generating op-amp circuit with specified parameters...')
            } else if (currentTranscript.toLowerCase().includes('resistor')) {
              setResponse('Placing resistor with calculated value...')
            } else if (currentTranscript.toLowerCase().includes('capacitor')) {
              setResponse('Adding bypass capacitor to improve stability...')
            } else {
              setResponse('Analyzing circuit requirements and generating design...')
            }
          }, 1000)
        }

        recognitionInstance.onerror = () => {
          setTranscript('Speech recognition error. Please try again.')
          setIsListening(false)
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [])

  const toggleListening = () => {
    if (!recognition) {
      // Fallback demo
      setIsListening(true)
      setTranscript('Demo: "Create an inverting op-amp with 10x gain"')
      setTimeout(() => {
        setResponse('Generating inverting amplifier with LM741, R1=10kΩ, R2=100kΩ for 10x gain...')
        setIsListening(false)
      }, 2000)
      return
    }

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      setTranscript('')
      setResponse('')
      recognition.start()
      setIsListening(true)
    }
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-4">Try Voice Commands</h3>
        <button
          onClick={toggleListening}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-400 animate-pulse' 
              : 'bg-circuit-blue hover:bg-blue-600'
          }`}
        >
          {isListening ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      <div className="text-center space-y-2 text-sm text-gray-400 mb-6">
        <p>"Create an inverting op-amp with 10x gain"</p>
        <p>"Add a 100nF bypass capacitor"</p>
        <p>"Show me the frequency response"</p>
      </div>

      {(transcript || response) && (
        <div className="bg-gray-900/50 rounded-lg p-4 space-y-3">
          {transcript && (
            <div className="text-green-400 font-mono text-sm">
              <span className="text-gray-400">You said:</span> "{transcript}"
            </div>
          )}
          {response && (
            <div className="text-blue-400 font-mono text-sm">
              <span className="text-gray-400">AI Response:</span> {response}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
