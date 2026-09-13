"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WorkItem } from "@/types/types";
import { ExternalLink, Github } from "lucide-react";

const isExternalLink = (href: string) =>
  href.startsWith("https://") || href.startsWith("http://");

export default function ProjectCard({ project }: { project: WorkItem }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border bg-surface transition-colors hover:border-foreground/30 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-elevated">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-elevated text-muted">
            <span className="font-display text-xl italic">{project.name}</span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <p className="section-eyebrow mb-2">{project.category}</p>
        <CardTitle className="font-display text-2xl font-medium text-foreground">
          {project.name}
        </CardTitle>
        <p className="mt-1 text-sm text-muted">{project.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
          {project.outcome}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-elevated text-xs font-normal text-foreground/80 hover:bg-elevated"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links.length > 0 && (
        <CardFooter className="flex flex-wrap gap-3 border-t border-border p-5 pt-4">
          {project.links.map((link) => {
            const isExternal = isExternalLink(link.href);
            const Icon = link.href.includes("github") ? Github : ExternalLink;
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 rounded-sm text-sm text-foreground/80 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 motion-safe:active:scale-[0.98]"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </CardFooter>
      )}
    </Card>
  );
}
