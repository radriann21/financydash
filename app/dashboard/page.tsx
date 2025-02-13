"use client"

import { BalanceComponent } from "./BalanceComponent";
import { IncomesExpensesComponent } from "./IncomesExpensesComponent";
import { TransactionsComponent } from "./TransactionsComponent";

export default function Dashboard() {
  return (
    <section className="mt-4 w-full grid grid-cols-4 grid-rows-2 gap-4 min-h-screen"> 
      <BalanceComponent />
      <IncomesExpensesComponent />
      <TransactionsComponent />
    </section>
  )
}