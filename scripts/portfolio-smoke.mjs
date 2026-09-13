import { existsSync, readFileSync } from "node:fs";

const buildPath = ".next/server/app/index.html";

if (!existsSync(buildPath)) {
  console.error(
    "FAIL: production build artifact missing; run pnpm build before the smoke check",
  );
  process.exitCode = 1;
} else {
  const html = readFileSync(buildPath, "utf8");
  const count = (pattern) => (html.match(pattern) ?? []).length;
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const scriptRanges = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi)].map(
    (match) => [match.index, match.index + match[0].length],
  );
  const isOutsideScript = (index) =>
    scriptRanges.every(([start, end]) => index < start || index >= end);
  const openingElements = (attribute, value) =>
    [
      ...html.matchAll(
        new RegExp(
          `<([a-z][\\w:-]*)\\b(?=[^>]*\\b${escapeRegExp(attribute)}\\s*=\\s*["']${escapeRegExp(value)}["'])[^>]*>`,
          "gi",
        ),
      ),
    ].filter((match) => isOutsideScript(match.index));
  const markedElements = (attribute, value) => {
    const elements = [];

    for (const match of openingElements(attribute, value)) {
      const [tag, tagName] = match;
      const start = match.index;
      const contentStart = start + tag.length;

      if (tag.endsWith("/>")) {
        elements.push(tag);
        continue;
      }

      const matchingTag = new RegExp(`<\\/?${escapeRegExp(tagName)}\\b[^>]*>`, "gi");
      matchingTag.lastIndex = contentStart;
      let depth = 1;

      for (const nestedTag of html.matchAll(matchingTag)) {
        if (nestedTag.index < contentStart) continue;

        if (nestedTag[0].startsWith("</")) {
          depth -= 1;
        } else if (!nestedTag[0].endsWith("/>")) {
          depth += 1;
        }

        if (depth === 0) {
          elements.push(html.slice(start, nestedTag.index + nestedTag[0].length));
          break;
        }
      }
    }

    return elements;
  };
  const hasMarkedElementWithTexts = (attribute, value, texts) =>
    markedElements(attribute, value).some((element) =>
      texts.every((text) => element.includes(text)),
    );
  const sectionIds = ["top", "about", "projects", "experience", "research", "life", "contact"];
  const sectionPositions = sectionIds.map(
    (id) => openingElements("id", id)[0]?.index ?? -1,
  );
  const navigationElements = markedElements("data-site-nav", "true");
  const hasNavigationLink = (href, label) =>
    navigationElements.some((navigation) =>
      [...navigation.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].some(
        ([, attributes, content]) =>
          new RegExp(
            `\\bhref\\s*=\\s*["']${escapeRegExp(href)}["']`,
            "i",
          ).test(attributes) && (label === undefined || content.includes(label)),
      ),
    );
  const requiredAssets = [
    "/me.png",
    "/tedx.png",
    "/tubbu.png",
    "/templeos.png",
    "/infest.png",
    "/dom.png",
    "/mjolnir.png",
    "/lokasharana.png",
    "/tabung.png",
    "/blueddit.png",
    "/hospitalwebp.webp",
    "/voxelizer.png",
    "/calculator.png",
    "/queens.png",
    "/life/ganesha.webp",
    "/life/hmif.webp",
    "/life/arak.webp",
    "/life/gunung.webp",
    "/life/waterfall.webp",
    "/life/scenery.webp",
    "/life/ring-impact.webp",
    "/life/panit-impact.webp",
    "/life/ring-ptd.webp",
    "/life/aqua.webp",
    "/life/tunes.webp",
  ];
  const experienceGroups = [
    ["SPE ITB SC", [["DevOps Engineer", "Jul 2026-Present"]]],
    ["Kabinet KM ITB", [["Backend Engineer", "Jul 2026-Present"]]],
    [
      "KSEP ITB",
      [
        ["Vice Director", "Apr 2025-May 2026"],
        ["President", "May 2026-Present"],
      ],
    ],
    ["ARKAVIDIA", [["Deputy Head of IT", "May 2026-Present"]]],
    ["Galva", [["MIS Intern", "Jun-Aug 2026"]]],
    [
      "TEDxITB",
      [
        ["Frontend Developer", "Nov 2024-May 2025"],
        ["Director", "Nov 2025-Jun 2026"],
      ],
    ],
    ["Aku Masuk ITB 2026", [["Deputy Head of IT", "Oct 2025-Feb 2026"]]],
    ["OSKM ITB 2025", [["Backend Developer", "Aug 2025"]]],
    ["IMPACT 5.0", [["Project Officer", "Jan-Jul 2025"]]],
    ["PTD KSEP", [["Head of OH-KM", "Aug-Sep 2025"]]],
  ];
  const checks = [
    [
      "section IDs are present in the required order",
      sectionPositions.every(
        (position, index) =>
          position >= 0 && (index === 0 || position > sectionPositions[index - 1]),
      ),
    ],
    ...["hero", "about", "projects", "experience", "research", "life", "contact"].map(
      (section) => [
        `exactly one ${section} section marker`,
        count(new RegExp(`data-section\\s*=["']${section}["']`, "g")) === 1,
      ],
    ),
    ["site navigation marker is present", navigationElements.length === 1],
    ["Projects is a navbar destination", hasNavigationLink("#projects", "Projects")],
    ["Experience is a navbar destination", hasNavigationLink("#experience", "Experience")],
    ...["#about", "#research", "#life", "#contact"].map((href) => [
      `${href} is a navbar destination`,
      hasNavigationLink(href),
    ]),
    ["Work navigation label is absent", !hasNavigationLink("#work", "Work")],
    ["stale #work destination is absent", !hasNavigationLink("#work")],
    [
      "preference provider hook is present",
      html.includes('data-preference-provider="portfolio"'),
    ],
    [
      "theme controls expose pressed state",
      hasMarkedElementWithTexts("data-theme-control", "true", ['aria-pressed="']),
    ],
    [
      "density controls expose pressed state",
      hasMarkedElementWithTexts("data-density-control", "true", ['aria-pressed="']),
    ],
    ["About capability groups are removed", !html.includes("data-capability-group=")],
    ["About education is removed", !html.includes('data-education-block="true"')],
    ["About credentials are removed", !html.includes('data-credentials-block="true"')],
    ["About toolbox is removed", !html.includes('data-toolbox="')],
    ["portrait uses /me.png", html.includes('src="/me.png"')],
    ["Tubbu is featured", html.includes("Tubbu")],
    ["Tubbu links to its live site", html.includes("https://tubbuwellness.com")],
    ["Tubbu has no GitHub link", !html.includes("github.com/nicholaswisee/tubbu")],
    ["exactly three featured projects", count(/data-featured="true"/g) === 3],
    [
      "hero is labelled by its heading",
      html.includes('aria-labelledby="hero-title"') && html.includes('id="hero-title"'),
    ],
    [
      "prepaint script marks JavaScript availability",
      html.includes('document.documentElement.classList.add("js")'),
    ],
    [
      "first research title is preserved",
      html.includes(
        "Dynamic Programming for Optimal Model Partitioning in Pipeline-Parallel LLM Training",
      ),
    ],
    [
      "second research title is preserved",
      html.includes("M/M/1 Queue Analysis with Markov Chains and Eigenvalues"),
    ],
    [
      "research items have brief descriptions",
      count(/data-research-summary="true"/g) === 2,
    ],
    [
      "verbose research fields are removed",
      !/>\s*(?:Context|Problem|Method|Result|Qualifier)\s*</.test(html),
    ],
    ["Life gallery renders eleven photos", count(/data-life="figure"/g) === 11],
    ["Life placeholder text removed", !html.includes("coming soon")],
    [
      "missing skill icons render as text-only pills",
      count(/data-skill-fallback="text"/g) > 0,
    ],
    [
      "tech-stack categories render",
      [
        "Core Languages",
        "Frontend Development",
        "Backend and Databases",
        "Infrastructure and Tools",
      ].every((category) => html.includes(`data-stack="${category}"`)),
    ],
    [
      "Full technology stack uses moving lanes",
      html.includes('data-tech-lanes="moving"'),
    ],
    [
      "Full technology lanes have a pause control",
      hasMarkedElementWithTexts("data-tech-lanes-control", "true", [
        "Pause technology lanes",
      ]),
    ],
    [
      "exactly ten experience groups render",
      count(/data-experience-group="true"/g) === 10,
    ],
    [
      "every experience group has a short description",
      count(/data-experience-description="true"/g) === 10,
    ],
    ...experienceGroups.flatMap(([organization, roles]) => [
      [
        `${organization} is an experience group`,
        hasMarkedElementWithTexts("data-experience-group", "true", [organization]),
      ],
      ...roles.map(([title, dates]) => [
        `${organization} ${title} has its exact dates`,
        hasMarkedElementWithTexts("data-experience-role", "true", [title, dates]),
      ]),
    ]),
    [
      "IMPACT 5.0 retains approved metrics",
      hasMarkedElementWithTexts("data-experience-group", "true", [
        "IMPACT 5.0",
        "146 committees",
        "9 divisions",
        "17 subdivisions",
      ]),
    ],
    [
      "PTD KSEP retains its approved metric",
      hasMarkedElementWithTexts("data-experience-group", "true", ["PTD KSEP", "440+ registrants"]),
    ],
    ...requiredAssets.map((assetPath) => [
      `required local asset ${assetPath} exists`,
      existsSync(`public${assetPath}`),
    ]),
  ];

  const failures = checks.filter(([, passed]) => !passed);
  for (const [name, passed] of checks) {
    console[passed ? "log" : "error"](`${passed ? "PASS" : "FAIL"}: ${name}`);
  }

  process.exitCode = failures.length === 0 ? 0 : 1;
}
