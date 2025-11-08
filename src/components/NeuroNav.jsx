import { Search } from 'lucide-react';

export default function NeuroNav({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-content-center rounded bg-gradient-to-tr from-cyan-500 to-indigo-500 text-slate-950 font-extrabold">
            π
          </div>
          <span className="font-semibold tracking-tight text-white">Maths AA HL Hub</span>
        </div>

        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search chapters or topics..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900/80 py-2 pl-10 pr-4 text-sm text-slate-100 outline-none ring-cyan-500/20 placeholder:text-slate-500 focus:ring-4"
          />
        </div>

        <a href="#chapters" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-cyan-400 transition">
          Explore
        </a>
      </div>
    </header>
  );
}
