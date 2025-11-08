import { FileText, Play, ListChecks, BookOpen } from 'lucide-react';

function ChapterCard({ chapter, onSelect }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{chapter.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{chapter.topics.join(' · ')}</p>
        </div>
        <span className="rounded-full bg-indigo-50 text-indigo-600 text-xs px-2 py-1">
          {chapter.resources.lectures.length + chapter.resources.notes.length + chapter.resources.exercises.length} resources
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <button onClick={() => onSelect({ ...chapter, tab: 'lectures' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
          <Play className="h-4 w-4" /> Lectures
        </button>
        <button onClick={() => onSelect({ ...chapter, tab: 'notes' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
          <FileText className="h-4 w-4" /> Notes
        </button>
        <button onClick={() => onSelect({ ...chapter, tab: 'exercises' })} className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
          <ListChecks className="h-4 w-4" /> Practice
        </button>
      </div>
    </div>
  );
}

export default function ChaptersSection({ chapters, onSelect }) {
  return (
    <section id="chapters" className="pb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><BookOpen className="h-6 w-6"/> Chapters</h2>
        <span className="text-sm text-slate-600">{chapters.length} shown</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((c) => (
          <ChapterCard key={c.id} chapter={c} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
