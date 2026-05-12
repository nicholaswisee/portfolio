'use client'

import { m, motion } from 'motion/react'
import { Card } from './ui/card'
import { type Experience } from '@/types/types'
import { Briefcase, Building, Calendar } from 'lucide-react'
import ExperienceTab from './ExperienceTab'
import { LoaderOne } from './ui/loader'

const experiences:  Experience[] = [
  { 
    title: "Vice Director of Operations",
    company: "KSEP ITB",
    duration: "Apr 2025 - Present",
    description: "Led and contributed to the development of 4 professional websites for KSEP ITB, supervising a team of 4 while actively working on design, implementation, and deployment to ensure timely, high-quality results."
  },
  {
    title: "Head of Website Development",
    company: "TEDxITB 9.0",
    duration: "Sep 2025 - Present",
    description: "Led the end-to-end development of the TEDxITB 9.0 website, boosting publicity reach by 50%.",
    description2: "Optimized event and merchandise workflows by implementing a checkout system handling 100+ orders, improving efficiency by 100%."
  },
  {
    title: "Deputy Head of IT",
    company: "Aku Masuk ITB 2026",
    duration: "Oct 2025 - Feb 2026",
    description: "Coordinated a team of 12 to develop a comprehensive e-commerce platform for event registration and merchandise sales, handling 7,000+ users concurrently and increasing operational efficiency by 100%.",
    description2: "Engineered an end-to-end system using Vite + React and Hono, leveraging Docker for containerized automated deployments and reducing manual overhead by ~70%."
  },
]


export default function Personal() {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 lg:items-stretch" id="Personal">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-4 sm:p-6 md:p-8 h-auto lg:h-full flex flex-col gap-3 justify-start card-hover-scale">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Previous Experiences
          </motion.h2>        
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here's what I've done so far!
          </motion.p>

          <motion.div 
          className='flex flex-col gap-3' 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          >
            {experiences.map((experience, index) => {
              return <ExperienceTab key={index} experience={experience} />;
            })}
          </motion.div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-4 sm:p-6 md:p-8 h-auto lg:h-full flex flex-col gap-3 justify-start card-hover-scale overflow-hidden">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TBD
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            to be continued...
          </motion.p>
          <div className='flex justify-center items-center flex-1 mb-10'>
            <LoaderOne />
          </div>
        </Card>
      </motion.div>
    </div>
  )
}