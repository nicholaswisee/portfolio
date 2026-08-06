"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { selectedWork, projectArchive } from "@/content/portfolio";
import { ExternalLink, Github, FolderOpen, ChevronDown } from "lucide-react";

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

export default function Projects() {
    const prefersReducedMotion = useReducedMotion();
    const [archiveOpen, setArchiveOpen] = useState(false);

    return (
        <section
            id="work"
            className="section-block"
            aria-labelledby="work-title"
        >
            <div className="site-container">
                <div className="mb-10 md:mb-14">
                    <h2 id="work-title" className="section-title">
                        Featured work
                    </h2>
                    <p className="mt-4 max-w-2xl text-paper-mist/70">
                        Three projects that define what I build: production
                        platforms with real users, systems from the ground up,
                        and a genuine approach to building efficient systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedWork.map((project, idx) => (
                        <motion.div
                            key={project.name}
                            initial={
                                prefersReducedMotion
                                    ? { opacity: 1 }
                                    : { opacity: 0, y: 30 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                        className="group flex w-full items-center justify-between rounded-lg border border-paper-mist/10 bg-slate-field px-5 py-4 text-left transition-colors hover:border-paper-mist/20 hover:bg-slate-field/80"
                    >
                        <span className="font-display text-lg font-medium text-paper-mist sm:text-xl">
                            Browse the project archive
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper-mist/10 text-paper-mist/60 transition-all group-hover:border-paper-mist/20 group-hover:text-paper-mist">
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
                    >
                        <div className="archive-panel-inner">
                            <div className="archive-panel-body pt-5">
                                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {projectArchive.map((project) => {
                                        const CatIcon =
                                            CATEGORY_ICONS[project.category] ??
                                            FolderOpen;
                                        return (
                                            <li
                                                key={project.name}
                                                data-archive="true"
                                                className="flex flex-col rounded-lg border border-paper-mist/10 bg-slate-field/60 p-5 transition-colors hover:border-paper-mist/20 hover:bg-slate-field"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper-mist/10 text-oxidized-teal/70">
                                                        <CatIcon
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="font-display text-base font-medium text-paper-mist">
                                                            {project.name}
                                                        </p>
                                                        <p className="text-xs text-paper-mist/50">
                                                            {project.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-paper-mist/70">
                                                    {project.outcome}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {project.technologies
                                                        .slice(0, 4)
                                                        .map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="rounded bg-archive-ink/70 px-1.5 py-0.5 text-[11px] text-paper-mist/70"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                </div>

                                                {project.links.length > 0 && (
                                                    <div className="mt-4 flex flex-wrap gap-3 border-t border-paper-mist/10 pt-3">
                                                        {project.links.map(
                                                            (link) => {
                                                                const isExternal =
                                                                    link.href.startsWith(
                                                                        "http",
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
                                                                        className="inline-flex items-center gap-1 text-xs text-oxidized-teal transition-colors hover:text-paper-mist"
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
