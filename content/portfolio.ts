import {
    CapabilityGroup,
    LifeExperience,
    PortfolioLink,
    ResearchItem,
    TechStackCategory,
    WorkItem,
} from "@/types/types";

// ── Categorized Tech Stack ──────────────────────────────────────────
export const techStackCategories: TechStackCategory[] = [
    {
        title: "Core Languages",
        items: [
            { name: "TypeScript", icon: "/typescript-original.svg" },
            { name: "JavaScript", icon: "/javascript-original.svg" },
            { name: "Go", icon: "/go-original.svg" },
            { name: "Python", icon: "/python-original.svg" },
            { name: "C", icon: "/c-original.svg" },
            { name: "C++", icon: "/cplusplus-original.svg" },
            { name: "Java", icon: "/java.svg" },
            { name: "C# / .NET", icon: "/csharp-original.svg" },
            { name: "Haskell", icon: "/haskell.svg" },
        ],
    },
    {
        title: "Frontend Development",
        items: [
            { name: "React", icon: "/react-original.svg" },
            { name: "Next.js", icon: "/nextjs-original.svg" },
            { name: "Tailwind CSS", icon: "/tailwindcss-original.svg" },
            { name: "Vite", icon: "/vitejs-original.svg" },
            { name: "HTML5", icon: "/html5-original.svg" },
            { name: "CSS3", icon: "/css3-original.svg" },
            { name: "React Query", icon: "/react-query.webp" },
            { name: "Zustand", icon: "/zustand.svg" },
            { name: "Motion", icon: "/motion.svg" },
            { name: "Zod", icon: "/zod.png" },
            { name: "Figma", icon: "/figma-original.svg" },
        ],
    },
    {
        title: "Backend and Databases",
        items: [
            { name: "Node.js", icon: "/nodejs-original.svg" },
            { name: "Bun", icon: "/bun-original.svg" },
            { name: "Express", icon: "/express-original.svg" },
            { name: "Hono", icon: "/hono.svg" },
            { name: "FastAPI", icon: "/fastapi.svg" },
            { name: "Django", icon: "/django.svg" },
            { name: "NestJS", icon: "/nestjs-original.svg" },
            { name: "Fiber", icon: "/fiber-original.svg" },
            { name: "Gin", icon: "/gin.png" },
            { name: "tRPC", icon: "/trpc-original.svg" },
            { name: "Prisma ORM", icon: "/prisma-original.svg" },
            { name: "Drizzle ORM", icon: "/drizzle-orm.svg" },
            { name: "PostgreSQL", icon: "/postgresql-original.svg" },
            { name: "MySQL", icon: "/mysql.svg" },
            { name: "MongoDB", icon: "/mongodb-original.svg" },
            { name: "Redis", icon: "/redis-original.svg" },
            { name: "RabbitMQ", icon: "/rabbitmq-original.svg" },
        ],
    },
    {
        title: "Infrastructure and Tools",
        items: [
            { name: "Git", icon: "/git-original.svg" },
            { name: "GitHub", icon: "/github.svg" },
            { name: "Docker", icon: "/docker.svg" },
            { name: "Caddy" },
            { name: "Nginx", icon: "/nginx-original.svg" },
            { name: "PM2" },
            { name: "Kubernetes", icon: "/kubernetes-original.svg" },
            { name: "Cloudflare R2", icon: "/cloudflare-original.svg" },
            { name: "Azure", icon: "/azure-original.svg" },
            { name: "Argo CD", icon: "/argocd-original.svg" },
            { name: "Helm", icon: "/helm-original.svg" },
            { name: "OpenTelemetry", icon: "/opentelemetry-original.svg" },
            { name: "Sentry", icon: "/sentry-original.svg" },
            { name: "Postman", icon: "/postman-original.svg" },
        ],
    },
];

// ── Capability Groups (kept for About section) ──────────────────────
export const capabilityGroups: CapabilityGroup[] = [
    {
        title: "Product Engineering",
        description:
            "End-to-end web products with payment, auth, and admin workflows.",
        technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "Go",
            "Node.js",
            "Bun",
            "PostgreSQL",
            "payments",
            "auth",
        ],
        evidenceHref: "#work",
    },
    {
        title: "Systems & Algorithms",
        description:
            "Low-level systems, graph algorithms, and linear algebra work.",
        technologies: [
            "C",
            "C++",
            "Java",
            "Go",
            "operating systems",
            "networking",
            "graph algorithms",
            "linear algebra",
        ],
        evidenceHref: "#work",
    },
    {
        title: "Research & Data",
        description:
            "Experiments, performance analysis, and technical writing.",
        technologies: [
            "Python",
            "pandas",
            "NumPy",
            "experimentation",
            "technical writing",
        ],
        evidenceHref: "#research",
    },
];

export const toolbox: string[] = [
    "C",
    "C++",
    "C# / .NET",
    "Java",
    "Go",
    "TypeScript",
    "JavaScript",
    "Python",
    "Haskell",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "React Query",
    "Zustand",
    "Motion",
    "Zod",
    "React Hook Form",
    "TanStack Table",
    "Node.js",
    "Bun",
    "Express",
    "Hono",
    "Flask",
    "Django",
    "FastAPI",
    "NestJS",
    "RabbitMQ",
    "Prisma ORM",
    "Drizzle ORM",
    "Fiber",
    "Gin",
    "tRPC",
    "Better Auth",
    "NextAuth",
    "Auth.js",
    "WebAuthn",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQL Server",
    "EF Core",
    "MediatR",
    "FluentValidation",
    "Midtrans",
    "Xendit",
    "Git",
    "GitHub",
    "Docker",
    "Caddy",
    "Nginx",
    "PM2",
    "Cloudflare R2",
    "Azure",
    "Contentful",
    "OpenTelemetry",
    "Sentry",
    "Postman",
    "Figma",
    "Vitest",
    "JUnit",
    "pytest",
    "pandas",
    "NumPy",
    "Argo CD",
    "Helm",
];

function link(label: string, href: string): PortfolioLink {
    return { label, href };
}

// ── Featured Work (exactly 3) ───────────────────────────────────────
export const selectedWork: WorkItem[] = [
    {
        name: "TEDxITB 9.0",
        category: "Event Platform",
        role: "Head of Website Development",
        outcome:
            "Built the official ticket and merchandise platform with capacity-gated ticketing, QR check-in, admin order management, and attendance tracking. ",
        image: "/tedx.png",
        imageAlt: "TEDxITB 9.0 website landing page",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Drizzle ORM",
            "PostgreSQL",
        ],
        links: [
            link("Live", "https://tedxitb.id"),
            link("GitHub", "https://github.com/nicholaswisee/tedxitb-9-0-app"),
        ],
    },
    {
        name: "Tubbu",
        category: "Fitness & Wellness Platform",
        role: "Software Engineer",
        outcome:
            "Built a fitness and wellness platform for membership management, session booking, recovery services, and an admin dashboard.",
        image: "/tubbu.png",
        imageAlt: "Tubbu wellness platform landing page",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "NextAuth",
        ],
        links: [link("Live", "https://tubbuwellness.com")],
    },
    {
        name: "TempleOS",
        category: "Operating System",
        role: "Systems Developer",
        outcome:
            "Built a 32-bit x86 operating system from scratch with protected mode, paging, multitasking, an EXT2 filesystem, and a shell.",
        image: "/templeos.png",
        imageAlt: "TempleOS shell interface",
        technologies: ["C", "x86 Assembly"],
        links: [link("GitHub", "https://github.com/nicholaswisee/TempleOS")],
    },
];

// ── Project Archive (all prior featured + existing archive) ─────────
export const projectArchive: WorkItem[] = [
    {
        name: "INFEST 2025",
        category: "Event Platform",
        role: "Full-stack Developer",
        outcome:
            "Delivered the largest Investment Festival website held by KSEP ITB for Indonesia.",
        image: "/infest.png",
        imageAlt: "INFEST 2025 website landing page",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        links: [
            link("Live", "https://www.infestbdg.com"),
            link("GitHub", "https://github.com/nicholaswisee/infest-2025"),
        ],
    },
    {
        name: "Galva",
        category: "Enterprise ERP",
        role: "Backend/API Developer",
        outcome:
            "Built a procure-to-pay ERP mockup with document workflows, server-side validation, ETag concurrency, and idempotent POSTs.",
        technologies: [
            "C#",
            ".NET 8",
            "EF Core",
            "SQL Server",
            "MediatR",
            "FluentValidation",
        ],
        links: [],
    },
    {
        name: "DOM Vector",
        category: "Visualization Tool",
        role: "Full-stack Developer",
        outcome:
            "Created a web-based DOM tree visualizer with animated BFS/DFS playback, CSS selector matching, and LCA via binary lifting.",
        image: "/dom.png",
        imageAlt: "DOM Vector tree visualization interface",
        technologies: ["Go", "Gin", "TypeScript", "React"],
        links: [
            link("Live", "http://103.150.227.154:21231"),
            link(
                "GitHub",
                "https://github.com/nicholaswisee/Tubes2_TimsesDewaPetir",
            ),
        ],
    },
    {
        name: "Mjolnir",
        category: "Recommendation System",
        role: "Full-stack Developer",
        outcome:
            "Built a digital library with image-based PCA recommendations and text-based LSA recommendations.",
        image: "/mjolnir.png",
        imageAlt: "Mjolnir digital library search interface",
        technologies: ["Go", "TypeScript", "React"],
        links: [
            link("GitHub", "https://github.com/nicholaswisee/algeo2-mjolnir"),
        ],
    },
    {
        name: "Lokasharana",
        category: "Web Gallery",
        role: "Full-stack Developer",
        outcome: "A photo gallery for FSRD 2024's graduation ceremony.",
        image: "/lokasharana.png",
        imageAlt: "Lokasharana photo gallery",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
        links: [
            link("Live", "https://www.lokasharana.com"),
            link(
                "GitHub",
                "https://github.com/nicholaswisee/FSRD-2024-Web-Gallery",
            ),
        ],
    },
    {
        name: "Tabung",
        category: "Desktop App",
        role: "Full-stack Developer",
        outcome:
            "A personal finance tracker with authentication, transactions, budgeting, and financial reports.",
        image: "/tabung.png",
        imageAlt: "Tabung finance tracker interface",
        technologies: ["Python"],
        links: [
            link(
                "GitHub",
                "https://github.com/nicholaswisee/IF2150-2025-K01-G11-Tabung",
            ),
        ],
    },
    {
        name: "Blueddit",
        category: "CLI Application",
        role: "Developer",
        outcome:
            "A CLI-based Reddit-inspired app with subreddits, posts, comments, voting, trending, and moderation.",
        image: "/blueddit.png",
        imageAlt: "Blueddit terminal interface",
        technologies: ["C"],
        links: [
            link(
                "GitHub",
                "https://github.com/nicholaswisee/Tugas-Besar-IF2110-K01-G",
            ),
        ],
    },
    {
        name: "Nimons Hospital",
        category: "CLI Application",
        role: "Developer",
        outcome:
            "A CLI hospital simulator with custom data-structure implementations.",
        image: "/hospitalwebp.webp",
        imageAlt: "Nimons Hospital terminal interface",
        technologies: ["C"],
        links: [
            link("GitHub", "https://github.com/nicholaswisee/Tubes-Alpro-1"),
        ],
    },
    {
        name: "3D Voxelization Engine",
        category: "Graphics Engine",
        role: "Developer",
        outcome:
            "An octree-based 3D voxelizer with concurrent construction, an interactive viewer, and .obj support.",
        image: "/voxelizer.png",
        imageAlt: "3D voxelization engine viewer",
        technologies: ["Go", "go-sdl2"],
        links: [
            link(
                "GitHub",
                "https://github.com/nicholaswisee/Tucil2_13524027_13524037",
            ),
        ],
    },
    {
        name: "Matrix Calculator",
        category: "Desktop App",
        role: "Developer",
        outcome:
            "A linear algebra calculator with SPL, determinants, inverses, interpolation, and polynomial regression.",
        image: "/calculator.png",
        imageAlt: "Matrix Calculator JavaFX interface",
        technologies: ["Java", "Gradle", "JavaFX"],
        links: [
            link(
                "GitHub",
                "https://github.com/nicholaswisee/matrix-calculator",
            ),
        ],
    },
    {
        name: "LinkedIn Queens Solver",
        category: "Desktop App",
        role: "Developer",
        outcome:
            "A brute-force solver for the LinkedIn Queens puzzle with an interactive JavaFX GUI and step visualization.",
        image: "/queens.png",
        imageAlt: "LinkedIn Queens Solver interface",
        technologies: ["Java", "Maven", "JavaFX"],
        links: [
            link("GitHub", "https://github.com/nicholaswisee/Tucil1_13524037"),
        ],
    },
];

// ── Research (text-only) ────────────────────────────────────────────
export const researchItems: ResearchItem[] = [
    {
        title: "Dynamic Programming for Optimal Model Partitioning in Pipeline-Parallel LLM Training",
        context: "IF2211 Algorithm Strategy",
        problem:
            "Split contiguous transformer layers across pipeline stages to minimize the slowest stage's compute cost.",
        method: "Exact Bellman-style minimax dynamic programming with backpointer reconstruction; naive O(KL²) and divide-and-conquer O(KL log L) implementations.",
        result: "DP met or beat uniform partitioning across 15 synthetic configurations and reduced makespan by 14–16% on synthetic heterogeneous profiles.",
        qualifier:
            "Results use synthetic layer-cost models, not real GPU-cluster training runs.",
        technologies: [],
        links: [
            link(
                "Repository",
                "https://github.com/nicholaswisee/makalah-stima",
            ),
            link(
                "Paper ",
                "https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2025-2026/Makalah2026/13524037_Nicholas%20Wise%20Saragih%20Sumbayak_Dynamic%20Programming%20for%20Optimal%20Model%20Partitioning%20in%20Pipeline-Parallel%20LLM%20Training.pdf",
            ),
        ],
    },
    {
        title: "M/M/1 Queue Analysis with Markov Chains and Eigenvalues",
        context: "IF2123 Linear and Geometrical Algebra",
        problem:
            "Characterize the steady state of a continuous-time M/M/1 queue and validate the analytical model independently.",
        method: "Generator-matrix null-space solution using hand-written Gaussian elimination, paired with a C++17 discrete-event simulator.",
        result: "Simulation stayed within 2% of theory for stable regimes with ρ ≤ 0.9; the paper explicitly characterizes accuracy degradation near saturation.",
        technologies: [],
        links: [
            link(
                "Repository",
                "https://github.com/nicholaswisee/makalah-algeo",
            ),
            link(
                "Paper",
                "https://informatika.stei.itb.ac.id/~rinaldi.munir/AljabarGeometri/2025-2026/Makalah/Makalah-IF2023-Algeo-2025%20(40).pdf",
            ),
        ],
    },
];

// ── Life (photo gallery) ───────────────────────────────────────────
export const lifeExperiences: LifeExperience[] = [
    {
        title: "Ganesha.",
        place: "Campus",
        image: "/life/ganesha.webp",
        imageAlt: "Ganesha statue at the campus",
        aspectRatio: "3/4",
    },
    {
        title: "Community.",
        place: "HMIF ITB",
        image: "/life/hmif.webp",
        imageAlt: "HMIF ITB community gathering",
        aspectRatio: "3/4",
    },
    {
        title: "Ceremony.",
        place: "Field Division",
        image: "/life/arak.webp",
        imageAlt: "Field division at a graduation ceremony",
        aspectRatio: "16/9",
    },
    {
        title: "Ascent.",
        place: "Mountain trip",
        image: "/life/gunung.webp",
        imageAlt: "A mountain trip with friends",
        aspectRatio: "4/3",
    },
    {
        title: "Falls.",
        place: "Waterfall",
        image: "/life/waterfall.webp",
        imageAlt: "A waterfall scene",
        aspectRatio: "3/4",
    },
    {
        title: "Horizon.",
        place: "Scenery",
        image: "/life/scenery.webp",
        imageAlt: "A scenic landscape view",
        aspectRatio: "4/3",
    },
    {
        title: "Commitment.",
        place: "IMPACT 5.0",
        image: "/life/ring-impact.webp",
        imageAlt: "Head of divisions and departments in IMPACT 5.0",
        aspectRatio: "3/2",
    },
    {
        title: "Competition.",
        place: "IMPACT 5.0",
        image: "/life/panit-impact.webp",
        imageAlt: "IMPACT 5.0 committee",
        aspectRatio: "4/3",
    },
    {
        title: "Family.",
        place: "PTD KSEP",
        image: "/life/ring-ptd.webp",
        imageAlt: "Rings of PTD KSEP",
        aspectRatio: "16/9",
    },
    {
        title: "Swim.",
        place: "Aquarium",
        image: "/life/aqua.webp",
        imageAlt: "Aquarium",
        aspectRatio: "16/9",
    },
    {
        title: "Sonics.",
        place: "PTD KSEP",
        image: "/life/tunes.webp",
        imageAlt: "Albums",
        aspectRatio: "3/2",
    },
];

export const navItems: { name: string; link: string }[] = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Research", link: "#research" },
    { name: "Life", link: "#life" },
    { name: "Contact", link: "#contact" },
];
