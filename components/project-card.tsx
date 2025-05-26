import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    techStack: string[]
    link?: string
    github?: string
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, techStack, github, link } = project

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm"
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)",
        borderColor: "rgba(99,102,241,0.5)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* show the actions row only if at least one link exists */}
        {(github || link) && (
          <div className="flex gap-4 mt-4">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.a>
            )}

            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
