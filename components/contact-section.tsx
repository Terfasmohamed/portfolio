"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitMessage("Merci pour votre message ! Je vous répondrai dès que possible.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: "Email",
      content: "om_terfas@esi.dz",
      link: "mailto:om_terfas@esi.dz",
    },
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: "Téléphone",
      content: "+213 770406708",
      link: "tel:+213 770406708",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-600" />,
      title: "Localisation",
      content: "Algérie",
      link: "https://www.google.com/maps/place/Ecole+Nationale+Sup%C3%A9rieure+d'Informatique+(Ex.+INI)/@36.7050299,3.1713407,17z/data=!4m14!1m7!3m6!1s0x128e522f3f317461:0x215c157a5406653c!2sEcole+Nationale+Sup%C3%A9rieure+d'Informatique+(Ex.+INI)!8m2!3d36.7050299!4d3.1739156!16s%2Fg%2F120hhrrs!3m5!1s0x128e522f3f317461:0x215c157a5406653c!8m2!3d36.7050299!4d3.1739156!16s%2Fg%2F120hhrrs?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      link: "https://github.com/Terfasmohamed/",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      link: "https://www.linkedin.com/in/mohamed-amine-terfas-969183333/",
      label: "LinkedIn",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation="slide-right">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informations de contact</h3>

            <AnimatedElement animation="stagger">
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="stagger-item flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedElement>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Suivez-moi</h3>
            <AnimatedElement animation="stagger">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stagger-item p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </AnimatedElement>
          </AnimatedElement>

          <AnimatedElement animation="slide-left">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envoyez-moi un message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Votre message"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>

                  {submitMessage && (
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-center">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
