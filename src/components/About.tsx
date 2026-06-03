import photo from "../assets/portfolio-li-svensson.jpg";
import { useT } from "../context/LanguageContext";

export default function About() {
  const t = useT();
  return (
    <section id="about" className="py-20 px-6 bg-warm-base dark:bg-dark-base">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          {t.about.badge}
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-10">
          {t.about.heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <img
            src={photo}
            alt="Li Svensson"
            className="shrink-0 w-44 h-44 object-cover rounded-2xl shadow-lg"
            style={{
              transform: "rotate(-2deg)",
              boxShadow: "0 4px 20px rgba(249,115,22,0.15)",
            }}
          />

          {/* Bio */}
          <div className="space-y-4 text-[15px] leading-relaxed text-orange-900 dark:text-orange-200">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
