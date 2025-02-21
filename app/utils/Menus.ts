import { Goal, Home, Scale, Wallet, User, LogOut, ArrowLeftRight } from "lucide-react"

export const SidebarItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Balance",
    url: "/dashboard",
    icon: Scale,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
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
    url: '/dashboard/user',
    icon: User
  },
  {
    title: 'Logout',
    url: '#',
    icon: LogOut
  }
]