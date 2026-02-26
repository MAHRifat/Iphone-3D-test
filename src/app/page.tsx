"use client"

import Scene from "@/components/Scene"
import { MessageCircle, Shield, Zap } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Home() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5
      })
        .from(textRef.current, {
          y: 50,
          opacity: 0,
          duration: 1
        }, "-=0.8")
        .from(buttonRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8
        }, "-=0.6")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="relative min-h-screen bg-gray-300 text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
            <MessageCircle className="text-white w-5 h-5" />
          </div>
          <span>ConnectNext</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">Premium</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </nav>
        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0">
          <Scene />
        </div>

        <div className="relative z-10 max-w-2xl text-center md:text-left md:absolute md:left-20 pointer-events-none">
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
            WHATSAPP<br />REDESIGNED.
          </h1>
          <p ref={textRef} className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Experience the next generation of messaging. Real-time encryption,
            lightning fast delivery, and a stunning 3D interface.
          </p>
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pointer-events-auto">
            <button className="px-8 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Download App
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="absolute bottom-10 left-0 w-full px-6 flex justify-center gap-4 md:gap-12 text-xs md:text-sm font-medium text-gray-500 pointer-events-none">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-green-500" />
            <span>Real-time Sync</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-500" />
            <span>WhatsApp Integrated</span>
          </div>
        </div>
      </section>

      {/* Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </main>
  )
}
