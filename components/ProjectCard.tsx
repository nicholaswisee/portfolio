"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WorkItem } from "@/types/types";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: WorkItem }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-paper-mist/10 bg-slate-field transition-colors hover:border-paper-mist/20">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-archive-ink">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt || project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-field text-paper-mist/40">
            <span className="font-display text-xl italic">{project.name}</span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <p className="section-eyebrow mb-2">{project.category}</p>
        <CardTitle className="font-display text-2xl font-medium text-paper-mist">
          {project.name}
        </CardTitle>
        <p className="mt-1 text-sm text-annotation-amber">{project.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-mist/75">
          {project.outcome}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-archive-ink/70 text-xs font-normal text-paper-mist/80 hover:bg-archive-ink"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {project.links.length > 0 && (
        <CardFooter className="flex flex-wrap gap-3 border-t border-paper-mist/10 p-5 pt-4">
          {project.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const Icon = link.href.includes("github") ? Github : ExternalLink;
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-sm text-oxidized-teal hover:text-paper-mist hover:underline"
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
