export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-warm-base dark:bg-dark-base">
      <div className="max-w-4xl mx-auto">

        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-full px-3 py-1 mb-3">
          About me
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-warm-dark dark:text-orange-100 mb-10">
          Nice to meet you!
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

          {/* Photo placeholder — replace emoji with <img src="/photo.jpg" alt="Li Svensson" /> */}
          <div
            className="shrink-0 w-44 h-44 rounded-2xl border-4 border-warm-base dark:border-dark-base flex items-center justify-center text-6xl shadow-lg"
            style={{
              background: 'linear-gradient(145deg, #fde68a, #fb923c)',
              transform: 'rotate(-2deg)',
              boxShadow: '0 4px 20px rgba(249,115,22,0.15)',
            }}
            aria-label="Photo placeholder"
          >
            👤
          </div>

          {/* Bio */}
          <div className="space-y-4 text-[15px] leading-relaxed text-orange-900 dark:text-orange-200">
            <p>
              Hi! I'm Li — a full stack developer based in Sweden with a love for building
              things that are both beautiful and functional.
            </p>
            <p>
              I'm currently studying Computer Science and always working on something new.
              When I'm not coding, you'll find me on walks with Mango 🐾 or deep in a new side project.
            </p>
            <p>
              I care a lot about clean code, great UX, and making the web a little more delightful.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
