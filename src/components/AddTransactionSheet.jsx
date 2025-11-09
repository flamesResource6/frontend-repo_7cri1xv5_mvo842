import { useState } from "react";

export default function AddTransactionSheet({ type = "expense", open, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    const payload = {
      type,
      title,
      amount: Number(amount),
      date: new Date().toISOString(),
    };
    onSubmit?.(payload);
    setTitle("");
    setAmount("");
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white p-4 shadow-2xl">
        <div className="mx-auto max-w-md">
          <div className="h-1.5 mx-auto w-12 rounded-full bg-slate-200 mb-3" />
          <h4 className="text-lg font-semibold text-slate-800 mb-3">
            {type === "income" ? "Catat Pemasukan" : "Catat Pengeluaran"}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Judul</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={type === "income" ? "Contoh: Gaji paruh waktu" : "Contoh: Makan siang"}
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Jumlah (Rp)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="pt-1 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
