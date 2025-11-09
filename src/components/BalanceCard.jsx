export default function BalanceCard({ balance = 1250000, income = 2000000, expense = 750000 }) {
  const format = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

  return (
    <section className="mx-auto max-w-md px-4 mt-4">
      <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
        <p className="text-sm/5 text-white/80">Saldo Saat Ini</p>
        <h2 className="text-3xl font-semibold tracking-tight mt-1">{format(balance)}</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/15 backdrop-blur p-3">
            <p className="text-xs text-white/80">Pemasukan</p>
            <p className="text-lg font-semibold">{format(income)}</p>
          </div>
          <div className="rounded-xl bg-white/15 backdrop-blur p-3">
            <p className="text-xs text-white/80">Pengeluaran</p>
            <p className="text-lg font-semibold">{format(expense)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
