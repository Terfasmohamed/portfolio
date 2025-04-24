import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageSquare } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function OtherSkillsSection() {
  const otherSkills = [
    {
      title: "Gestion de projet",
      description: "Travail en équipe, respect des délais",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Communication",
      description: "Présentations techniques, collaboration en équipe",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Autres Compétences</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {otherSkills.map((skill, index) => (
              <Card key={index} className="stagger-item overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">{skill.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{skill.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
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
