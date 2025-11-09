import { useMemo, useState } from "react";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import QuickActions from "./components/QuickActions";
import RecentList from "./components/RecentList";
import AddTransactionSheet from "./components/AddTransactionSheet";

function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetType, setSheetType] = useState("expense");
  const [items, setItems] = useState([
    { id: 1, type: "expense", title: "Kopi Kampus", amount: 18000, date: new Date().toISOString() },
    { id: 2, type: "expense", title: "Transport Ojek", amount: 12000, date: new Date().toISOString() },
    { id: 3, type: "income", title: "Uang Saku", amount: 500000, date: new Date().toISOString() },
  ]);

  const totals = useMemo(() => {
    const income = items.filter(i => i.type === "income").reduce((s, i) => s + i.amount, 0);
    const expense = items.filter(i => i.type === "expense").reduce((s, i) => s + i.amount, 0);
    return { income, expense, balance: income - expense };
  }, [items]);

  const handleAdd = (type) => {
    setSheetType(type);
    setSheetOpen(true);
  };

  const handleSubmit = (payload) => {
    setItems((prev) => [{ id: Date.now(), ...payload }, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <Header />
      <main className="pb-24">
        <BalanceCard balance={totals.balance} income={totals.income} expense={totals.expense} />
        <QuickActions onAdd={handleAdd} />
        <RecentList />
      </main>

      <AddTransactionSheet
        type={sheetType}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSubmit={handleSubmit}
      />

      <div className="fixed inset-x-0 bottom-0 z-20 bg-white border-t">
        <div className="mx-auto max-w-md px-4">
          <div className="grid grid-cols-3 gap-3 py-3 text-center text-sm">
            <button className="py-2 rounded-lg bg-indigo-600 text-white font-medium">Beranda</button>
            <button className="py-2 rounded-lg hover:bg-slate-100" onClick={() => handleAdd("expense")}>Catat</button>
            <button className="py-2 rounded-lg hover:bg-slate-100">Profil</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
