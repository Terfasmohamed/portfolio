import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, AwardIcon, UsersIcon } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "President",
      organization: "Scientific Club, Higher National School of Computer Science",
      period: "2023 - Present",
      description:
        "Leading the scientific club, organizing tech events, workshops, and hackathons. Managing a team of talented students and fostering innovation.",
      icon: <UsersIcon className="h-6 w-6 text-red-600" />,
    },
    {
      id: 2,
      title: "Developer Assistant",
      organization: "Scientific Club, Higher National School of Computer Science",
      period: "2023",
      description: "Assisted in development projects, mentored junior developers, and contributed to club initiatives.",
      icon: <BriefcaseIcon className="h-6 w-6 text-orange-500" />,
    },
    {
      id: 3,
      title: "Marketing Manager",
      organization: "Sport and Entertainment Club, Higher National School of Computer Science",
      period: "2022 - 2023",
      description:
        "Managed marketing strategies for club events, increased engagement, and built the club's online presence.",
      icon: <AwardIcon className="h-6 w-6 text-red-600" />,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">My professional journey</p>
          </div>
        </AnimatedElement>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 to-orange-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <AnimatedElement animation="scale-up">
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-red-600 z-10 hidden md:block"></div>
                  </AnimatedElement>

                  {/* Content */}
                  <div className="md:w-1/2 md:px-10">
                    <AnimatedElement animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                      <Card className={`shadow-lg ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="mr-4 p-2 rounded-full bg-purple-100 dark:bg-gray-800">{exp.icon}</div>
                            <div>
                              <h3 className="text-xl font-bold">{exp.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300">{exp.organization}</p>
                            </div>
                          </div>
                          <div className="mb-4 inline-block px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-gray-800 text-red-800 dark:text-red-300">
                            {exp.period}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </AnimatedElement>
                  </div>

                  {/* Empty div for spacing in timeline */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
