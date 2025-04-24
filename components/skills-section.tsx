"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function SkillsSection() {
  const programmingSkills = [
    { name: "C", level: 80 },
    { name: "JavaScript", level: 60 },
    { name: "C++", level: 40 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 50 },
  ]

  const frameworkSkills = [
    { name: "React.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 60 },
  ]

  const toolsSkills = [
    { name: "Git/GitHub", level: 75 },
    { name: "Visual Studio Code", level: 85 },
    { name: "Postman", level: 70 },
  ]

  const methodologySkills = [
    { name: "Développement agile", level: 65 },
    { name: "Responsive Design", level: 80 },
    { name: "APIs RESTful", level: 60 },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Compétences</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Technologies et outils que je maîtrise</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={200}>
          <Tabs defaultValue="programming" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="programming" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Langages</span>
                </TabsTrigger>
                <TabsTrigger value="frameworks" className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  <span>Frameworks</span>
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  <span>Outils</span>
                </TabsTrigger>
                <TabsTrigger value="methodologies" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Méthodologies</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="programming" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {programmingSkills.map((skill) => (
                    <div key={skill.name} className="stagger-item">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </TabsContent>

            <TabsContent value="frameworks" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {frameworkSkills.map((skill) => (
                    <div key={skill.name} className="stagger-item">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {toolsSkills.map((skill) => (
                    <div key={skill.name} className="stagger-item">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </TabsContent>

            <TabsContent value="methodologies" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {methodologySkills.map((skill) => (
                    <div key={skill.name} className="stagger-item">
                      <SkillCard skill={skill} />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </TabsContent>
          </Tabs>
        </AnimatedElement>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: {
    name: string
    level: number
  }
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-lg">{skill.name}</h3>
          <span className="text-sm font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full bg-blue-600 skill-bar"
            style={{ width: `0%`, "--skill-level": `${skill.level}%` } as React.CSSProperties}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}
