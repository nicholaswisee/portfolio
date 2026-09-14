"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { selectedWork, projectArchive } from "@/content/portfolio";
import { ChevronDown } from "lucide-react";
import { usePortfolioPreferences } from "./PortfolioPreferences";

const isExternalLink = (href: string) =>
    href.startsWith("https://") || href.startsWith("http://");

export default function Projects() {
    const prefersReducedMotion = useReducedMotion();
    const [archiveOpen, setArchiveOpen] = useState(false);
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";

    return (
        <section
            id="projects"
            className="section-block"
            aria-labelledby="projects-title"
            data-projects-layout={isCompact ? "compact" : "full"}
            data-section="projects"
        >
            <div className="site-container">
                <div className={isCompact ? "mb-8" : "mb-12 md:mb-16"}>
                    <h2 id="projects-title" className="section-title">
                        {isCompact ? "Projects" : "Featured work"}
                    </h2>
                    <p className="mt-4 max-w-2xl text-muted">
                        {isCompact
                            ? "Selected and prior work, kept as a concise record."
                            : "Three projects that define what I build: production platforms with real users, systems from the ground up, and a genuine approach to building user-centered products."}
                    </p>
                </div>

                {isCompact ? (
                    <ol className="compact-project-list">
                        {[...selectedWork, ...projectArchive].map((project) => (
                            <li
                                key={project.name}
                                data-compact-project-row="true"
                            >
                                <article className="compact-project-row">
                                    <div className="min-w-0">
                                        <h3 className="font-display text-lg font-medium text-foreground">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-muted">
                                            {project.category} · {project.role}
                                        </p>
                                    </div>
                                    <p className="text-sm leading-relaxed text-foreground/80">
                                        {project.outcome}
                                    </p>
                                    {project.links.length > 0 && (
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {project.links.map((link) => {
                                                const isExternal =
                                                    isExternalLink(link.href);

                                                return (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target={
                                                            isExternal
                                                                ? "_blank"
                                                                : undefined
                                                        }
                                                        rel={
                                                            isExternal
                                                                ? "noopener noreferrer"
                                                                : undefined
                                                        }
                                                        className="rounded-sm text-sm text-foreground/80 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                                    >
                                                        {link.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}
                                </article>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {selectedWork.map((project, idx) => (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: prefersReducedMotion
                                            ? 0
                                            : 0.5,
                                        delay: prefersReducedMotion
                                            ? 0
                                            : idx * 0.1,
                                    }}
                                    data-motion-content="true"
                                >
                                    <div data-featured="true">
                                        <ProjectCard project={project} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-14 md:mt-16">
                            <button
                                type="button"
                                onClick={() => setArchiveOpen((open) => !open)}
                                aria-expanded={archiveOpen}
                                aria-controls="project-archive"
                                className="group flex w-full items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 text-left transition-colors hover:border-foreground/30 hover:bg-elevated focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.99]"
                            >
                                <span className="font-display text-lg font-medium text-foreground sm:text-xl">
                                    Browse the project archive
                                </span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all group-hover:border-foreground/30 group-hover:text-foreground">
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-300 ${archiveOpen ? "rotate-180" : ""}`}
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>

                            <div
                                id="project-archive"
                                className="archive-panel"
                                aria-hidden={!archiveOpen}
                                inert={!archiveOpen}
                            >
                                <div className="archive-panel-inner">
                                    <div className="archive-panel-body pt-5">
                                        <ul className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
                                            {projectArchive.map((project) => {
                                                return (
                                                    <li
                                                        key={project.name}
                                                        data-archive="true"
                                                        className="flex flex-col border-b border-border py-4 pr-4 last:border-b-0 focus-within:bg-elevated/50"
                                                    >
                                                        <div className="min-w-0">
                                                            <p className="font-display text-base font-medium text-foreground">
                                                                {project.name}
                                                            </p>
                                                            <p className="text-xs text-muted">
                                                                {
                                                                    project.category
                                                                }{" "}
                                                                · {project.role}
                                                            </p>
                                                        </div>

                                                        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/75">
                                                            {project.outcome}
                                                        </p>

                                                        {project.links.length >
                                                            0 && (
                                                            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                                                                {project.links.map(
                                                                    (link) => {
                                                                        const isExternal =
                                                                            isExternalLink(
                                                                                link.href,
                                                                            );
                                                                        return (
                                                                            <a
                                                                                key={
                                                                                    link.label
                                                                                }
                                                                                href={
                                                                                    link.href
                                                                                }
                                                                                target={
                                                                                    isExternal
                                                                                        ? "_blank"
                                                                                        : undefined
                                                                                }
                                                                                rel={
                                                                                    isExternal
                                                                                        ? "noopener noreferrer"
                                                                                        : undefined
                                                                                }
                                                                                className="rounded-sm text-xs text-foreground/80 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                                                            >
                                                                                {
                                                                                    link.label
                                                                                }
                                                                            </a>
                                                                        );
                                                                    },
                                                                )}
                                                            </div>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
