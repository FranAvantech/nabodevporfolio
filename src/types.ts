export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  demoLink: string;
  trailerUrl?: string;
  tags: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  projectTitle?: string;
  imageUrl?: string;
}

export interface MakingOf {
  id: number;
  projectId: number;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'gif';
  date: string;
}