"use client"

// import { useUserStore } from "../store/UserStore"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

export default function Dashboard() {
  // const user = useUserStore((state) => state.user)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}