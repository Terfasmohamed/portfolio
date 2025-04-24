import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Database, Palette } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">À propos</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slide-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Développeur Web Fullstack</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Je m'appelle Terfas Mohamed Amine, étudiant à l'École Supérieure de l'Informatique en Algérie, spécialisé
              en développement web fullstack. Je maîtrise les technologies modernes telles que React, Express.js,
              MongoDB, HTML, CSS et JavaScript.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Rigoureux et passionné, je suis constamment à la recherche d'opportunités pour progresser et approfondir
              mes compétences. Mon objectif est de devenir un développeur web accompli, capable de concevoir des
              solutions performantes, modernes et adaptées aux besoins utilisateurs.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="stagger">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="stagger-item">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Code className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                  <p className="text-gray-600 dark:text-gray-400">React.js, HTML/CSS, JavaScript, Tailwind CSS</p>
                </CardContent>
              </Card>
              <Card className="stagger-item">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Server className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Backend</h4>
                  <p className="text-gray-600 dark:text-gray-400">Express.js, Node.js, APIs RESTful</p>
                </CardContent>
              </Card>
              <Card className="stagger-item">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Database className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Base de données</h4>
                  <p className="text-gray-600 dark:text-gray-400">MongoDB, SQL</p>
                </CardContent>
              </Card>
              <Card className="stagger-item">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Palette className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Design</h4>
                  <p className="text-gray-600 dark:text-gray-400">Responsive Design, Tailwind CSS</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
