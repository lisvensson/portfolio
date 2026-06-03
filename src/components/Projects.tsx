import { projects } from '../data/projects';
import { useT } from '../context/LanguageContext';

export default function Projects() {
  const t = useT();
  return (
    <section id="projects" className="py-20 px-6 bg-warm-base dark:bg-dark-base">
      <div className="max-w-4xl mx-auto">

        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          {t.projects.badge}
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-10">
          {t.projects.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const item = t.projects.items[project.id];
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-muted border border-warm-border dark:border-orange-900/30 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                {/* Screenshot placeholder */}
                <div
                  className="h-36 flex items-center justify-center text-sm font-semibold tracking-wider text-orange-700"
                  style={{ background: 'linear-gradient(135deg, #fde68a, #fb923c)' }}
                  aria-label={project.imageAlt}
                >
                  [ Screenshot ]
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-orange-600 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-black text-warm-dark dark:text-orange-100 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mb-3">
                    {project.tech.join(' · ')}
                  </p>
                  <p className="text-sm text-orange-900 dark:text-orange-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="text-xs font-bold px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors duration-150"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.liveDemo}
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-xs font-bold px-3 py-1.5 border border-warm-border dark:border-orange-800 text-orange-800 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950 rounded-lg transition-colors duration-150"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.github}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
