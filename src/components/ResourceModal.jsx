import { useEffect, useState } from 'react';
import { X, Play, FileText, ListChecks, ExternalLink } from 'lucide-react';

const TABS = [
  { key: 'lectures', label: 'Lectures', icon: Play },
  { key: 'notes', label: 'Notes', icon: FileText },
  { key: 'exercises', label: 'Practice', icon: ListChecks },
];

export default function ResourceModal({ chapter, onClose }) {
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
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{chapter.title}</h3>
            <p className="text-sm text-slate-600">{chapter.topics.join(' · ')}</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-slate-100">
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
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {resources.length === 0 ? (
            <p className="text-sm text-slate-600">No resources yet.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {resources.map((r, idx) => (
                <li key={idx} className="py-3 flex items-center justify-between">
                  <span className="text-slate-800">{r.title}</span>
                  <a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-slate-800">
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
