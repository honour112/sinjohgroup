
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  projectSamples: string[];
}

export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Ongoing';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
