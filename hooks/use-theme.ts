"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function useThemeDetector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    theme,
    setTheme,
    mounted,
    isDark: mounted && theme === "dark",
    isLight: mounted && theme === "light",
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  }
}
