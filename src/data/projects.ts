export interface ProjectItem {
  id: string;
  category: string;
  name: string;
  tech: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  imageAlt: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'taskflow',
    category: 'School Project',
    name: 'TaskFlow App',
    tech: ['React', 'Node.js', 'MongoDB'],
    description:
      'A full-stack task management app with real-time updates, drag-and-drop boards, and user authentication.',
    liveUrl: '#',      // replace with real URL
    githubUrl: '#',    // replace with real GitHub URL
    imageAlt: 'TaskFlow App screenshot',
  },
  {
    id: 'weather',
    category: 'Side Project',
    name: 'Weather Dashboard',
    tech: ['TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    description:
      'Clean weather dashboard with 5-day forecast, location search, and a dark/light mode toggle.',
    liveUrl: '#',
    githubUrl: '#',
    imageAlt: 'Weather Dashboard screenshot',
  },
];
