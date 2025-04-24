import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Terfas<span className="text-blue-600">.dev</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Développeur Web Fullstack spécialisé en React.js, Express.js et MongoDB.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                À propos
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projets
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Compétences
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Terfasmohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-amine-terfas-969183333/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© {currentYear} Terfas Mohamed Amine - Développeur Web</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
