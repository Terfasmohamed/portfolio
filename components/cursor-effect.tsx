"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const { theme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)
    }

    const updateCursorStyle = () => {
      const target = document.elementFromPoint(position.x, position.y) as HTMLElement
      if (target) {
        const computedStyle = window.getComputedStyle(target)
        setIsPointer(computedStyle.cursor === "pointer")
      }
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseover", updateCursorStyle)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseover", updateCursorStyle)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position.x, position.y, isMobile])

  if (isMobile) return null

  const isDark = theme === "dark"

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`rounded-full ${isDark ? "bg-white" : "bg-blue-600"}`}
          style={{
            width: isPointer ? "40px" : "20px",
            height: isPointer ? "40px" : "20px",
            opacity: isPointer ? 0.5 : 0.3,
            transition: "width 0.3s, height 0.3s, opacity 0.3s",
          }}
        />
      </div>
      <div
        className={`fixed pointer-events-none z-50 rounded-full ${isDark ? "bg-white" : "bg-blue-600"} transition-transform duration-500 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          width: "8px",
          height: "8px",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}
