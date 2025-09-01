'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Infest from '@/public/infest.png'
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
    >
      <Card className='max-w-md shadow-2xl hover:shadow-accent/50 transition-shadow duration-500 ease-out'>
        <CardTitle className='text-2xl'>{project.name}</CardTitle>
        <CardFooter>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              width={400} 
              height={225} 
              className='aspect-video w-full object-cover rounded-md' 
            />
          </motion.div>
        </CardFooter>
        <CardContent>
          <CardDescription className='text-lg text-white'>
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
                  className="bg-background/80 rounded-full p-2"
                >
                <Image alt={badge.name} src={badge.icon} width={30} height={30}/>
              </Badge>
            </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className='flex justify-between items-center mt-2'>
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
