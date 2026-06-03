export interface ProjectItem {
  id: string;
  name: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  imageAlt: string;
}

export const projects: ProjectItem[] = [
  {
    id: "relocations",
    name: "Relocation Streams App",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    //liveUrl: "#",
    githubUrl: "https://github.com/lisvensson/relocation-streams",
    imageAlt: "Relocation Streams App screenshot",
  },
  {
    id: "planago",
    name: "Planago App",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    //liveUrl: "#",
    githubUrl: "https://github.com/lisvensson/planago",
    imageAlt: "Planago App screenshot",
  },
];
