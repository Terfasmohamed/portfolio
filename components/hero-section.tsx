"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Set loaded after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  // Calculate parallax effect for background elements
  const calculateParallax = (strength = 0.05) => {
    if (typeof window === "undefined") return { x: 0, y: 0 }

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const moveX = (mousePosition.x - centerX) * strength
    const moveY = (mousePosition.y - centerY) * strength

    return { x: moveX, y: moveY }
  }

  const parallax1 = calculateParallax(0.02)
  const parallax2 = calculateParallax(0.03)

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background elements with parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-transform duration-200 ease-out"
          style={{ transform: `translate(${parallax1.x}px, ${parallax1.y}px)` }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl transition-transform duration-200 ease-out"
          style={{ transform: `translate(${parallax2.x}px, ${parallax2.y}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-up" className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              <span className="block">Terfas</span>
              <AnimatedElement animation="fade-in" delay={300}>
                <span className="block text-blue-600">Mohamed Amine</span>
              </AnimatedElement>
            </h1>
            <AnimatedElement animation="fade-up" delay={400}>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Développeur Web Fullstack spécialisé en React.js, Express.js et MongoDB. Étudiant à l'École Supérieure
                de l'Informatique en Algérie.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fade-up" delay={600}>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#projects">
                    Voir mes projets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Me contacter</Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href="https://github.com/Terfasmohamed/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                  <Link href="https://www.linkedin.com/in/mohamed-amine-terfas-969183333/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          </AnimatedElement>

          <AnimatedElement animation="scale-up" delay={300} className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000139312.jpg-aHPcs9lDOcZ7rEwHAz963z3ZVWjvGR.jpeg"
                alt="Terfas Mohamed Amine"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 animate-float"
              style={{
                animation: isLoaded ? "float 6s ease-in-out infinite" : "none",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold">ESI</span>
              </div>
            </div>
            <div
              className="absolute -bottom-2 -left-6 bg-white dark:bg-gray-800 shadow-lg rounded-full py-2 px-4"
              style={{
                animation: isLoaded ? "float 6s ease-in-out 1s infinite" : "none",
              }}
            >
              <span className="text-sm font-medium">Fullstack</span>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
