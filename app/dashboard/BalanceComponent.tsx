"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AddAccountDialog } from "../components/AddAccountDialog"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, BookDashed, SquareArrowOutUpRight } from "lucide-react"
import { EmptyState } from "../components/EmptyState"
import { useUserStore } from "../store/UserStore"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AccountItem } from "../components/AccountItem"
import Link from "next/link"

export const BalanceComponent = () => {

  const accounts = useUserStore((state) => state.user?.accounts)
  const totalBalance = useUserStore((state) => state.user?.totalBalance)

  return (
    <Card className="col-span-2 row-span-1 h-full bg-[#151518] font-geistSans">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          <span className="text-muted-foreground text-sm block">
            Total Balance
          </span>
          ${totalBalance?.toFixed(2)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h5 className="text-slate-200">Accounts</h5>
          <ul className="w-full flex flex-col space-y-2 mt-4">
        <ScrollArea className="w-full scroll-smooth px-2">
            {
              accounts?.length === 0
              ? <EmptyState title="There&apos;s nothing here yet." description="Add a account to get started." icon={BookDashed} />
              : (accounts?.map(account => <AccountItem key={account.id} account={account} /> ))
            }
        </ScrollArea>
          </ul>
      </CardContent>
      <CardFooter className="flex items-center space-x-4 mt-12">
        <AddAccountDialog />
        <Button className="text-[12px] font-semibold">
          New Transaction
          <ArrowLeftRight className="ml-1" />
        </Button>
        <Link href="/dashboard/accounts">
          <Button className="text-[12px] font-semibold">
            All Accounts
            <SquareArrowOutUpRight className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}