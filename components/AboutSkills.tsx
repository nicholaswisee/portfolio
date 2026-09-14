"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { usePortfolioPreferences } from "./PortfolioPreferences";
import { techStackCategories } from "@/content/portfolio";

export default function AboutSkills() {
    const prefersReducedMotion = useReducedMotion();
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";
    const [lanesPaused, setLanesPaused] = useState(false);

    return (
        <section
            id="about"
            data-section="about"
            className="section-block bg-elevated"
            aria-labelledby="about-title"
            data-density-presentation={isCompact ? "compact" : "full"}
            data-layout="full-width"
        >
            <div className="site-container">
                <div className={isCompact ? "space-y-8" : "space-y-12 md:space-y-16"}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                        data-motion-content="true"
                        className="min-w-0"
                    >
                        <h2 id="about-title" className="section-title mb-5">
                            About
                        </h2>
                        <div className={`${isCompact ? "space-y-2 text-sm" : "space-y-3"} leading-relaxed text-foreground/80`}>
                            <p>
                                ITB Informatics Junior focused on scalable
                                software infrastructure, event-driven
                                architectures, and distributed systems. I&apos;ve
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

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                        data-motion-content="true"
                        className="min-w-0"
                    >
                        <div className={`${isCompact ? "mb-2" : "mb-3 flex items-center justify-between gap-4"}`}>
                            <p className="section-eyebrow">Technology stack</p>
                            {!isCompact && (
                                <button
                                    type="button"
                                    data-tech-lanes-control="true"
                                    aria-pressed={lanesPaused}
                                    onClick={() => setLanesPaused((paused) => !paused)}
                                    className="rounded-sm text-sm text-foreground/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                >
                                    {lanesPaused
                                        ? "Resume technology lanes"
                                        : "Pause technology lanes"}
                                </button>
                            )}
                        </div>
                        <div className={`${isCompact ? "space-y-3 pt-4" : "space-y-5 pt-6"} section-rule`}>
                            {techStackCategories.map((category) => (
                                <section key={category.title} data-stack={category.title} data-layout="full-width">
                                    <h3 className="text-sm font-medium text-foreground">
                                        {category.title}
                                    </h3>
                                    {isCompact ? (
                                        <ul className="mt-2 flex flex-wrap gap-2">
                                            {category.items.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
                                                    data-skill-fallback={item.icon ? undefined : "text"}
                                                >
                                                    {item.icon && <Image src={item.icon} alt="" width={18} height={18} data-tech-icon="true" />}
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div
                                            className="tech-lane-viewport mt-3"
                                            data-tech-lanes="moving"
                                            data-lane-paused={lanesPaused ? "true" : undefined}
                                        >
                                            <div className="tech-lane-track">
                                                <ul className="tech-lane-group">
                                                    {category.items.map((item) => (
                                                        <li
                                                            key={item.name}
                                                            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
                                                            data-skill-fallback={item.icon ? undefined : "text"}
                                                        >
                                                            {item.icon && <Image src={item.icon} alt="" width={18} height={18} data-tech-icon="true" />}
                                                            {item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="tech-lane-group tech-lane-duplicate" aria-hidden="true">
                                                    {category.items.map((item) => (
                                                    <li
                                                        key={item.name}
                                                        className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground"
                                                        data-skill-fallback={item.icon ? undefined : "text"}
                                                    >
                                                        {item.icon && <Image src={item.icon} alt="" width={18} height={18} data-tech-icon="true" />}
                                                        {item.name}
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
