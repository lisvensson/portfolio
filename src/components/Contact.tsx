const LINKS = [
  {
    icon: '⚡',
    label: 'GitHub',
    sub: 'github.com/lisvensson',    // update with your real GitHub username
    href: 'https://github.com/lisvensson',
    external: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    sub: 'Li Svensson',
    href: 'https://linkedin.com/in/lisvensson', // update with your real LinkedIn URL
    external: true,
  },
  {
    icon: '✉️',
    label: 'Email',
    sub: 'lisvensson@msn.com',
    href: 'mailto:lisvensson@msn.com',
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-orange-50 dark:bg-dark-muted">
      <div className="max-w-4xl mx-auto text-center">

        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-white dark:bg-dark-base border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          Contact
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-4">
          Let's connect! 🐾
        </h2>

        <p className="text-[15px] text-orange-900 dark:text-orange-300 mb-10 max-w-md mx-auto">
          Open to new opportunities, collaborations, and friendly conversations. Don't be a stranger!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {LINKS.map(({ icon, label, sub, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-1 bg-white dark:bg-dark-base border border-warm-border dark:border-orange-900/30 rounded-2xl px-8 py-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-150 no-underline"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-black text-warm-dark dark:text-orange-100">{label}</span>
              <span className="text-xs text-amber-700 dark:text-amber-400">{sub}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
