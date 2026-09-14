"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { lifeExperiences } from "@/content/portfolio";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function LifeExperiences() {
    const prefersReducedMotion = useReducedMotion();
    const { density } = usePortfolioPreferences();

    if (density === "compact") return null;

    return (
        <section
            id="life"
            className="section-block"
            aria-labelledby="life-title"
            data-section="life"
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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                delay: prefersReducedMotion ? 0 : idx * 0.1,
                            }}
                            className="life-collage-item group relative overflow-hidden rounded-xl bg-slate-field"
                            data-motion-content="true"
                        >
                             <Image
                                src={item.image}
                                alt={item.imageAlt}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="life-collage-image object-cover"
                            />
                            <div className="life-collage-overlay absolute inset-0" aria-hidden="true" />
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
