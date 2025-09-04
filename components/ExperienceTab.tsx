'use client'

import { Experience } from "@/types/types";
import { Briefcase, Building, Calendar } from "lucide-react";
import { motion } from "motion/react";

const ExperienceTab = ( {experience}: {experience: Experience } ) => {
  return (
    <motion.div 
      className="bg-secondary/20 rounded-lg p-4 sm:p-6 border border-secondary/30"
      initial={{ opacity: 0, y: 30, transition: { duration: 0.6, delay: 0.4 } }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
      <div className="mb-4">
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Briefcase className="w-5 h-5 text-secondary" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-glow">
            {experience.title}
          </h3>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            <span className="font-semibold text-sm sm:text-base">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm sm:text-base">{experience.duration}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
          <motion.li 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
            <span>{experience.description}</span>
          </motion.li>
          {experience.description2 && (
            <motion.li 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <span>{experience.description2}</span>
            </motion.li>
          )}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceTab;