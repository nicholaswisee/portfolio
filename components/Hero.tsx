'use client'

import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import Profile from "@/public/profile.webp";
import { motion } from 'motion/react';

export default function Hero() {
  return (
      <motion.div 
        className="mx-auto px-2 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="px-8 sm:p-8 md:p-10 lg:p-12 mb-8 h-full flex flex-col justify-center items-center text-center card-hover-scale w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
              >
                <Image
                  src={Profile}
                  alt="Nicholas Wise"
                  className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-secondary rounded-full mb-4 sm:mb-6 flex items-center justify-center glow-accent object-cover border-4 border-secondary"
                />
              </motion.div>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Ciao, I'm Nicholas Wise!
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-balance max-w-4xl px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              an Informatics Engineering student at 
              <span className="text-sidebar-primary font-bold"> Bandung Institute of Technology</span>
            </motion.p>
          </Card>
        </motion.div>
      </motion.div>
  )
}
