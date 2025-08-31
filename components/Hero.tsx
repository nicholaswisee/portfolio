import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import Profile from "@/public/profile.webp";

export default function Hero() {
  return (
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 mb-8 h-full flex flex-col justify-center items-center text-center card-hover-scale w-full">
            <Image
              src={Profile}
              alt="Nicholas Wise"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-secondary rounded-full mb-4 sm:mb-6 flex items-center justify-center glow-accent object-cover"
            />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
            Ciao, I'm Nicholas Wise
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-balance max-w-4xl leading-relaxed px-2">
            an Informatics Engineering student at Bandung Institute of Technology
          </p>
        </Card>
      </div>
  )
}
