import { Wallet, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center shadow">
            <Wallet className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 leading-tight">Personal Finance</p>
            <h1 className="text-lg font-semibold text-slate-800 leading-tight">DompetKu</h1>
          </div>
        </div>
        <button
          aria-label="Settings"
          className="p-2 rounded-lg hover:bg-slate-100 active:scale-95 transition"
        >
          <Settings className="h-5 w-5 text-slate-600" />
        </button>
      </div>
    </header>
  );
}
