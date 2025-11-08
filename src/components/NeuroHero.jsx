import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function NeuroHero() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
          <Rocket className="h-4 w-4" /> IBDP Mathematics AA HL
        </span>
        <h1 className="mt-4 bg-gradient-to-r from-cyan-200 via-sky-200 to-indigo-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          A 3D Hub for Mastering Math
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Explore 20 chapters with lectures, notes, and practice. Search, filter, and learn with a futuristic, academic vibe.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#chapters" className="rounded-lg bg-cyan-500 px-5 py-2.5 text-slate-900 font-medium shadow hover:bg-cyan-400 transition">
            Browse Chapters
          </a>
          <a href="#practice" className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-slate-200 hover:border-cyan-500/50 hover:text-white transition">
            Quick Practice
          </a>
        </div>
      </div>
    </section>
  );
}
