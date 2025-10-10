export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  outcomes: string[];
  details: string;
  metrics?: string;
  role: string;
  image?: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}