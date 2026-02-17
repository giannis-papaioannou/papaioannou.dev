export type SkillCategory = {
  title: string;
  description: string;
};

export type CertificateCategory = {
  date: string;
  title: string;
  skill: string;
  link: string;
};


export type ExperienceCategory = {
  image: string;
  job_title: string;
  work: string;
  duration: string;
  points: string[];
  min_points: number;
}

export type ProjectCategory = {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  status: string;
  link: string;
}