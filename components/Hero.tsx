"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";

    const entrance = {
        hidden: {
            opacity: 0,
            y: 24,
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
            data-section="hero"
            aria-labelledby="hero-title"
            className={`site-container flex flex-col justify-center ${isCompact ? "pt-20 pb-8 text-center md:pt-24 md:pb-10" : "min-h-[calc(100vh-6rem)] pt-24 pb-12 md:pt-28 md:pb-20"}`}
            aria-label="Introduction"
        >
            <div className={`grid grid-cols-1 items-center ${isCompact ? "mx-auto max-w-2xl gap-6 lg:gap-8" : "gap-10 lg:gap-14 lg:grid-cols-[1.2fr_0.8fr]"}`}>
                <div className={isCompact ? "mx-auto max-w-2xl" : "max-w-3xl"}>
                    <motion.h1
                        id="hero-title"
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        data-motion-content="true"
                        className={`font-display font-medium leading-[var(--leading-display)] text-foreground ${isCompact ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}`}
                    >
                        Nicholas <span className={isCompact ? "hero-wise hero-wise-compact" : "hero-wise hero-wise-full"}>Wise</span> Saragih Sumbayak
                    </motion.h1>

                    <motion.p
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        data-motion-content="true"
                        className={`${isCompact ? "mx-auto mt-4 text-base sm:text-lg md:text-xl" : "mt-6 text-lg sm:text-xl md:text-2xl"} max-w-2xl leading-relaxed text-foreground/80`}
                    >
                        I build scalable software infrastructure and make the
                        most out of every opportunity.
                    </motion.p>

                    <motion.p
                        custom={0.3}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        data-motion-content="true"
                        className={`${isCompact ? "mx-auto mt-3 max-w-xl text-sm sm:text-base" : "mt-4 max-w-2xl text-base sm:text-lg"} leading-relaxed text-muted`}
                    >
                        From full-stack webapps and algorithmic solvers to
                        distributed systems and event-driven architectures, I
                        love being a jack of all trades; a generalist, if you
                        will.
                    </motion.p>

                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        data-motion-content="true"
                        className={`${isCompact ? "mt-7 justify-center gap-3" : "mt-10 gap-4"} flex flex-wrap items-center`}
                    >
                        <Button
                            asChild
                            className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
                        >
                            <a href="#projects">
                                View selected work
                                <ArrowDown className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            className="border-border bg-transparent text-foreground hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
                        >
                            <Link href="/CV_Nicholas_Wise.pdf" download>
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {!isCompact && (
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={entrance}
                        data-motion-content="true"
                        data-portrait="full-only"
                        className="flex justify-center"
                    >
                        <Image
                            src="/me.png"
                            alt="Portrait of Nicholas Wise Saragih Sumbayak"
                            width={500}
                            height={625}
                            priority
                            unoptimized
                            sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 384px"
                            className="h-64 w-52 rounded-xl border-2 border-accent/30 object-cover shadow-xl motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-[1.02] sm:h-80 sm:w-64 lg:h-120 lg:w-96"
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
}
