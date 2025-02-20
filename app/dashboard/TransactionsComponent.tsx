"use client"

import { Button } from "@/components/ui/button"
import { EmptyState } from "../components/EmptyState"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeftRight, ClipboardX } from "lucide-react"
import { useUserStore } from "../store/UserStore"
import { TransactionRow } from "../components/TransactionRow"

export const TransactionsComponent = () => {

  const transactions = useUserStore((state) => state.user?.transactions)

  return (
    <Card className="col-span-4 row-span-1 p-4 bg-[#151518] h-fit font-geistSans">
      <CardHeader className="w-full">
        <div className="w-full flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Transactions</CardTitle>
          <Button className="text-[12px] font-semibold" disabled={transactions?.length === 0}>
            {transactions?.length === 0 
              ? 'No transactions yet' 
              : 'See all transactions'
            }
            <ArrowLeftRight />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {
          transactions?.length === 0 
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
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              transactions?.map((transaction) => ( <TransactionRow key={transaction.id} transaction={transaction} /> ))
            }
          </TableBody>
        </Table>
        }
      </CardContent>
    </Card>
  )
}