export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  client: string;
  image: string;
  tags: string[];
  link?: string;
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: string;
  level: string;
}

