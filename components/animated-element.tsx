"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedElementProps {
  children: ReactNode
  animation: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right" | "stagger"
  className?: string
  threshold?: number
  delay?: number
  rootMargin?: string
}

export default function AnimatedElement({
  children,
  animation,
  className = "",
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
}: AnimatedElementProps) {
  const [isIntersecting, ref] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return isIntersecting ? "fade-up-show" : "fade-up-hidden"
      case "fade-in":
        return isIntersecting ? "fade-in-show" : "fade-in-hidden"
      case "scale-up":
        return isIntersecting ? "scale-up-show" : "scale-up-hidden"
      case "slide-left":
        return isIntersecting ? "slide-left-show" : "slide-left-hidden"
      case "slide-right":
        return isIntersecting ? "slide-right-show" : "slide-right-hidden"
      case "stagger":
        return isIntersecting ? "stagger-show" : ""
      default:
        return ""
    }
  }

  const style = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div ref={ref as any} className={`${className} ${getAnimationClasses()}`} style={style}>
      {children}
    </div>
  )
}
