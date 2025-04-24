"use client"

import type React from "react"

import { useState, useRef, type ReactNode, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface TiltEffectProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  scale?: number
  perspective?: number
  transitionSpeed?: number
  gyroscope?: boolean
}

export default function TiltEffect({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.05,
  perspective = 1000,
  transitionSpeed = 400,
  gyroscope = true,
}: TiltEffectProps) {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})
  const elementRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * maxTilt
    const tiltY = ((centerX - x) / centerX) * maxTilt

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform ${transitionSpeed}ms ease-out`,
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      transition: `transform ${transitionSpeed}ms ease-out`,
    })
  }

  // Handle device orientation for mobile
  useEffect(() => {
    if (!isMobile || !gyroscope) return

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!elementRef.current || !e.gamma || !e.beta) return

      const gamma = e.gamma // Left to right tilt in degrees (-90 to 90)
      const beta = e.beta // Front to back tilt in degrees (-180 to 180)

      // Normalize the values to our tilt range
      const tiltX = (beta / 45) * maxTilt * 0.5 // Reduce sensitivity
      const tiltY = (gamma / 45) * maxTilt * 0.5 // Reduce sensitivity

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${transitionSpeed}ms ease-out`,
      })
    }

    window.addEventListener("deviceorientation", handleDeviceOrientation as any)

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation as any)
    }
  }, [isMobile, gyroscope, maxTilt, scale, perspective, transitionSpeed])

  return (
    <div
      ref={elementRef}
      className={className}
      style={tiltStyle}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      {children}
    </div>
  )
}
