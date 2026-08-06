"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();

    const entrance = {
        hidden: {
            opacity: prefersReducedMotion ? 1 : 0,
            y: prefersReducedMotion ? 0 : 24,
        },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: prefersReducedMotion ? 0 : 0.7,
                delay: prefersReducedMotion ? 0 : delay,
                ease: [0.33, 1, 0.68, 1] as const,
            },
        }),
    };

    return (
        <section
            id="top"
            className="site-container flex min-h-[calc(100vh-6rem)] flex-col justify-center pt-24 pb-12 md:pt-28 md:pb-20"
            aria-label="Introduction"
        >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <div className="order-2 lg:order-1">
                    <motion.p
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        className="section-eyebrow mb-4"
                    ></motion.p>

                    <motion.h1
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        className="font-display text-4xl font-medium leading-[1.1] text-paper-mist sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Nicholas Wise Saragih Sumbayak
                    </motion.h1>

                    <motion.p
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-mist/80 sm:text-xl md:text-2xl"
                    >
                        I build scalable software infrastructure, and collect
                        experiences worth learning from.
                    </motion.p>

                    <motion.p
                        custom={0.3}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        className="mt-4 max-w-2xl text-base leading-relaxed text-paper-mist/60 sm:text-lg"
                    >
                        From event-driven architectures and distributed systems
                        to algorithm papers and operating systems, each project
                        teaches me to measure results honestly.
                    </motion.p>

                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Button
                            asChild
                            className="bg-oxidized-teal text-archive-ink hover:bg-oxidized-teal/90"
                        >
                            <a href="#work">
                                View selected work
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            className="border-paper-mist/20 bg-transparent text-paper-mist hover:bg-paper-mist/10"
                        >
                            <Link href="/CV_Nicholas_Wise.pdf" download>
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    custom={0.2}
                    initial="hidden"
                    animate="visible"
                    variants={entrance}
                    className="order-1 flex justify-center lg:order-2"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-oxidized-teal/20 blur-3xl" />
                        <Image
                            src="/wise.webp"
                            alt="Portrait of Nicholas Wise Saragih Sumbayak"
                            width={320}
                            height={320}
                            priority
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 260px, 320px"
                            className="relative h-52 w-52 rounded-full border-2 border-oxidized-teal/30 object-cover shadow-xl sm:h-64 sm:w-64 lg:h-80 lg:w-80"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
