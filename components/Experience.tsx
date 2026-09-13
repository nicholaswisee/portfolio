"use client";

import { experienceGroups } from "@/content/portfolio";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Experience() {
    const { density } = usePortfolioPreferences();
    const isCompact = density === "compact";

    return (
        <section
            id="experience"
            className="section-block bg-elevated"
            aria-labelledby="experience-title"
            data-section="experience"
            data-experience-layout={isCompact ? "compact" : "full"}
        >
            <div className="site-container">
                <div className={isCompact ? "mb-8" : "mb-10 md:mb-14"}>
                    <h2 id="experience-title" className="section-title">
                        Experience
                    </h2>
                    <p className="mt-4 max-w-2xl text-muted">
                        Roles in engineering teams and student organizations.
                    </p>
                </div>

                <ol className={isCompact ? "space-y-2" : "space-y-3"}>
                    {experienceGroups.map((group) => (
                        <li key={group.organization}>
                            <article
                                data-experience-group="true"
                                className={`grid gap-4 rounded-xl border border-border bg-surface ${isCompact ? "p-3 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]" : "p-5 sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]"}`}
                            >
                                <h3 className="font-display text-lg font-medium text-foreground">
                                    {group.organization}
                                </h3>
                                <div className="min-w-0">
                                    <ul className={isCompact ? "space-y-1" : "space-y-2"}>
                                        {group.roles.map((role) => (
                                            <li
                                                key={`${role.title}-${role.dates}`}
                                                data-experience-role="true"
                                                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm"
                                            >
                                                <span className="font-medium text-foreground">
                                                    {role.title}
                                                </span>
                                                <time className="text-muted">
                                                    {role.dates}
                                                </time>
                                            </li>
                                        ))}
                                    </ul>
                                    {group.metrics && (
                                        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Approved metrics">
                                            {group.metrics.map((metric) => (
                                                <li
                                                    key={metric}
                                                    className="rounded-md border border-border bg-elevated px-2 py-1 text-xs text-foreground/80"
                                                >
                                                    {metric}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
