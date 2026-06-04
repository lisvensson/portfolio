import { skillCategories } from '../data/skills';
import { useT } from '../context/LanguageContext';

export default function Skills() {
  const t = useT();
  return (
    <section id="skills" className="py-20 px-6 bg-warm-muted dark:bg-dark-muted">
      <div className="max-w-4xl mx-auto">

        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-white dark:bg-dark-base border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          {t.skills.badge}
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-10">
          {t.skills.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillCategories.map(({ key, skills }) => (
            <div key={key}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600 pb-2 mb-3 border-b-2 border-orange-200 dark:border-orange-800">
                {t.skills.categories[key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-dark-base border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-200 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
