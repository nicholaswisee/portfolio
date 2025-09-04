export type BadgeItem = {
  name: string;
  icon: string;
}

export type Project = {
  name: string;
  description: string;
  url?: string;
  image: string;
  badges: BadgeItem[];
  github: string;
}

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  description2?: string;
}