export type BadgeItem = {
  name: string;
  icon: string;
}

export type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
  badges: BadgeItem[];
  github: string
}