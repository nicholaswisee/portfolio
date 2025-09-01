'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Github, Instagram, Linkedin, Mail, Palette, Database, Globe, Cpu, CodeXml, Terminal, ToolCase, Wrench } from 'lucide-react'
import InfiniteScrollBadges from './InfiniteScrollBadges'

const ButtonSections = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
      <Button
        variant="outline"
        size="sm"
        className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 bg-transparent text-xs sm:text-sm flex-1 sm:flex-none min-w-0"
        onClick={() => window.open("https://github.com/nicholaswisee", "_blank")}
      >
        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">GitHub</span>
        <span className="sm:hidden">Git</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 bg-transparent text-xs sm:text-sm flex-1 sm:flex-none min-w-0"
        onClick={() => window.open("https://www.linkedin.com/in/nicholaswises/", "_blank")}
      >
        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">LinkedIn</span>
        <span className="sm:hidden">In</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 bg-transparent text-xs sm:text-sm flex-1 sm:flex-none min-w-0"
        onClick={() => window.open("mailto:nicholasaragih@gmail.com")}
      >
        <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Email</span>
        <span className="sm:hidden">@</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="border-secondary/50 hover:border-secondary hover:bg-secondary/10 bg-transparent text-xs sm:text-sm flex-1 sm:flex-none min-w-0"
        onClick={() => window.open("https://www.instagram.com/nicholaswises/", "_blank")}
      >
        <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Instagram</span>
        <span className="sm:hidden">IG</span>
      </Button>
    </div>
  )
}

type Tool = {
  name: string,
  icon: string,
}

export default function AboutSkills() {
  const developmentBadges = [
    { name: "React", icon: "/react-original.svg" },
    { name: "Next.js", icon: "/nextjs-original.svg" },
    { name: "Node.js", icon: "/nodejs-original.svg" },
    { name: "Bun", icon: "/bun-original.svg" },
    { name: "pnpm", icon: "/pnpm-original.svg" },
    { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
    { name: "PrismaORM", icon: "/prisma-original.svg" },
    { name: "Express", icon: "/express.webp" },
    { name: "Hono", icon: "/hono.svg" },
    { name: "Vite", icon: "/vitejs-original.svg" },
    { name: "DrizzleORM", icon: "/drizzle-orm.webp" },
    { name: "React Query", icon: "/react-query.webp" },
    { name: "Zod", icon: "/zod.png"}
  ]

  const programmingLanguages = [
    { name: "TypeScript", icon: "/typescript-original.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "Python", icon: "/python-original.svg" },
    { name: "C", icon: "/c-original.svg" },
    { name: "HTML5", icon: "/html5-original.svg" },
    { name: "CSS3", icon: "/css3-original.svg" },
    { name: "TypeScript", icon: "/typescript-original.svg" },
    { name: "JavaScript", icon: "/javascript-original.svg" },
    { name: "Python", icon: "/python-original.svg" },
    { name: "C", icon: "/c-original.svg" },
    { name: "HTML5", icon: "/html5-original.svg" },
    { name: "CSS3", icon: "/css3-original.svg" }
]

  const toolsBadges = [
    { name: "Git", icon: "/git-original.svg" },
    { name: "GitHub", icon: "/github.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "Postman", icon: "/postman-original.svg" },
    { name: "Figma", icon: "/figma-original.svg" },
    { name: "Supabase", icon: "/supabase-original.svg"},
    { name: "MongoDB", icon: "/mongodb-original.svg"},
    { name: "PostgreSQL", icon: "/postgresql-original.svg"},
    { name: "Cloudflare R2", icon: "/cloudflare-original.svg"}
  ]

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 lg:items-stretch" id="About">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-4 sm:p-6 md:p-8 h-auto lg:h-full flex flex-col justify-start card-hover-scale">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm a passionate learner with 2+ years of experience in full-stack development.
            My passion to create is fueled by my curiosity in technology and how I can use it to solve real-world problems.
            I'm particularly interested in Software Engineering and Big Data, currently exploring
            Backend Development and Machine Learning.
          </motion.p>
          <motion.div 
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-glow mb-3 sm:mb-4">Connect With Me!</h2>
            <ButtonSections />
          </motion.div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="p-4 sm:p-6 md:p-8 h-auto lg:h-full flex flex-col justify-start card-hover-scale overflow-hidden">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tools and Technologies
          </motion.h2>
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-6 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center">
                <CodeXml className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-secondary text-glow pulse" />
                Web Development
              </h3>
              <InfiniteScrollBadges badges={developmentBadges} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-secondary text-glow pulse" />
                Languages
              </h3>
              <InfiniteScrollBadges badges={programmingLanguages} direction='right'/>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center">
                <Wrench className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-secondary text-glow pulse" />
                Tools & Databases
              </h3>
              <InfiniteScrollBadges badges={toolsBadges} />
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}