"use client";

import { motion, useReducedMotion } from "motion/react";
import { researchItems } from "@/content/portfolio";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Research() {
    const prefersReducedMotion = useReducedMotion();
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";

    return (
        <section
            id="research"
            className="section-block bg-elevated"
            aria-labelledby="research-title"
            data-section="research"
            data-research-layout="text-only"
            data-density-presentation={isCompact ? "compact" : "full"}
        >
            <div className="site-container">
                <div className={isCompact ? "mb-8" : "mb-10 md:mb-14"}>
                    <h2 id="research-title" className="section-title">
                        Research
                    </h2>
                    <p className="mt-4 max-w-2xl text-muted">
                        Course papers and experiments that taught me to state
                        assumptions clearly and qualify results honestly.
                    </p>
                </div>

                <div className={isCompact ? "compact-research-list" : "space-y-0"}>
                    {researchItems.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.4,
                                delay: prefersReducedMotion ? 0 : index * 0.08,
                            }}
                            data-motion-content="true"
                            className={isCompact ? "compact-research-row" : "border-b border-border py-6 first:pt-0 last:border-b-0 sm:py-8"}
                        >
                            <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                                {item.title}
                            </h3>

                            <p data-research-summary="true" className="mt-3 max-w-4xl text-sm leading-relaxed text-foreground/80">
                                {item.summary}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                                {item.links.map((link) => {
                                    const isExternal = link.href.startsWith("http");

                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            className="rounded-sm text-sm text-foreground/80 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
