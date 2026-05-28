import { useState } from 'react';
import { Link } from 'react-scroll';

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const NAV_LINKS = [
  { label: 'About',    to: 'about'    },
  { label: 'Skills',   to: 'skills'   },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact'  },
];

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-base/90 dark:bg-dark-base/90 backdrop-blur-md border-b border-warm-border dark:border-orange-900/30">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <span className="font-black text-lg text-orange-600 tracking-tight">Li Svensson</span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-64}
                spy
                activeClass="!text-orange-600 font-bold"
                className="text-sm font-medium text-orange-900 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer transition-colors duration-150"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-warm-base dark:bg-dark-base border-t border-warm-border dark:border-orange-900/30 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  duration={600}
                  offset={-64}
                  className="text-sm font-medium text-orange-900 dark:text-orange-200 cursor-pointer hover:text-orange-600"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
