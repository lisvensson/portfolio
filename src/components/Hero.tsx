import { Link } from 'react-scroll';
import MangoDog from './MangoDog';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pb-16 bg-warm-base dark:bg-dark-base"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 25%, rgba(251,146,60,0.13) 0%, transparent 45%),
          radial-gradient(circle at 85% 75%, rgba(252,211,77,0.10) 0%, transparent 45%)
        `,
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(234,88,12,0.09) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'rgba(251,146,60,0.14)', filter: 'blur(70px)' }} />
      <div className="absolute -bottom-8 -left-16 w-60 h-60 rounded-full pointer-events-none" style={{ background: 'rgba(252,211,77,0.11)', filter: 'blur(70px)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <MangoDog />

        <p className="mt-6 text-xs font-bold tracking-[0.2em] uppercase text-orange-600">
          Full Stack Developer
        </p>

        <h1 className="mt-2 text-5xl sm:text-6xl font-black text-warm-dark dark:text-orange-100 leading-tight">
          Hi, I'm <span className="text-orange-600">Li</span> 👋
        </h1>

        <div className="w-10 h-0.5 bg-orange-500 rounded-full my-3" />

        <p className="text-base text-orange-900 dark:text-orange-300 max-w-sm">
          I build clean, fast, and modern web experiences.
        </p>
        <p className="text-sm text-amber-700 dark:text-amber-500 italic mt-1 max-w-sm">
          & yes, that floating cutie is Mango. He approves of this website.
        </p>

        <Link
          to="projects"
          smooth
          duration={600}
          offset={-64}
          className="mt-8 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-orange-500/30 cursor-pointer transition-colors duration-200"
        >
          View my projects ↓
        </Link>
      </div>

      <span className="absolute bottom-6 text-sm text-amber-600 animate-bounce-arrow select-none">↓</span>
    </section>
  );
}
