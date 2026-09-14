export type PortfolioLink = {
  label: string;
  href: string;
};

export type TechStackItem = {
  name: string;
  icon?: string;
};

export type TechStackCategory = {
  title: string;
  items: TechStackItem[];
};

export type DensityMode = "full" | "compact";
export type ThemeChoice = "light" | "dark";

export interface TimelineRole {
  title: string;
  dates: string;
}

export interface ExperienceGroup {
  organization: string;
  roles: TimelineRole[];
  summary?: string;
  highlights?: string[];
  metrics?: string[];
  links?: PortfolioLink[];
}

export type WorkItem = {
  name: string;
  category: string;
  role: string;
  outcome: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  links: PortfolioLink[];
};

export type ResearchItem = {
  title: string;
  context: string;
  summary: string;
  problem: string;
  method: string;
  result: string;
  qualifier?: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  links: PortfolioLink[];
};

export type LifeExperience = {
  title: string;
  date?: string;
  place: string;
  image: string;
  imageAlt: string;
  href?: string;
  aspectRatio?: string;
};
