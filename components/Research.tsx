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

                <div className={isCompact ? "space-y-3" : "space-y-5"}>
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
                            className={`rounded-xl border border-border bg-surface ${isCompact ? "p-4" : "p-6 sm:p-8"}`}
                        >
                            <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">
                                {item.title}
                            </h3>

                            <dl className={isCompact ? "mt-4 space-y-3" : "mt-5 space-y-4"}>
                                <div>
                                    <dt className="section-eyebrow">Context</dt>
                                    <dd className="mt-1 text-sm text-muted">
                                        {item.context}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="section-eyebrow">Problem</dt>
                                    <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                                        {item.problem}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="section-eyebrow">Method</dt>
                                    <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                                        {item.method}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="section-eyebrow">Result</dt>
                                    <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                                        {item.result}
                                    </dd>
                                </div>
                                {item.qualifier && (
                                    <div>
                                        <dt className="section-eyebrow">Qualifier</dt>
                                        <dd className="mt-1 text-sm leading-relaxed text-muted">
                                            {item.qualifier}
                                        </dd>
                                    </div>
                                )}
                            </dl>

                            {item.technologies.length > 0 && (
                                <ul
                                    className="mt-5 flex flex-wrap gap-2"
                                    aria-label="Technologies"
                                >
                                    {item.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-md border border-border bg-elevated px-2 py-1 text-xs text-foreground/80"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
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
