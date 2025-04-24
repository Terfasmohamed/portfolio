import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function LanguagesSection() {
  const languages = [
    { name: "Français", level: "Courant", percentage: 95 },
    { name: "Anglais", level: "Intermédiaire à Avancé", percentage: 75 },
  ]

  return (
    <section id="languages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Langues</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {languages.map((language) => (
              <Card key={language.name} className="stagger-item overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{language.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{language.level}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-blue-600 skill-bar"
                      style={{ width: `0%`, "--skill-level": `${language.percentage}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
