import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { TransactionsTable } from "./TransactionsTable"
import { CustomDialog } from "@/app/components/CustomDialog"
import { TransactionsForm } from "@/app/components/TransactionsForm"

export default function TransactionsPage() {
  return (
    <section className="w-full mt-4 font-geistSans">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-fit">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search description..."
              className="pl-10 bg-[#1A1A1A] border-0 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-400"
            />
          </div>
          <Select>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CustomDialog 
          title="Add Transaction"
          btnTitle="New Transaction"
          description="Please, fill the form below to add a new transaction"
          Form={TransactionsForm}
        />
      </div>
      <section className="mt-4 w-full h-full">
        <TransactionsTable />
      </section>
    </section>
  )
}