export type Lang = "en" | "sv";

export interface Translations {
  nav: { about: string; skills: string; projects: string; contact: string };
  hero: {
    role: string;
    greetingPrefix: string;
    tagline: string;
    dogCaption: string;
    cta: string;
  };
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
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      greetingPrefix: "Hi, I'm ",
      tagline: "I build clear, modern and user‑friendly web experiences.",
      dogCaption: "& yes, the cute dog is my shiba, Mango.",
      cta: "Explore my work ↓",
    },
    about: {
      badge: "About me",
      heading: "Nice to meet you!",
      p1: "Hi, and thanks for stopping by! I'm Li – a newly graduated full stack developer, ready for my first role in the industry.",
      p2: "I'm structured, detail‑oriented and enjoy working with both frontend and backend. During my studies and internship I discovered how much I like taking an idea from data and logic all the way to a clear, user‑friendly interface.",
      p3: "Outside of coding, I enjoy training, spending time in nature, hiking with my shiba Mango and spending time with friends and family.",
    },
    skills: {
      badge: "Skills",
      heading: "What I work with",
      categories: { frontend: "Frontend", backend: "Backend", other: "Other" },
    },
    projects: {
      badge: "Projects",
      heading: "Things I've built",
      liveDemo: "Live demo →",
      github: "GitHub",
      items: {
        relocations: {
          category: "LIA Project",
          description:
            "A data‑driven analytics tool built during my internship at Booiq. Users can explore and visualize company relocations across Sweden through filters, interactive charts and shareable report snapshots. I worked across the stack with React, TypeScript, PostgreSQL and data modeling.",
        },
        planago: {
          category: "School Project",
          description:
            "A travel planning app built as my final exam project. It helps users generate simple day plans based on location, interests and time of day. I focused on a clean UI, clear flows and a modern React architecture.",
        },
      },
    },
    contact: {
      badge: "Contact",
      heading: "Let's connect!",
      subtext:
        "Open to new opportunities, collaborations, and friendly conversations. Don't be a stranger!",
    },
    footer: "© 2026 Li Svensson — Built with React, TypeScript & Tailwind CSS",
  },
  sv: {
    nav: {
      about: "Om mig",
      skills: "Kompetenser",
      projects: "Projekt",
      contact: "Kontakt",
    },
    hero: {
      role: "Fullstackutvecklare",
      greetingPrefix: "Hej, jag är ",
      tagline:
        "Jag bygger tydliga, moderna och användarvänliga webbupplevelser.",
      dogCaption: "& ja, den söta hunden är min shiba, Mango.",
      cta: "Utforska mina projekt ↓",
    },
    about: {
      badge: "Om mig",
      heading: "Trevligt att träffas!",
      p1: "Hej, vad roligt att du hittat hit! Jag är Li – en nyexaminerad fullstackutvecklare som är redo för mitt första jobb i branschen.",
      p2: "Jag är strukturerad, noggrann och tycker om att arbeta med både frontend och backend. Under utbildningen och min LIA upptäckte jag hur mycket jag trivs med att ta en idé från data och logik hela vägen till ett tydligt och användarvänligt gränssnitt.",
      p3: "På fritiden tränar jag gärna, är ute i naturen, vandrar med min shiba Mango och umgås med vänner och familj.",
    },
    skills: {
      badge: "Kompetenser",
      heading: "Vad jag jobbar med",
      categories: { frontend: "Frontend", backend: "Backend", other: "Övrigt" },
    },
    projects: {
      badge: "Projekt",
      heading: "Saker jag har byggt",
      liveDemo: "Se live →",
      github: "GitHub",
      items: {
        relocations: {
          category: "LIA-projekt",
          description:
            "Ett datadrivet analysverktyg som jag byggde under min LIA på Booiq. Användare kan utforska och visualisera företagsflyttar i Sverige genom filtrering, interaktiva diagram och delningsbara rapportsnapshots. Jag arbetade i hela stacken med React, TypeScript, PostgreSQL och datamodellering.",
        },
        planago: {
          category: "Skolprojekt",
          description:
            "En reseplanerare som jag byggde som mitt examensarbete. Appen hjälper användare att skapa enkla dagsplaner baserat på plats, intressen och tid på dagen. Jag fokuserade på ett rent gränssnitt, tydliga flöden och en modern React‑arkitektur.",
        },
      },
    },
    contact: {
      badge: "Kontakt",
      heading: "Låt oss hålla kontakt!",
      subtext:
        "Öppen för nya möjligheter, samarbeten och trevliga samtal. Hör gärna av dig!",
    },
    footer: "© 2026 Li Svensson — Byggd med React, TypeScript & Tailwind CSS",
  },
};
