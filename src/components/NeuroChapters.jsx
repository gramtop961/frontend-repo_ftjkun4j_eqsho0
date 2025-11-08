import { FileText, Play, ListChecks, BookOpen } from 'lucide-react';

function ChapterCard({ chapter, onSelect }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg ring-1 ring-white/5 transition hover:border-cyan-500/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{chapter.topics.join(' · ')}</p>
        </div>
        <span className="rounded-full bg-cyan-500/10 text-cyan-300 text-xs px-2 py-1 ring-1 ring-cyan-400/20">
          {chapter.resources.lectures.length + chapter.resources.notes.length + chapter.resources.exercises.length} resources
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <button onClick={() => onSelect({ ...chapter, tab: 'lectures' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 hover:border-cyan-500/40 hover:text-white">
          <Play className="h-4 w-4" /> Lectures
        </button>
        <button onClick={() => onSelect({ ...chapter, tab: 'notes' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 hover:border-cyan-500/40 hover:text-white">
          <FileText className="h-4 w-4" /> Notes
        </button>
        <button onClick={() => onSelect({ ...chapter, tab: 'exercises' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 hover:border-cyan-500/40 hover:text-white">
          <ListChecks className="h-4 w-4" /> Practice
        </button>
      </div>
    </div>
  );
}

export default function NeuroChapters({ chapters, onSelect }) {
  return (
    <section id="chapters" className="relative py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2"><BookOpen className="h-6 w-6 text-cyan-300"/> Chapters</h2>
          <span className="text-sm text-slate-300">{chapters.length} shown</span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <ChapterCard key={c.id} chapter={c} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
