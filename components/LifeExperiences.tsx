"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { lifeExperiences } from "@/content/portfolio";

export default function LifeExperiences() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="life"
            className="section-block"
            aria-labelledby="life-title"
        >
            <div className="site-container">
                <div className="mb-10 md:mb-14">
                    <h2 id="life-title" className="section-title">
                        Away from compute
                    </h2>
                    <p className="mt-4 max-w-2xl text-paper-mist/70">
                        "What is the Earth without art? Just a rock."
                    </p>
                </div>

                <div className="life-collage">
                    {lifeExperiences.map((item, idx) => (
                        <motion.figure
                            key={item.image}
                            data-life="figure"
                            style={{ aspectRatio: item.aspectRatio ?? "4/3" }}
                            initial={
                                prefersReducedMotion
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: prefersReducedMotion ? 0 : idx * 0.1,
                            }}
                            className="life-collage-item group relative overflow-hidden rounded-lg bg-slate-field"
                        >
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="life-collage-image object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-archive-ink/80 via-archive-ink/20 to-transparent" />
                            <figcaption className="life-collage-caption absolute inset-x-0 bottom-0 p-4 md:p-5">
                                <p className="font-display text-lg leading-tight text-paper-mist md:text-xl">
                                    {item.title}
                                </p>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
