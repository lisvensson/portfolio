import { useState } from "react";
import { Link, scroller, animateScroll } from "react-scroll";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useT, useLang } from "../context/LanguageContext";

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

export default function Navbar({ darkMode, toggleDark }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const { lang, toggleLang } = useLang();

  const NAV_LINKS = [
    { label: t.nav.about, to: "about" },
    { label: t.nav.skills, to: "skills" },
    { label: t.nav.projects, to: "projects" },
    { label: t.nav.contact, to: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-warm-base/90 dark:bg-dark-base/90 backdrop-blur-md border-b border-warm-border dark:border-orange-900/30">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          className="font-black text-lg text-orange-600 tracking-tight cursor-pointer"
          onClick={() => {
            setOpen(false);
            setTimeout(() => {
              animateScroll.scrollToTop({ smooth: true, duration: 600 });
            }, 10);
          }}
        >
          LS
        </button>

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
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="p-2 rounded-full bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
            aria-label="Toggle language"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold leading-none">
              {lang === "en" ? "SV" : "EN"}
            </span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-orange-800 dark:bg-orange-300 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-warm-base dark:bg-dark-base border-t border-warm-border dark:border-orange-900/30 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <button
                  className="text-sm font-medium text-orange-900 dark:text-orange-200 cursor-pointer hover:text-orange-600"
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      scroller.scrollTo(to, {
                        smooth: true,
                        duration: 600,
                        offset: -64,
                      });
                    }, 10);
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
