import {
    ExperienceGroup,
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

export const experienceGroups: ExperienceGroup[] = [
    {
        organization: "SPE ITB SC",
        roles: [{ title: "DevOps Engineer", dates: "Jul 2026-Present" }],
        summary:
            "Built a 3-repository CI/CD pipeline with GitHub Actions, automating linting, testing, type checking, builds, and GHCR image publishing across frontend and backend services.",
        highlights: [
            "Implemented Docker Compose deployments for a 4-service production stack, reducing manual deployment overhead by approximately 70% and cutting release time to under 4 minutes.",
            "Established digest-pinned releases for 2 application images, enabling reproducible deployments and complete frontend/backend version traceability.",
            "Configured approval-gated SSH deployments to a VPS with protected secrets, health checks, and 120-second deployment timeouts.",
            "Automated HTTPS delivery through Nginx and host-level Certbot, supporting TLS termination, certificate renewal, and public routing across ports 80 and 443.",
            "Developed rollback workflows that restore the previous application release without restarting PostgreSQL or Nginx, minimizing production downtime.",
        ],
    },
    {
        organization: "Kabinet KM ITB",
        roles: [{ title: "Backend Engineer", dates: "Jul 2026-Present" }],
        summary:
            "Reworked a Go/Fiber link-shortening platform serving creator-generated links with role-based admin controls.",
        highlights: [
            "Implemented 4 protected admin APIs for platform statistics, global link search/filtering, status management, and deletion.",
            "Maintained deployment pipelines for Go backend and Vite frontend builds, artifact packaging, self-hosted VPS deployment, PM2 restarts, and post-deployment health checks.",
        ],
    },
    {
        organization: "KSEP ITB",
        roles: [
            { title: "Vice Director", dates: "Apr 2025-May 2026" },
            { title: "President", dates: "May 2026-Present" },
        ],
        summary:
            "Bringing #WalkWithWisdom to KSEP ITB, empowering members in growth, knowledge, and kinship. Work in progress.",
        highlights: [
            "Led and contributed to four professional KSEP websites.",
            "Supervised a team of four.",
            "Worked on design, implementation, and deployment.",
        ],
    },
    {
        organization: "ARKAVIDIA",
        roles: [{ title: "Deputy Head of IT", dates: "May 2026-Present" }],
        summary:
            "Overseeing Software Engineering and UI/UX divisions at Arkavidia 11. Work in progress.",
    },
    {
        organization: "Galva",
        roles: [{ title: "MIS Intern", dates: "Jun-Aug 2026" }],
        summary: "Completed an MIS internship from June through August 2026.",
    },
    {
        organization: "TEDxITB",
        roles: [
            { title: "Frontend Developer", dates: "Nov 2024-May 2025" },
            { title: "Director", dates: "Nov 2025-Jun 2026" },
        ],
        summary: "Contributed as Frontend Developer and later served as Director.",
        highlights: [
            "Eliminated 100% of oversell incidents.",
            "Reached a 98% successful checkout rate across four ticket-release windows.",
            "Increased publicity reach by 50%.",
            "Reduced LCP by 40% and reached 93/100 Lighthouse performance.",
            "Reduced manual attendee follow-up by approximately 85%.",
            "Delivered payment confirmations, reminders, and QR-ticket emails within 60 seconds.",
            "Processed 100+ orders and generated Rp20M+ in ticket and merchandise purchases.",
        ],
    },
    {
        organization: "Aku Masuk ITB 2026",
        roles: [{ title: "Deputy Head of IT", dates: "Oct 2025-Feb 2026" }],
        summary:
            "Coordinated a 12-person team building an e-commerce platform for event registration and merchandise sales.",
        highlights: [
            "Reduced admin workload by approximately 55% with dashboard features.",
            "Supported 7,000+ concurrent users with 99.95% uptime during peak ticket drops.",
            "Achieved 98.7% cart-to-payment conversion and raised over Rp120M in sales.",
            "Reduced deployment time from 30 minutes to under 4 minutes.",
        ],
    },
    {
        organization: "OSKM ITB 2025",
        roles: [{ title: "Backend Developer", dates: "Aug 2025" }],
        summary:
            "Developed and implemented several API endpoints for OSKM ITB 2025's companion app, used by up to 5,000 concurrent users at peak traffic. Participated in an Agile-Scrum workflow.",
    },
    {
        organization: "IMPACT 5.0",
        roles: [{ title: "Project Officer", dates: "Jan-Jul 2025" }],
        summary:
            "Managed 146 committees in organizing university admission test tutorials and an annual informatics, mathematics, and physics competition for high school students, demonstrating strong leadership and organizational skills.",
        highlights: [
            "Coordinated 9 divisions including 17 subdivisions across a 6-month period of intensive work, showcasing project management skills.",
        ],
    },
    {
        organization: "PTD KSEP",
        roles: [{ title: "Head of OH-KM", dates: "Aug-Sep 2025" }],
        summary:
            "Having fun at OSKM ITB, coordinated a promotional campaign for KSEP ITB and its introductory programme, PTD KSEP. Successfully gained 440+ registrants!",
    },
    {
        organization: "Inkubator IT",
        roles: [
            { title: "Technology Development Associate", dates: "Oct 2025-Present" },
        ],
        summary:
            "Member of Technology Development Staff, serving as a Software Engineer for incoming projects.",
    },
    {
        organization: "Himpunan Mahasiswa Informatika (HMIF) ITB",
        roles: [
            { title: "Technology and Research Intern", dates: "Oct 2025-Feb 2026" },
        ],
        summary:
            "Participated in development of HMIF's internal app as part of the UI/UX team.",
    },
    {
        organization: "Parade Wisuda April ITB 2025",
        roles: [{ title: "Frontend Developer", dates: "Feb-Apr 2025" }],
        summary:
            "Developed a menfess system enabling private messages to graduates in one week.",
    },
    {
        organization: "TEDxYouth@Smakone",
        roles: [{ title: "Frontend Developer", dates: "2023-2023" }],
        summary:
            "Participated in creation and design of the website using ReactJS and TailwindCSS.",
    },
];

// ── Research (text-only) ────────────────────────────────────────────
export const researchItems: ResearchItem[] = [
    {
        title: "Dynamic Programming for Optimal Model Partitioning in Pipeline-Parallel LLM Training",
        context: "IF2211 Algorithm Strategy",
        summary:
            "For IF2211 Algorithm Strategy, developed and evaluated Bellman-style minimax dynamic programming to partition contiguous transformer layers across pipeline stages. Across 15 synthetic configurations, the approach met or beat uniform partitioning and reduced makespan by 14–16% on synthetic heterogeneous profiles; it was not evaluated in real GPU-cluster training runs.",
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
        summary:
            "For IF2123 Linear and Geometrical Algebra, characterized an M/M/1 queue steady state with a generator-matrix null-space solution and independently validated it with a C++17 discrete-event simulator. In stable regimes with ρ ≤ 0.9, simulation stayed within 2% of theory, with degradation near saturation characterized in the paper.",
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
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Research", link: "#research" },
    { name: "Life", link: "#life" },
    { name: "Contact", link: "#contact" },
];
