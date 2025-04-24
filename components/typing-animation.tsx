"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  typingSpeed?: number
  delayStart?: number
  className?: string
}

export default function TypingAnimation({
  text,
  typingSpeed = 100,
  delayStart = 500,
  className = "",
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delayStart)

    return () => clearTimeout(startTypingTimeout)
  }, [delayStart])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, text, typingSpeed])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-[1px]"></span>
      )}
    </span>
  )
}
