import React, { useState } from "react";
import {
  BarChart,
  Euro,
  FileText,
  Plus,
  ChevronRight,
  Download,
} from "lucide-react";
import SelfNurseHeader from "../../components/selfemployed/Self-NurseHeader";

// Financial Stat Card Component
const StatCard = ({ label, value, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
    </div>
  </div>
);

// Transactions Table Component
const TransactionsTable = ({ transactions }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <h2 className="text-xl font-bold text-slate-900 mb-4">Transactions</h2>
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-slate-200">
          <th className="py-2 text-slate-600">Date</th>
          <th className="py-2 text-slate-600">Type</th>
          <th className="py-2 text-slate-600">Amount (€)</th>
          <th className="py-2 text-slate-600">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
            <td className="py-2 text-slate-900">{transaction.date}</td>
            <td className="py-2 text-slate-600">{transaction.type}</td>
            <td className="py-2 text-slate-900">€{transaction.amount}</td>
            <td
              className={`py-2 ${
                transaction.status === "Paid"
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}
            >
              {transaction.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Finance Page
const Finance = () => {
  const [transactions] = useState([
    { date: "2025-01-05", type: "Income", amount: 1500, status: "Paid" },
    { date: "2025-01-04", type: "Expense", amount: 300, status: "Paid" },
    { date: "2025-01-03", type: "Income", amount: 2000, status: "Pending" },
    { date: "2025-01-02", type: "Expense", amount: 500, status: "Paid" },
  ]);

  const totalEarnings = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalEarnings - totalExpenses;

  const outstandingInvoices = transactions.filter(
    (t) => t.type === "Income" && t.status === "Pending"
  ).length;

  const handleExportReport = () => {
    alert("Exporting financial report...");
  };

  const handleAddIncome = () => {
    alert("Add Income functionality will be implemented here.");
  };

  const handleAddExpense = () => {
    alert("Add Expense functionality will be implemented here.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <SelfNurseHeader />
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-700">
            Financial<span className="text-[#A390E4]"> Overview</span>
          </h1>
          <p className="text-lg text-slate-600">
            Manage your income, expenses, and financial reports efficiently.
          </p>
        </div>

        {/* Stat Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Total Earnings (€)"
            value={`€${totalEarnings}`}
            icon={Euro}
          />
          <StatCard
            label="Total Expenses (€)"
            value={`€${totalExpenses}`}
            icon={FileText}
          />
          <StatCard
            label="Net Profit (€)"
            value={`€${netProfit}`}
            icon={BarChart}
          />
          <StatCard
            label="Outstanding Invoices"
            value={outstandingInvoices}
            icon={FileText}
          />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleAddIncome}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Income
          </button>
          <button
            onClick={handleAddExpense}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Expense
          </button>
          <button
            onClick={handleExportReport}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Transactions Table */}
        <TransactionsTable transactions={transactions} />
      </main>
    </div>
  );
};

export default Finance;
