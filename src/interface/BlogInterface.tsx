export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  content: string;
  keyFeatures: string[];
  applications: string[];
  technicalSpecs?: { property: string; value: string }[];
  surfacePrep?: string[];
  packaging?: string[];
  safety?: string[];
}
