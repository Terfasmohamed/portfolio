"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedElement from "@/components/animated-element"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Khademni",
      description:
        "Un site web créé pour les jeunes Algériens qui recherchent un emploi temporaire. Les utilisateurs peuvent créer un compte, publier des offres et postuler à des missions temporaires.",
      image: "/connected-careers.png",
      category: "fullstack",
      role: "Développeur principal",
      tags: ["React.js", "MongoDB", "Express.js"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "GesGrh",
      description:
        "Gestion des employés avec différentes interfaces pour l'administrateur, les ressources humaines et les employés. Ce projet a été créé lors d'un hackathon à l'ESI.",
      image: "/connected-team-dashboard.png",
      category: "frontend",
      role: "Membre Frontend",
      tags: ["React.js"],
      links: {
        demo: "#",
        github: "https://github.com/GesGrh",
      },
    },
    {
      id: 3,
      title: "Portfolio Hackathon",
      description: "Ce portfolio a été créé lors d'un hackathon.",
      image: "/clean-creative-portfolio.png",
      category: "frontend",
      role: "Création de certaines pages",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      id: 4,
      title: "DataHack",
      description:
        "Un site développé pour l'événement DataHack organisé par le Club Scientifique de l'ESI. Les participants peuvent s'inscrire pour participer à l'événement.",
      image: "/coding-competition-banner.png",
      category: "frontend",
      role: "Membre, création de quelques pages",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "https://github.com/DataHack",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Projets</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Découvrez mes réalisations récentes</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={200}>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {projects.map((project) => (
                    <div key={project.id} className="stagger-item">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            </TabsContent>

            <TabsContent value="fullstack" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {projects
                    .filter((project) => project.category === "fullstack")
                    .map((project) => (
                      <div key={project.id} className="stagger-item">
                        <ProjectCard project={project} />
                      </div>
                    ))}
                </div>
              </AnimatedElement>
            </TabsContent>

            <TabsContent value="frontend" className="mt-0">
              <AnimatedElement animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {projects
                    .filter((project) => project.category === "frontend")
                    .map((project) => (
                      <div key={project.id} className="stagger-item">
                        <ProjectCard project={project} />
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

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    category: string
    role: string
    tags: string[]
    links: {
      demo: string
      github: string
    }
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{project.role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
        {project.links.demo && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
        {project.links.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
