"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Download, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { usePortfolioPreferences } from "./PortfolioPreferences";
import {
    capabilityGroups,
    credentialItems,
    educationItems,
    techStackCategories,
    toolbox,
} from "@/content/portfolio";
import type { TechStackItem } from "@/types/types";

function TechIcon({ item }: { item: TechStackItem }) {
    if (!item.icon) return null;

    return (
        <Image
            src={item.icon}
            alt=""
            width={24}
            height={24}
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
        />
    );
}

export default function AboutSkills() {
    const prefersReducedMotion = useReducedMotion();
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";

    return (
        <section
            id="about"
            data-section="about"
            className="section-block bg-elevated"
            aria-labelledby="about-title"
            data-about-layout="about-with-evidence"
            data-density-presentation={isCompact ? "compact" : "full"}
        >
            <div className="site-container">
                <div className={`grid grid-cols-1 ${isCompact ? "gap-6 lg:gap-8" : "gap-10 lg:gap-12"} lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
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

                        <ul className={`${isCompact ? "mt-5 space-y-2" : "mt-7 space-y-3"}`}>
                            {capabilityGroups.map((group) => (
                                <li
                                    key={group.title}
                                    data-capability-group={group.title}
                                    className={`rounded-lg border border-border bg-surface ${isCompact ? "p-3" : "p-4"}`}
                                >
                                    <div className="flex items-baseline justify-between gap-3">
                                        <h3 className="font-medium text-foreground">
                                            {group.title}
                                        </h3>
                                        <a
                                            href={group.evidenceHref}
                                            className="shrink-0 text-xs text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                        >
                                            Evidence
                                        </a>
                                    </div>
                                    <p className="mt-1 text-sm text-muted">
                                        {group.description}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <div className={`${isCompact ? "mt-4 gap-2" : "mt-6 gap-2.5"} flex flex-wrap`}>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-border bg-transparent text-foreground hover:bg-surface"
                            >
                                <a
                                    href="https://github.com/nicholaswisee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-border bg-transparent text-foreground hover:bg-surface"
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
                                className="border-accent/40 bg-transparent text-foreground hover:bg-accent/10"
                            >
                                <Link href="/CV_Nicholas_Wise.pdf" download>
                                    Download CV
                                    <Download className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className={`${isCompact ? "mt-6 space-y-4 pt-4" : "mt-10 space-y-6 pt-6"} section-rule`}>
                            <div data-education-block="true">
                                <p className="section-eyebrow">Education</p>
                                <dl className={`${isCompact ? "mt-2 space-y-2" : "mt-3 space-y-3"}`}>
                                    {educationItems.map((item) => (
                                        <div
                                            key={item.institution}
                                            className={`rounded-lg border border-border bg-surface ${isCompact ? "p-3" : "p-4"}`}
                                            data-education-record="true"
                                        >
                                            <dt className="font-medium text-foreground">
                                                {item.institution}
                                            </dt>
                                            <dd className="mt-1 text-sm text-muted">
                                                {item.program} · {item.dates}
                                            </dd>
                                            <dd className="mt-1 text-sm text-foreground/80">
                                                {item.result}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div data-credentials-block="true">
                                <p className="section-eyebrow">Credentials</p>
                                <ul className={`${isCompact ? "mt-2 space-y-1" : "mt-3 space-y-2"}`}>
                                    {credentialItems.map((item) => (
                                        <li
                                            key={item.name}
                                            className="border-l-2 border-accent pl-3 text-sm text-foreground/80"
                                            data-credential-record="true"
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                        <p className={`${isCompact ? "mb-2" : "mb-3"} section-eyebrow`}>Technology stack</p>
                        <div className={`${isCompact ? "space-y-3 pt-4" : "space-y-5 pt-6"} section-rule`}>
                            {techStackCategories.map((category) => (
                                <section key={category.title} data-stack={category.title}>
                                    <h3 className="text-sm font-medium text-foreground">
                                        {category.title}
                                    </h3>
                                    <ul
                                        className={`${isCompact ? "mt-2 grid-cols-1 gap-1.5" : "mt-3 grid-cols-1 gap-2 sm:grid-cols-2"} grid`}
                                    >
                                        {category.items.map((item) => (
                                            <li
                                                key={item.name}
                                                className={`flex items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-foreground ${isCompact ? "py-1.5" : "py-2"}`}
                                                data-skill-fallback={
                                                    item.icon ? undefined : "text"
                                                }
                                            >
                                                <TechIcon item={item} />
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>

                        <section className={`${isCompact ? "mt-5 pt-4" : "mt-8 pt-6"} section-rule`} aria-labelledby="toolbox-title">
                            <h3 id="toolbox-title" className="section-eyebrow">
                                Toolbox
                            </h3>
                            <ul className={`${isCompact ? "mt-2 gap-1.5" : "mt-3 gap-2"} flex flex-wrap`} data-toolbox="static">
                                {toolbox.map((tool) => (
                                    <li
                                        key={tool}
                                        className="rounded-md border border-border bg-surface px-2 py-1 text-xs text-muted"
                                    >
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
