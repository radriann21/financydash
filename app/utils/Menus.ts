import { Goal, Home, Scale, Wallet, User, LogOut, ArrowLeftRight } from "lucide-react"

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
    title: "Transactions",
    url: "#",
    icon: ArrowLeftRight
  },
  {
    title: "Goals",
    url: "/dashboard/goals",
    icon: Goal,
  },
  {
    title: "Accounts",
    url: "/dashboard/accounts",
    icon: Wallet,
  },
]

export const UserMenu = [
  {
    title: 'User Settings',
    icon: User
  },
  {
    title: 'Logout',
    icon: LogOut
  }
]