import { Brain, Timer, Target } from 'lucide-react';

export default function QuickPractice() {
  const chips = [
    'Algebra',
    'Functions',
    'Trigonometry',
    'Calculus',
    'Vectors',
    'Complex',
    'Probability',
    'Statistics',
  ];

  return (
    <section id="practice" className="relative py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-10 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-indigo-500/40 to-cyan-500/40 ring-1 ring-white/10">
            <Brain className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Quick Practice</h2>
            <p className="text-sm text-slate-300">Pick a topic and jump into a timed mini set.</p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button key={c} className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-cyan-500/50 hover:text-white transition">
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PracticeCard
            title="5-question Sprint"
            subtitle="Sharpen concepts in 3 minutes"
            icon={Timer}
            accent="from-cyan-500/30 to-indigo-500/30"
          />
          <PracticeCard
            title="10-question Drill"
            subtitle="Exam-style mix"
            icon={Target}
            accent="from-indigo-500/30 to-fuchsia-500/30"
          />
          <PracticeCard
            title="Mixed Review"
            subtitle="Adaptive difficulty"
            icon={Brain}
            accent="from-emerald-500/30 to-cyan-500/30"
          />
        </div>
      </div>
    </section>
  );
}

function PracticeCard({ title, subtitle, icon: Icon, accent }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-xl transition hover:border-cyan-500/40">
      <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-2xl`} />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
        </div>
        <div className="grid h-10 w-10 place-content-center rounded-xl bg-slate-800/60 ring-1 ring-white/10 group-hover:ring-cyan-400/40">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-cyan-400 transition">
          Start
        </button>
        <button className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-cyan-500/50 hover:text-white transition">
          Details
        </button>
      </div>
    </div>
  );
}
