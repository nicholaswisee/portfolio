import { readFileSync } from "node:fs";

const html = readFileSync(".next/server/app/index.html", "utf8");
const count = (pattern) => (html.match(pattern) ?? []).length;
const stackDirections = [...html.matchAll(/data-stack-direction="(left|right)"/g)].map(
  ([, direction]) => direction,
);

const checks = [
  ["Tubbu is featured", html.includes("Tubbu")],
  ["Tubbu links to its live site", html.includes("https://tubbuwellness.com")],
  ["Tubbu has no GitHub link", !html.includes("github.com/nicholaswisee/tubbu")],
  ["exactly three featured projects", count(/data-featured="true"/g) === 3],
  ["archive projects render as rows", count(/data-archive="true"/g) >= 10],
  ["research is text-only", html.includes('data-research-layout="text-only"')],
  ["Life gallery renders eleven photos", count(/data-life="figure"/g) === 11],
  ["Life placeholder text removed", !html.includes("coming soon")],
  ["hero facets removed", !html.includes(">Build</a>") && !html.includes(">Study</a>") && !html.includes(">Life</a>")],
  ["missing skill icons render as text-only pills", count(/data-skill-fallback="text"/g) > 0],
  ["marquee has a motion pause control", html.includes('data-marquee-toggle="true"')],
  ["About and capabilities are merged", html.includes('data-about-layout="merged"')],
  [
    "every adjacent tech lane alternates direction",
    stackDirections.length > 1 && stackDirections.every((direction, index) => index === 0 || direction !== stackDirections[index - 1]),
  ],
  ["large tech groups split across lanes", count(/data-stack-row="true"/g) > 4],
  [
    "static capability topic cards are absent",
    !html.includes("Product Engineering") &&
      !html.includes("Systems &amp; Algorithms") &&
      !html.includes("Research &amp; Data"),
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
];

const failures = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) {
  console[passed ? "log" : "error"](`${passed ? "PASS" : "FAIL"}: ${name}`);
}

process.exitCode = failures.length === 0 ? 0 : 1;
