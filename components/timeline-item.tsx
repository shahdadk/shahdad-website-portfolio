"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  item: {
    title: string
    organization: string
    date: string
    description: string
  }
  isLast: boolean
}

const TimelineItem = ({ item, isLast }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500 opacity-30" />
      )}

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-3 w-6 h-6 rounded-full bg-gray-800 border-2 border-teal-500 z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-1 rounded-full bg-teal-500/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </motion.div>

      <motion.div
        className="bg-gray-800/50 border border-gray-700 rounded-lg p-5"
        whileHover={{
          x: 5,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          borderColor: "rgba(20, 184, 166, 0.5)",
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <span className="text-sm text-teal-400">{item.date}</span>
        </div>
        <p className="text-blue-300 font-medium mb-2">{item.organization}</p>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </motion.div>
    </div>
  )
}

export default TimelineItem
