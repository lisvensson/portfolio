import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useT } from "../context/LanguageContext";

const LINKS = [
  {
    icon: faGithub,
    label: "GitHub",
    sub: "github.com/lisvensson",
    href: "https://github.com/lisvensson",
    external: true,
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    sub: "Li Svensson",
    href: "https://www.linkedin.com/in/li-svensson-068788338/",
    external: true,
  },
  {
    icon: faEnvelope,
    label: "Email",
    sub: "lisvensson@msn.com",
    href: "mailto:lisvensson@msn.com",
    external: false,
  },
];

export default function Contact() {
  const t = useT();
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-warm-muted dark:bg-dark-muted"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-white dark:bg-dark-base border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          {t.contact.badge}
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-4">
          {t.contact.heading}
        </h2>

        <p className="text-[15px] text-orange-900 dark:text-orange-300 mb-10 max-w-2xl mx-auto">
          {t.contact.subtext}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {LINKS.map(({ icon, label, sub, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-2 w-44 h-36 bg-white dark:bg-dark-base border border-warm-border dark:border-orange-900/30 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-150 no-underline"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-2xl text-orange-600"
              />
              <span className="text-sm font-black text-warm-dark dark:text-orange-100">
                {label}
              </span>
              <span className="text-xs text-amber-700 dark:text-amber-400">
                {sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
