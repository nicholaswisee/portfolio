"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import ProjectCard from "./ProjectCard";
import { BadgeItem, Project } from "@/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS_PER_PAGE = 6;

const projects: Project[] = [
    {
        name: "TEDxITB 9.0",
        description:
            "Official web application for TEDxITB 9.0 — ticket sales, merchandise store, event content, attendance tracking, and admin order management with QR check-in.",
        url: "https://tedxitb.id",
        image: "/tedx.png",
        github: "https://github.com/nicholaswisee/tedxitb-9-0-app",
        badges: [
            { name: "Next.js", icon: "/nextjs-original.svg" },
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
            { name: "DrizzleORM", icon: "/drizzle-orm.webp" },
            { name: "PostgreSQL", icon: "/postgresql-original.svg" },
        ],
    },
    {
        name: "INFEST 2025",
        description:
            "The largest Investment Festival held by KSEP ITB for Indonesia.",
        url: "https://www.infestbdg.com",
        image: "/infest.png",
        github: "https://github.com/nicholaswisee/infest-2025",
        badges: [
            { name: "Next.js", icon: "/nextjs-original.svg" },
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
            { name: "Supabase", icon: "/supabase-original.svg" },
        ],
    },
    {
        name: "Lokasharana",
        description: "A photo gallery for FSRD 2024's graduation ceremony.",
        url: "https://www.lokasharana.com",
        image: "/lokasharana.png",
        github: "https://github.com/nicholaswisee/FSRD-2024-Web-Gallery",
        badges: [
            { name: "Next.js", icon: "/nextjs-original.svg" },
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "TailwindCSS", icon: "/tailwindcss-original.svg" },
            { name: "Cloudflare", icon: "/cloudflare-original.svg" },
        ],
    },
    {
        name: "DOM Vector",
        description:
            "A web-based DOM tree visualization and traversal tool with animated BFS/DFS playback, CSS selector matching, and LCA via binary lifting.",
        url: "http://103.150.227.154:21231",
        github: "https://github.com/nicholaswisee/Tubes2_TimsesDewaPetir",
        image: "/dom.png",
        badges: [
            { name: "Go", icon: "/go-original.svg" },
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "React", icon: "/react-original.svg" },
            { name: "Gin", icon: "/gin.png" },
        ],
    },
    {
        name: "Mjolnir",
        image: "/mjolnir.png",
        description:
            "A digital library system with image-based (PCA) and text-based (LSA) book recommendation, built with a Go backend and React frontend.",
        gradient:
            "linear-gradient(135deg, #1e3a5f 0%, #4a90d9 50%, #c0c0c0 100%)",
        github: "https://github.com/nicholaswisee/algeo2-mjolnir",
        badges: [
            { name: "Go", icon: "/go-original.svg" },
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "React", icon: "/react-original.svg" },
        ],
    },
    {
        name: "Tabung",
        image: "/tabung.png",
        description:
            "A desktop personal finance tracker with authentication, transaction management, budgeting, and financial reports.",
        gradient:
            "linear-gradient(135deg, #065f46 0%, #10b981 50%, #6ee7b7 100%)",
        github: "https://github.com/nicholaswisee/IF2150-2025-K01-G11-Tabung",
        badges: [{ name: "Python", icon: "/python-original.svg" }],
    },
    {
        name: "Blueddit",
        image: "/blueddit.png",
        description:
            "A CLI-based Reddit-inspired application with subgroddits, posts, comments, voting, trending, and content moderation.",
        github: "https://github.com/nicholaswisee/Tugas-Besar-IF2110-K01-G",
        gradient:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        badges: [{ name: "C", icon: "/c-original.svg" }],
    },
    {
        name: "TempleOS",
        image: "/templeos.png",
        description:
            "A 32-bit x86 operating system built from scratch with protected mode, paging, multitasking, EXT2 filesystem, and a shell interface.",
        gradient:
            "linear-gradient(135deg, #f5e6cc 0%, #e8a87c 50%, #d45d79 100%)",
        github: "https://github.com/nicholaswisee/TempleOS",
        badges: [{ name: "C", icon: "/c-original.svg" }],
    },
    {
        name: "Nimons Hospital",
        description:
            "A CLI-based hospital system simulator with fundamental data structure implementations.",
        github: "https://github.com/nicholaswisee/Tubes-Alpro-1",
        image: "/hospitalwebp.webp",
        badges: [{ name: "C", icon: "/c-original.svg" }],
    },
    {
        name: "3D Voxelization Engine",
        image: "/voxelizer.png",
        description:
            "Octree-based 3D model voxelization engine with concurrent construction, an interactive viewer, and .obj file support.",
        gradient:
            "linear-gradient(135deg, #00b4d8 0%, #0077b6 50%, #023e8a 100%)",
        github: "https://github.com/nicholaswisee/Tucil2_13524027_13524037",
        badges: [{ name: "Go", icon: "/go-original.svg" }],
    },
    {
        name: "Matrix Calculator",
        image: "/calculator.png",
        description:
            "A linear algebra calculator with JavaFX GUI — SPL, determinants, inverses, interpolation, and polynomial regression.",
        gradient:
            "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)",
        github: "https://github.com/nicholaswisee/matrix-calculator",
        badges: [
            { name: "Java", icon: "/java.svg" },
            { name: "Gradle", icon: "/gradle-original.svg" },
        ],
    },
    {
        name: "M/M/1 Markov Chain Analysis",
        image: "/markov.png",
        description:
            "Analysis of steady-state behavior in M/M/1 server queues using Continuous-Time Markov Chains, generator matrices, and discrete-event simulation.",
        github: "https://github.com/nicholaswisee/makalah-algeo",
        badges: [
            { name: "C++", icon: "/cplusplus-original.svg" },
            { name: "Python", icon: "/python-original.svg" },
        ],
    },
    {
        name: "LinkedIn Queens Solver",
        image: "/queens.png",
        description:
            "A brute-force solver for the LinkedIn Queens puzzle with an interactive JavaFX GUI, supporting file I/O and step visualization.",
        gradient:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
        github: "https://github.com/nicholaswisee/Tucil1_13524037",
        badges: [
            { name: "Java", icon: "/java.svg" },
            { name: "Maven", icon: "/maven.svg" },
        ],
    },
];

const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentProjects = projects.slice(
        (currentPage - 1) * PROJECTS_PER_PAGE,
        currentPage * PROJECTS_PER_PAGE,
    );

    return (
        <motion.div
            className="mx-auto px-2 sm:px-6 lg:px-8"
            id="Projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <Card className="p-6 sm:p-8 md:p-10 lg:p-12 mb-8 h-full flex flex-col justify-center items-center text-center card-hover-scale w-full">
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-glow"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Projects
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-muted-foreground -mt-3 sm:-mt-1 mb-6 sm:mb-8 text-balance max-w-4xl leading-relaxed px-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Here&apos;s a bunch of my recent projects!
                    </motion.p>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            {currentProjects.map((project, index) => (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="h-full min-h-[430px]"
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    {totalPages > 1 && (
                        <motion.div
                            className="flex items-center gap-2 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <button
                                onClick={() =>
                                    setCurrentPage((p) => Math.max(1, p - 1))
                                }
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1,
                            ).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-lg transition-colors duration-200 text-sm font-medium ${
                                        currentPage === page
                                            ? "bg-accent text-accent-foreground"
                                            : "hover:bg-accent/50 text-muted-foreground"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() =>
                                    setCurrentPage((p) =>
                                        Math.min(totalPages, p + 1),
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </motion.div>
                    )}
                </Card>
            </motion.div>
        </motion.div>
    );
}
