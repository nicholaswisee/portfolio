'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Card } from './ui/card'
import ProjectCard from './ProjectCard'
import { BadgeItem, Project } from '@/types/types'

const projects: Project[] = [
  {
    name: "INFEST 2025",
    description: "The largest Investment Festival held by KSEP ITB for Indonesia.",
    url: "https://www.infestbdg.com",
    image: "/infest.png",
    github: "https://github.com/nicholaswisee/infest-2025",
    badges: [
      {
        name: "Next.js",
        icon: "/nextjs-original.svg"
      },
      {
        name: "TypeScript",
        icon: "/typescript-original.svg"
      },
      {
        name: "TailwindCSS",
        icon: "/tailwindcss-original.svg"
      },
      {
        name: "Supabase",
        icon: "/supabase-original.svg"
      }
    ]
  },
  {
    name: "Lokasharana",
    description: "A photo gallery for FSRD 2024's graduation ceremony.",
    url: "https://www.lokasharana.com",
    image: "/lokasharana.png",
    github: "https://github.com/nicholaswisee/FSRD-2024-Web-Gallery",
    badges: [
      {
        name: "Next.js",
        icon: "/nextjs-original.svg"
      },
      {
        name: "TypeScript",
        icon: "/typescript-original.svg"
      },
      {
        name: "TailwindCSS",
        icon: "/tailwindcss-original.svg"
      },
      {
        name: "Cloudflare",
        icon: "/cloudflare-original.svg"
      }
    ]
  },
  {
    name: "Nimons Hospital",
    description: "A CLI-based hospital system simulator with fundamental data structure implementations.",
    github: "https://github.com/nicholaswisee/Tubes-Alpro-1",
    image: "/hospitalwebp.webp",
    badges: [
      {
        name: "C",
        icon: "/c-original.svg"
      },
    ]
  },
]

export default function Projects() {
  return (
    <motion.div 
      className="mx-auto px-2 sm:px-6 lg:px-8"
      id="Projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 mb-8 h-full flex flex-col justify-center items-center text-center card-hover-scale w-full">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground -mt-3 sm:-mt-1 mb-6 sm:mb-8 text-balance max-w-4xl leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Here's a bunch of my recent projects!
            </motion.p>
            <motion.div 
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.0 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
    </motion.div>  
  )
}
