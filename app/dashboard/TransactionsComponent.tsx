"use client"

import { Button } from "@/components/ui/button"
import { EmptyState } from "../components/EmptyState"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeftRight, ClipboardX } from "lucide-react"

export const TransactionsComponent = () => {

  const transactions = [
    {
      id: 1,
      date: '01/01/2024',
      description: 'Test',
      method: 'Cash',
      amount: 100,
      type: 'income'
    },
    {
      id: 2,
      date: '02/01/2024',
      description: 'Test 2',
      method: 'Credit Card',
      amount: 200,
      type: 'expense'
    },
    {
      id: 3,
      date: '03/01/2024',
      description: 'Test 3',
      method: 'Cash',
      amount: 300,
      type: 'income'
    },
    {
      id: 4,
      date: '04/01/2024',
      description: 'Test 4',
      method: 'Credit Card',
      amount: 400,
      type: 'expense'
    },
    {
      id: 5,
      date: '05/01/2024',
      description: 'Test 5',
      method: 'Cash',
      amount: 500,
      type: 'income'
    },
    {
      id: 6,
      date: '06/01/2024',
      description: 'Test 6',
      method: 'Credit Card',
      amount: 600,
      type: 'expense'
    }
  ]

  return (
    <Card className="col-span-4 row-span-1 p-4 bg-[#151518] h-fit font-geistSans">
      <CardHeader className="w-full">
        <div className="w-full flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Transactions</CardTitle>
          <Button className="font-semibold" disabled={transactions.length === 0}>
            {transactions.length === 0 
              ? 'No transactions yet' 
              : 'See all transactions'
            }
            <ArrowLeftRight />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {
          transactions.length === 0 
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
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        }
      </CardContent>
    </Card>
  )
}