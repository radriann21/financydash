"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "../components/AppSidebar";
import { Toaster } from "@/components/ui/toaster"

import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()
  const getTitle = () => {
    if (pathname === "/dashboard/balance") return "Balance"
    if (pathname === "/dashboard/transactions") return "Transactions"
    if (pathname === "/dashboard/goals") return "Goals"
    if (pathname === "/dashboard/accounts") return "Accounts"
    return "Dashboard"
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-8 bg-[#0F0F12]"> 
        <div className="w-full flex items-center space-x-2">
          <div className="flex items-center">
            <SidebarTrigger />
            <Separator className="bg-slate-100 h-5" orientation="vertical" />
          </div>
          <h1 className="text-3xl font-bold text-white font-geistSans">{getTitle()}</h1>
        </div>
        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  )
}