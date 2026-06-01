export type Lang = 'en' | 'sv';

export interface Translations {
  nav: { about: string; skills: string; projects: string; contact: string };
  hero: { role: string; greetingPrefix: string; tagline: string; dogCaption: string; cta: string };
  about: { badge: string; heading: string; p1: string; p2: string; p3: string };
  skills: {
    badge: string;
    heading: string;
    categories: { frontend: string; backend: string; other: string };
  };
  projects: {
    badge: string;
    heading: string;
    liveDemo: string;
    github: string;
    items: Record<string, { category: string; description: string }>;
  };
  contact: { badge: string; heading: string; subtext: string };
  footer: string;
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      role: 'Full Stack Developer',
      greetingPrefix: "Hi, I'm ",
      tagline: 'I build clean, fast, and modern web experiences.',
      dogCaption: '& yes, that floating cutie is my shiba Mango.',
      cta: 'View my projects ↓',
    },
    about: {
      badge: 'About me',
      heading: 'Nice to meet you!',
      p1: "Hi! I'm Li — a full stack developer based in Sweden with a love for building things that are both beautiful and functional.",
      p2: "I'm currently studying Computer Science and always working on something new. When I'm not coding, you'll find me on walks with Mango or deep in a new side project.",
      p3: 'I care a lot about clean code, great UX, and making the web a little more delightful.',
    },
    skills: {
      badge: 'Skills',
      heading: 'What I work with',
      categories: { frontend: 'Frontend', backend: 'Backend', other: 'Other' },
    },
    projects: {
      badge: 'Projects',
      heading: "Things I've built",
      liveDemo: 'Live demo →',
      github: 'GitHub',
      items: {
        taskflow: {
          category: 'School Project',
          description:
            'A full-stack task management app with real-time updates, drag-and-drop boards, and user authentication.',
        },
        weather: {
          category: 'Side Project',
          description:
            'Clean weather dashboard with 5-day forecast, location search, and a dark/light mode toggle.',
        },
      },
    },
    contact: {
      badge: 'Contact',
      heading: "Let's connect!",
      subtext:
        "Open to new opportunities, collaborations, and friendly conversations. Don't be a stranger!",
    },
    footer: '© 2026 Li Svensson — Built with React, TypeScript & Tailwind CSS',
  },
  sv: {
    nav: {
      about: 'Om mig',
      skills: 'Kompetenser',
      projects: 'Projekt',
      contact: 'Kontakt',
    },
    hero: {
      role: 'Fullstackutvecklare',
      greetingPrefix: 'Hej, jag är ',
      tagline: 'Jag bygger snygga, snabba och moderna webbupplevelser.',
      dogCaption: '& ja, den flytande sötisen är min shiba Mango.',
      cta: 'Se mina projekt ↓',
    },
    about: {
      badge: 'Om mig',
      heading: 'Trevligt att träffas!',
      p1: 'Hej! Jag är Li — en fullstackutvecklare baserad i Sverige med en kärlek för att bygga saker som är både vackra och funktionella.',
      p2: 'Jag studerar just nu datavetenskap och jobbar alltid på något nytt. När jag inte kodar hittar du mig på promenader med Mango eller fördjupad i ett nytt sidoprojekt.',
      p3: 'Jag bryr mig mycket om ren kod, bra UX och att göra webben lite roligare.',
    },
    skills: {
      badge: 'Kompetenser',
      heading: 'Vad jag jobbar med',
      categories: { frontend: 'Frontend', backend: 'Backend', other: 'Övrigt' },
    },
    projects: {
      badge: 'Projekt',
      heading: 'Saker jag har byggt',
      liveDemo: 'Se live →',
      github: 'GitHub',
      items: {
        taskflow: {
          category: 'Skolprojekt',
          description:
            'En fullstack-uppgiftshanteringsapp med realtidsuppdateringar, dra-och-släpp-tavlor och användarautentisering.',
        },
        weather: {
          category: 'Sidoprojekt',
          description:
            'En snygg väderdashboard med 5-dagarsprognos, platssökning och växling mellan mörkt och ljust läge.',
        },
      },
    },
    contact: {
      badge: 'Kontakt',
      heading: 'Låt oss hålla kontakt!',
      subtext: 'Öppen för nya möjligheter, samarbeten och trevliga samtal. Hör gärna av dig!',
    },
    footer: '© 2026 Li Svensson — Byggd med React, TypeScript & Tailwind CSS',
  },
};
