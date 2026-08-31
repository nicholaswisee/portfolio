"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download, Github, Mail } from "lucide-react";
import { useState } from "react";
import { techStackCategories } from "@/content/portfolio";

function TechIcon({ item }: { item: { name: string; icon?: string } }) {
    if (!item.icon) return null;

    return (
        <Image
            src={item.icon}
            alt=""
            width={24}
            height={24}
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
        />
    );
}

function MarqueeStrip({
    category,
    categoryIndex,
    isPaused,
}: {
    category: (typeof techStackCategories)[number];
    categoryIndex: number;
    isPaused: boolean;
}) {
    const prefersReducedMotion = useReducedMotion();
    const splitAt = Math.ceil(category.items.length / 2);
    const lanes =
        category.items.length > 10
            ? [category.items.slice(0, splitAt), category.items.slice(splitAt)]
            : [category.items];
    const precedingLaneCount = techStackCategories
        .slice(0, categoryIndex)
        .reduce(
            (count, previousCategory) =>
                count + (previousCategory.items.length > 10 ? 2 : 1),
            0,
        );

    return (
        <div className="space-y-1.5" data-stack={category.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-paper-mist/60">
                {category.title}
            </p>
            {lanes.map((lane, laneIndex) => {
                const movesRight = (precedingLaneCount + laneIndex) % 2 === 1;
                const doubled = [...lane, ...lane];
                return (
                    <div
                        key={`${category.title}-${laneIndex}`}
                        className="marquee-viewport"
                        data-stack-row="true"
                        data-stack-direction={movesRight ? "right" : "left"}
                    >
                        <div
                            className={`marquee-track ${movesRight ? "marquee-track--reverse" : ""}`}
                            style={
                                prefersReducedMotion || isPaused
                                    ? { animation: "none" }
                                    : undefined
                            }
                        >
                            {doubled.map((item, i) => (
                                <span
                                    key={`${item.name}-${i}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-paper-mist/10 bg-archive-ink/50 px-3 py-1.5 text-xs text-paper-mist/80"
                                    aria-hidden={
                                        i >= lane.length ? "true" : undefined
                                    }
                                    data-skill-fallback={
                                        item.icon ? undefined : "text"
                                    }
                                >
                                    <TechIcon item={item} />
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function AboutSkills() {
    const prefersReducedMotion = useReducedMotion();
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section
            id="about"
            className="section-block bg-research-field"
            aria-labelledby="about-title"
            data-about-layout="merged"
        >
            <div className="site-container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, x: -30 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="min-w-0"
                    >
                        <h2 id="about-title" className="section-title mb-5">
                            About
                        </h2>
                        <div className="space-y-3 leading-relaxed text-paper-mist/80">
                            <p>
                                ITB Informatics Junior focused on scalable
                                software infrastructure, event-driven
                                architectures, and distributed systems. I've
                                always been intrigued by how large scale systems
                                impact globally.
                            </p>
                            <p>
                                I ship production platforms, design
                                user-friendly products, and build systems from
                                the ground up — from database schema and API
                                design to distributed architecture.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-paper-mist/15 bg-transparent text-paper-mist hover:bg-paper-mist/10"
                            >
                                <a href="https://github.com/nicholaswisee">
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-paper-mist/15 bg-transparent text-paper-mist hover:bg-paper-mist/10"
                            >
                                <a href="mailto:nicholasaragih@gmail.com">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-oxidized-teal/40 bg-transparent text-paper-mist hover:bg-oxidized-teal/10"
                            >
                                <Link href="/CV_Nicholas_Wise.pdf" download>
                                    Download CV
                                    <Download className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, x: 30 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="min-w-0"
                    >
                        <p className="section-eyebrow mb-3">Capabilities</p>
                        <button
                            type="button"
                            onClick={() => setIsPaused((paused) => !paused)}
                            aria-pressed={isPaused}
                            data-marquee-toggle="true"
                            className="mb-3 text-xs font-medium text-paper-mist/60 underline decoration-paper-mist/20 underline-offset-4 hover:text-paper-mist"
                        >
                            {isPaused
                                ? "Resume tech motion"
                                : "Pause tech motion"}
                        </button>
                        <div className="space-y-4 section-rule pt-6">
                            {techStackCategories.map((cat, index) => (
                                <MarqueeStrip
                                    key={cat.title}
                                    category={cat}
                                    categoryIndex={index}
                                    isPaused={isPaused}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
