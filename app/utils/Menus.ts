import { Goal, Home, Scale, Wallet, Settings, User, Laugh, LogOut } from "lucide-react"

export const SidebarItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Balance",
    url: "#",
    icon: Scale,
  },
  {
    title: "Goals",
    url: "#",
    icon: Goal,
  },
  {
    title: "Accounts",
    url: "/dashboard/accounts",
    icon: Wallet,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export const UserMenu = [
  {
    title: 'User Settings',
    icon: User
  },
  {
    title: 'Support',
    icon: Laugh
  },
  {
    title: 'Logout',
    icon: LogOut
  }
]