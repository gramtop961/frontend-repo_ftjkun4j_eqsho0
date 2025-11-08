import { useEffect, useState } from 'react';
import { X, Play, FileText, ListChecks, ExternalLink } from 'lucide-react';

const TABS = [
  { key: 'lectures', label: 'Lectures', icon: Play },
  { key: 'notes', label: 'Notes', icon: FileText },
  { key: 'exercises', label: 'Practice', icon: ListChecks },
];

export default function NeuroModal({ chapter, onClose }) {
  const [tab, setTab] = useState('lectures');

  useEffect(() => {
    if (!chapter) return;
    setTab(chapter.tab || 'lectures');
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [chapter, onClose]);

  if (!chapter) return null;
  const resources = chapter.resources[tab] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-slate-800/60 p-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
            <p className="text-sm text-slate-300">{chapter.topics.join(' · ')}</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-300 hover:bg-slate-800/60">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 pt-3">
          <div className="flex gap-2">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition ${
                  tab === key
                    ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200'
                    : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {resources.length === 0 ? (
            <p className="text-sm text-slate-300">No resources yet.</p>
          ) : (
            <ul className="divide-y divide-slate-800/60">
              {resources.map((r, idx) => (
                <li key={idx} className="py-3 flex items-center justify-between">
                  <span className="text-slate-100">{r.title}</span>
                  <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 text-slate-950 px-3 py-1.5 text-xs font-medium hover:bg-cyan-400">
                    Open <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
