'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import {Project, type BadgeItem} from "@/types/types";
import { ExternalLink, LucideGithub } from 'lucide-react'

export default function ProjectCard( { project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full flex justify-center"
    >
      <Card className='w-full max-w-md h-full shadow-2xl hover:shadow-accent/50 transition-shadow duration-500 ease-out flex flex-col'>
        <CardTitle className='text-2xl'>{project.name}</CardTitle>
        <CardFooter>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full"
          >
            {project.image ? (
              <Image 
                src={project.image} 
                alt={project.name} 
                width={400} 
                height={225} 
                className='aspect-video w-full object-cover rounded-md' 
              />
            ) : (
              <div 
                className='aspect-video w-full rounded-md flex items-center justify-center text-white/80 text-lg font-medium'
                style={{ background: project.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                {project.name}
              </div>
            )}
          </motion.div>
        </CardFooter>
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className='text-lg text-white flex-1'>
            {project.description}
          </CardDescription>
          <div className="mt-3 text-left flex -space-x-3">
            {project.badges.map((badge: BadgeItem, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Badge 
                  variant="secondary" 
                  className="bg-background/80 rounded-lg p-2 flex items-center justify-center w-9 h-9"
                >
                <Image alt={badge.name} src={badge.icon} width={24} height={24} className="w-6 h-6 object-contain"/>
              </Badge>
            </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className='flex justify-between items-center mt-auto'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={project.github} className='flex items-center gap-3 text-lg'>
                <LucideGithub className='h-8 w-8 hover:text-secondary transition-colors duration-300 ease-out' />
              </Link>
            </motion.div>
            { project.url && <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href={project.url} target='_blank' className='flex items-center gap-3 text-lg'>
                <Button className='hover:bg-secondary hover:text-white transition-all duration-300 ease-out'>Live Demo <ExternalLink /></Button>
              </Link>
            </motion.div>}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
