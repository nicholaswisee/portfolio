"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { selectedWork, projectArchive } from "@/content/portfolio";
import { ExternalLink, Github, FolderOpen, ChevronDown } from "lucide-react";
import { usePortfolioPreferences } from "./PortfolioPreferences";

const CATEGORY_ICONS: Record<string, typeof FolderOpen> = {
    "Event Platform": FolderOpen,
    "Enterprise ERP": FolderOpen,
    "Visualization Tool": FolderOpen,
    "Recommendation System": FolderOpen,
    "Web Gallery": FolderOpen,
    "Desktop App": FolderOpen,
    "CLI Application": FolderOpen,
    "Graphics Engine": FolderOpen,
};

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
                <div className="mb-12 md:mb-16">
                    <h2 id="projects-title" className="section-title">
                        Featured work
                    </h2>
                    <p className="mt-4 max-w-2xl text-muted">
                        Three projects that define what I build: production
                        platforms with real users, systems from the ground up,
                        and a genuine approach to building efficient systems.
                    </p>
                </div>

                <div className={isCompact ? "space-y-3" : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
                    {selectedWork.map((project, idx) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.5,
                                delay: prefersReducedMotion ? 0 : idx * 0.1,
                            }}
                            data-motion-content="true"
                        >
                            <div
                                data-featured="true"
                                data-compact-project-row={isCompact ? "true" : undefined}
                            >
                                {isCompact ? (
                                    <article className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30">
                                        <div className="min-w-0">
                                            <p className="font-display text-lg font-medium text-foreground">
                                                {project.name}
                                            </p>
                                            <p className="text-sm text-muted">
                                                {project.category} · {project.role}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {project.links.map((link) => {
                                                const isExternal = isExternalLink(link.href);

                                                return (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target={isExternal ? "_blank" : undefined}
                                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                                        className="rounded-sm text-sm text-foreground/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                                    >
                                                        {link.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </article>
                                ) : (
                                    <ProjectCard project={project} />
                                )}
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
                                <ul className={`grid grid-cols-1 gap-4 ${isCompact ? "sm:grid-cols-1 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                                    {projectArchive.map((project) => {
                                        const CatIcon =
                                            CATEGORY_ICONS[project.category] ??
                                            FolderOpen;
                                        return (
                                            <li
                                                key={project.name}
                                                data-archive="true"
                                                className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-foreground/30 hover:bg-elevated focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                                                        <CatIcon
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="font-display text-base font-medium text-foreground">
                                                            {project.name}
                                                        </p>
                                                        <p className="text-xs text-muted">
                                                            {project.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-foreground/75">
                                                    {project.outcome}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {project.technologies
                                                        .slice(0, 4)
                                                        .map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="rounded bg-elevated px-1.5 py-0.5 text-[11px] text-muted"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                </div>

                                                {project.links.length > 0 && (
                                                    <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-3">
                                                        {project.links.map(
                                                            (link) => {
                                                                const isExternal =
                                                                    isExternalLink(
                                                                        link.href,
                                                                    );
                                                                const Icon =
                                                                    link.href.includes(
                                                                        "github",
                                                                    )
                                                                        ? Github
                                                                        : ExternalLink;
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
                                                                        className="inline-flex items-center gap-1 rounded-sm text-xs text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
                                                                    >
                                                                        <Icon className="h-3.5 w-3.5" />
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
            </div>
        </section>
    );
}
