import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-warm-base dark:bg-dark-base text-warm-dark dark:text-orange-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-7 text-center text-xs text-amber-700 dark:text-amber-600 border-t border-warm-border dark:border-orange-900/30 bg-warm-base dark:bg-dark-base">
        © 2026 Li Svensson — Built with React, TypeScript &amp; Tailwind CSS. 🐾
      </footer>
    </div>
  );
}
