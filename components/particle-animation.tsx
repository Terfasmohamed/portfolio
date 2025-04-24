"use client"

import { useEffect, useRef } from "react"
import { useThemeDetector } from "@/hooks/use-theme"
import { useMobile } from "@/hooks/use-mobile"

interface ParticleAnimationProps {
  className?: string
  particleColor?: string
  particleSize?: number
  particleCount?: number
  connectionDistance?: number
  speed?: number
}

export default function ParticleAnimation({
  className = "",
  particleColor,
  particleSize = 2,
  particleCount = 50,
  connectionDistance = 100,
  speed = 1,
}: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isDark } = useThemeDetector()
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * particleSize + 1
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.color = particleColor || (isDark ? `rgba(255, 100, 50, 0.3)` : `rgba(220, 80, 40, 0.2)`)
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      // Reduce particle count on mobile
      const count = isMobile ? Math.min(particleCount / 2, 25) : particleCount

      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines if they're close enough
        // Skip some connections on mobile for better performance
        if (isMobile && i % 2 !== 0) continue

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = particleColor
              ? `${particleColor.replace(")", ", " + (1 - distance / connectionDistance) * 0.2 + ")")}`
              : isDark
                ? `rgba(255, 100, 50, ${(1 - distance / connectionDistance) * 0.1})`
                : `rgba(220, 80, 40, ${(1 - distance / connectionDistance) * 0.05})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark, isMobile, particleColor, particleSize, particleCount, connectionDistance, speed])

  return <canvas ref={canvasRef} className={`${className}`} aria-hidden="true" />
}
