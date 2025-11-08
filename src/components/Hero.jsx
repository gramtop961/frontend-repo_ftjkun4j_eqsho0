export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-1/2 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
          IBDP Mathematics AA HL
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Structured chapter-wise lectures, concise notes, and exam-style practice to help you master all 20 units.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="#chapters" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500 transition">Browse Chapters</a>
          <a href="#practice" className="rounded-lg bg-white px-5 py-2.5 text-slate-900 font-medium border border-slate-200 shadow-sm hover:bg-slate-50 transition">Quick Practice</a>
        </div>
      </div>
    </section>
  );
}
