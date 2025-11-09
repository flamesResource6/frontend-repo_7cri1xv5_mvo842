import { Plus, PiggyBank, Target } from "lucide-react";

export default function QuickActions({ onAdd }) {
  return (
    <section className="mx-auto max-w-md px-4 mt-6">
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => onAdd?.("expense")}
          className="rounded-xl border bg-white px-3 py-4 text-center shadow-sm hover:shadow transition active:scale-95"
        >
          <div className="mx-auto h-9 w-9 rounded-full grid place-items-center bg-rose-50 text-rose-600">
            <Plus className="h-5 w-5" />
          </div>
          <p className="mt-2 text-sm font-medium text-slate-700">Catat</p>
          <p className="text-xs text-slate-500">Pengeluaran</p>
        </button>
        <button
          onClick={() => onAdd?.("income")}
          className="rounded-xl border bg-white px-3 py-4 text-center shadow-sm hover:shadow transition active:scale-95"
        >
          <div className="mx-auto h-9 w-9 rounded-full grid place-items-center bg-emerald-50 text-emerald-600">
            <Plus className="h-5 w-5" />
          </div>
          <p className="mt-2 text-sm font-medium text-slate-700">Catat</p>
          <p className="text-xs text-slate-500">Pemasukan</p>
        </button>
        <button className="rounded-xl border bg-white px-3 py-4 text-center shadow-sm hover:shadow transition active:scale-95">
          <div className="mx-auto h-9 w-9 rounded-full grid place-items-center bg-indigo-50 text-indigo-600">
            <PiggyBank className="h-5 w-5" />
          </div>
          <p className="mt-2 text-sm font-medium text-slate-700">Goal</p>
          <p className="text-xs text-slate-500">Tabungan</p>
        </button>
      </div>
    </section>
  );
}
