"use client"

import { Button } from "@/components/ui/button"
import { EmptyState } from "../components/EmptyState"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeftRight, ClipboardX } from "lucide-react"
import { useUserStore } from "../store/UserStore"
import { TransactionRow } from "../components/TransactionRow"
import Link from "next/link"

export const TransactionsComponent = () => {

  const transactions = useUserStore((state) => state.user?.transactions)
  const slicedTransactions = transactions?.slice(0, 7)

  return (
    <Card className="col-span-4 row-span-1 p-4 bg-[#151518] h-fit font-geistSans">
      <CardHeader className="w-full">
        <div className="w-full flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Transactions</CardTitle>
          <Link className="inline-flex items-center" href="/dashboard/transactions">
            <Button className="text-[12px] font-semibold" disabled={transactions?.length === 0}>
              {slicedTransactions?.length === 0 
                ? 'No transactions yet' 
                : 'See all transactions'
              }
              <ArrowLeftRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        {
          slicedTransactions?.length === 0 
          ? <EmptyState 
              title="No transactions yet" 
              description="When you make a transaction, it will appear here." 
              icon={ClipboardX} 
            /> 
          : <Table>
          <TableCaption>A list of your recent transactions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              slicedTransactions?.map((transaction) => ( <TransactionRow key={transaction.id} transaction={transaction} /> ))
            }
          </TableBody>
        </Table>
        }
      </CardContent>
    </Card>
  )
}