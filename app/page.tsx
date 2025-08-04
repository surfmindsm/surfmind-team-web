"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Mail, Phone, Smartphone, Globe, Database, Zap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SurfmindPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with AI recommendations",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      link: "https://example-ecommerce.com",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Blockchain", "Security", "UX/UI"],
      link: "https://example-banking.com",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Real-time patient monitoring system",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Python", "IoT", "Real-time"],
      link: "https://example-healthcare.com",
      category: "Dashboard",
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      description: "Intelligent customer service automation",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "OpenAI", "WebSocket", "Analytics"],
      link: "https://example-chatbot.com",
      category: "AI/ML",
    },
    {
      id: 5,
      title: "Logistics Management",
      description: "Supply chain optimization platform",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Angular", "Microservices", "Docker", "AWS"],
      link: "https://example-logistics.com",
      category: "Enterprise",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Comprehensive social media insights",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "D3.js", "GraphQL", "MongoDB"],
      link: "https://example-analytics.com",
      category: "Analytics",
    },
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      description: "Scalable server architecture and APIs",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      description: "Machine learning and AI-powered features",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              surfmind
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Work", "Services", "About", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center" style={{ y, opacity }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                We Build
              </span>
              <br />
              <span className="text-gray-900">Anything You Need</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              surfmind는 고객이 원하는 모든 요구사항에 맞춰 어떠한 개발 요건이라도 충족시켜 드리는 전문 개발팀입니다.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                asChild
              >
                <motion.a href="#work" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-full bg-transparent"
                asChild
              >
                <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get In Touch
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we handle every aspect of your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest projects and successful implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                        <Link href={item.link} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  surfmind
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate team of developers, designers, and innovators who believe in turning ideas into
                reality. No matter how complex your requirements are, we have the expertise and dedication to deliver
                exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approach combines cutting-edge technology with creative problem-solving to build solutions that not
                only meet your needs but exceed your expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Surfmind Team"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Users className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. We're here to help you build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <Mail className="w-6 h-6" />
                <span className="text-lg">hello@surfmind.dev</span>
              </motion.div>
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                <Phone className="w-6 h-6" />
                <span className="text-lg">+82 10-1234-5678</span>
              </motion.div>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              asChild
            >
              <motion.a href="mailto:hello@surfmind.dev" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            surfmind
          </motion.div>
          <p className="text-gray-400 mb-6">Building the future, one project at a time.</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2024 surfmind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
