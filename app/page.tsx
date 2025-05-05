"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import ProjectCard from "@/components/project-card"
import TimelineItem from "@/components/timeline-item"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSectionClick = (section: string) => {
    setActiveSection(section === activeSection ? null : section)
  }

  const productionProjects = [
    {
      title: "Enterprise iOS App",
      description: "A comprehensive iOS application for enterprise resource management",
      techStack: ["Swift", "UIKit", "Core Data", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced analytics",
      techStack: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#",
      github: "#",
    },
    {
      title: "Health Tracking System",
      description: "HIPAA-compliant health metrics tracking application",
      techStack: ["Swift", "HealthKit", "AWS", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ]

  const personalProjects = [
    {
      title: "Open Source CLI Tool",
      description: "Command-line utility for automating development workflows",
      techStack: ["Go", "Cobra", "GitHub Actions"],
      link: "#",
      github: "#",
    },
    {
      title: "Machine Learning Experiment",
      description: "Image classification model with custom dataset",
      techStack: ["Python", "TensorFlow", "Jupyter"],
      link: "#",
      github: "#",
    },
    {
      title: "Personal Blog",
      description: "Technical blog built with modern web technologies",
      techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      link: "#",
      github: "#",
    },
    {
      title: "Mobile Game",
      description: "Casual puzzle game with over 10k downloads",
      techStack: ["Swift", "SpriteKit", "Firebase"],
      link: "#",
      github: "#",
    },
  ]

  const educationItems = [
    {
      title: "BASc in Mechatronics Engineering",
      organization: "University of Waterloo",
      date: "2024 - 2029",
      description: "Excellent standing, GPA 3.9/4.0\nNorman Esch Enterprise Co-op Award - $10,000\nPresident’s Scholarship of Distinction - $5,000",
    },
    {
      title: "Ontario Secondary School Diploma",
      organization: "Waterloo Collegiate Institute",
      date: "2020 - 2024",
      description: "Advanced placement, 97.16%",
    },
  ]

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <ParticleBackground cursorPosition={cursorPosition} />

      <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
        <header className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.00 }}
          >
            <span className="relative">
              Shahdad Kompani
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {["iOS Engineer", "Full-Stack Engineer", "Dev Ops"].map((role, index) => (
              <motion.span
                key={role}
                className="px-4 py-2 rounded-full bg-gray-800 text-sm md:text-base"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#2d3748",
                  boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a
              href="https://github.com/shahdadk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(66, 153, 225, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-blue-400" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/shahdadk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(66, 153, 225, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <motion.button
              onClick={() => handleSectionClick("production")}
              className={cn(
                "relative overflow-hidden rounded-xl py-6 px-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg",
                activeSection === "production" && "border-blue-500",
              )}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0"
                animate={{ opacity: activeSection === "production" ? 0.3 : 0 }}
              />
              <h2 className="text-xl font-bold mb-1">Projects in Production</h2>
              <p className="text-sm text-gray-400">Live with real users</p>
            </motion.button>

            <motion.button
              onClick={() => handleSectionClick("projects")}
              className={cn(
                "relative overflow-hidden rounded-xl py-6 px-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg",
                activeSection === "projects" && "border-purple-500",
              )}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-teal-600/20 opacity-0"
                animate={{ opacity: activeSection === "projects" ? 0.3 : 0 }}
              />
              <h2 className="text-xl font-bold mb-1">Projects</h2>
              <p className="text-sm text-gray-400">Personal & open source work</p>
            </motion.button>

            <motion.button
              onClick={() => handleSectionClick("education")}
              className={cn(
                "relative overflow-hidden rounded-xl py-6 px-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg",
                activeSection === "education" && "border-teal-500",
              )}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 opacity-0"
                animate={{ opacity: activeSection === "education" ? 0.3 : 0 }}
              />
              <h2 className="text-xl font-bold mb-1">Awards & Education</h2>
              <p className="text-sm text-gray-400">Qualifications & achievements</p>
            </motion.button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeSection === "production" && (
            <motion.section
              key="production"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Projects in Production
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productionProjects.map((project, index) => (
                  <motion.div key={project.title} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Personal Projects
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalProjects.map((project, index) => (
                  <motion.div key={project.title} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === "education" && (
            <motion.section
              key="education"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">
                  Education & Certifications
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                {educationItems.map((item, index) => (
                  <motion.div key={item.title} variants={itemVariants} transition={{ delay: index * 0.1 }}>
                    <TimelineItem item={item} isLast={index === educationItems.length - 1} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {!activeSection && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center max-w-2xl mx-auto mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">I build things people actually use</h2>
            
            <p className="text-gray-400">Select a section above to explore my work and background</p>
          </motion.section>
        )}
      </div>

      <footer className="mt-auto py-8 text-center text-gray-400 text-sm relative z-10">
          <p>© {new Date().getFullYear()} Shahdad Kompani. All rights reserved.</p>
      </footer>
    </div>
  )
}
