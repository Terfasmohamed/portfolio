import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedBackground from "@/components/animated-background"
import CursorEffect from "@/components/cursor-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Terfas Mohamed Amine | Développeur Web Fullstack",
  description:
    "Portfolio de Terfas Mohamed Amine, développeur web fullstack spécialisé en React.js, Express.js et MongoDB.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <CursorEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
