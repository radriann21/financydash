"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, PlusIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CustomDialog } from "@/app/components/CustomDialog"
import { useUserStore } from "@/app/store/UserStore"
import { AccountCard } from "./AccountCard" 
import { AccountForm } from "@/app/components/AccountForm"

export default function AccountsPage() {
  const [type, setType] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const accounts = useUserStore((state) => state.user?.accounts)

  const filteredAccounts = accounts?.filter((account) => {
    const matchesType = !type || type === "all" || account.type === type
    const matchesSearch = account.account_name.toLowerCase().includes(search?.toLowerCase() || "")
    return matchesType && matchesSearch
  })

  return (
    <section className="w-full mt-4 font-geistSans">
      <section className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-fit">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search accounts..."
              className="pl-10 bg-[#1A1A1A] border-0 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400"
            />
          </div>
          <Select onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="All accounts" />
            </SelectTrigger>
            <SelectContent className="bg-[#151518]">
              <SelectItem value="all">All accounts</SelectItem>
              <SelectItem value="bank">Bank</SelectItem>
              <SelectItem value="credit_card">Credit Card</SelectItem>
              <SelectItem value="investment">Investment</SelectItem>
              <SelectItem value="loan">Loan</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <CustomDialog 
            icon={PlusIcon}
            btnTitle="Add Account"
            title="Add Account"
            description="Please, fill the form below to add a new account"
            Form={AccountForm}
          />
        </div>
      </section>
      <section className="mt-12 w-full grid grid-cols-2 gap-6">
        {
          filteredAccounts?.length === 0
          ? ('There is nothing here yet.')
          : (filteredAccounts?.map(account => 
            <AccountCard key={account.id} account={account} />
          ))
        }
      </section>
    </section>
  )
}