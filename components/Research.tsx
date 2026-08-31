"use client";

import { motion, useReducedMotion } from "motion/react";
import { researchItems } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";

export default function Research() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="research"
            className="section-block bg-research-field"
            aria-labelledby="research-title"
            data-research-layout="text-only"
        >
            <div className="site-container">
                <div className="mb-10 md:mb-14">
                    <h2 id="research-title" className="section-title">
                        Research
                    </h2>
                    <p className="mt-4 max-w-2xl text-paper-mist/70">
                        Course papers and experiments that taught me to state
                        assumptions clearly and qualify results honestly.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-16">
                    {researchItems.map((item, idx) => (
                        <motion.article
                            key={item.title}
                            initial={
                                prefersReducedMotion
                                    ? { opacity: 1 }
                                    : { opacity: 0, y: 24 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="rounded-xl border border-paper-mist/10 bg-slate-field p-6 sm:p-8 md:p-10"
                        >
                            <p className="text-sm text-paper-mist/60">
                                {item.context}
                            </p>
                            <h3 className="mt-2 font-display text-xl font-medium text-paper-mist sm:text-2xl md:text-3xl">
                                {item.title}
                            </h3>

                            <dl className="mt-5 space-y-3">
                                <div>
                                    <dt className="section-eyebrow">
                                        Problem
                                    </dt>
                                    <dd className="mt-1 text-paper-mist/80">
                                        {item.problem}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="section-eyebrow">
                                        Method
                                    </dt>
                                    <dd className="mt-1 text-paper-mist/80">
                                        {item.method}
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="bg-archive-ink/70 text-xs font-normal text-paper-mist/80"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-4">
                                {item.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={
                                            link.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            link.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="text-sm text-paper-mist/80 hover:text-paper-mist hover:underline"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
