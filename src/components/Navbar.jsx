import { Search } from 'lucide-react';

export default function Navbar({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-indigo-600 text-white grid place-content-center font-bold">π</div>
          <span className="font-semibold tracking-tight">IBDP Maths AA HL Hub</span>
        </div>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search chapters or topics..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm outline-none ring-indigo-500/20 focus:ring-4"
          />
        </div>
        <a
          href="#chapters"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500 transition"
        >
          Explore
        </a>
      </div>
    </header>
  );
}
