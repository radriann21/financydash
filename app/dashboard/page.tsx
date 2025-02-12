"use client"

// import { useUserStore } from "../store/UserStore"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "../components/AppSidebar";
import { BalanceComponent } from "./BalanceComponent";
import { IncomesExpensesComponent } from "./IncomesExpensesComponent";
import { TransactionsComponent } from "./TransactionsComponent";
import { Toaster } from "@/components/ui/toaster"

export default function Dashboard() {
  // const user = useUserStore((state) => state.user)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4"> 
        <div className="w-full flex items-center space-x-2">
          <div className="flex items-center">
            <SidebarTrigger />
            <Separator className="bg-slate-100 h-5" orientation="vertical" />
          </div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>
        <section className="mt-8 w-full grid grid-cols-4 grid-rows-2 gap-12 h-screen"> 
          <BalanceComponent />
          <IncomesExpensesComponent />
          <TransactionsComponent />
        </section>
        <Toaster />
      </main>
    </SidebarProvider>
  )
}