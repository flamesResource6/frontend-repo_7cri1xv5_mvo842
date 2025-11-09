import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const demo = [
  { id: 1, type: "expense", title: "Kopi Kampus", amount: 18000, date: "Hari ini" },
  { id: 2, type: "expense", title: "Transport Ojek", amount: 12000, date: "Kemarin" },
  { id: 3, type: "income", title: "Uang Saku", amount: 500000, date: "3 hari lalu" },
];

export default function RecentList() {
  const format = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="mx-auto max-w-md px-4 mt-6 pb-28">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-slate-800">Aktivitas Terbaru</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">Lihat semua</button>
      </div>
      <div className="rounded-xl border bg-white divide-y">
        {demo.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-4">
            <div className={`h-10 w-10 rounded-full grid place-items-center ${
              item.type === "income" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
            }`}>
              {item.type === "income" ? (
                <ArrowDownCircle className="h-5 w-5" />
              ) : (
                <ArrowUpCircle className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-500">{item.date}</p>
            </div>
            <div className={`text-sm font-semibold ${
              item.type === "income" ? "text-emerald-600" : "text-rose-600"
            }`}>
              {item.type === "income" ? "+" : "-"}{format(item.amount)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
