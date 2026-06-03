export type SkillCategoryKey = "frontend" | "backend" | "other";

export interface SkillCategory {
  key: SkillCategoryKey;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      "React",
      "React Router v7",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML/CSS",
    ],
  },
  {
    key: "backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    key: "other",
    skills: [
      "Git/GitHub",
      "Docker",
      "Figma",
      "Render",
      "Railway",
      "Neon",
      "Better Auth",
      "Resend",
    ],
  },
];
