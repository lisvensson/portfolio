export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Other',
    skills: ['Git & GitHub', 'Docker', 'Figma'],
  },
];
