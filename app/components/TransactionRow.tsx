import { TableRow, TableCell } from "@/components/ui/table"
import type { Transaction } from "@/app/types/types"
import { useUserStore } from "@/app/store/UserStore"
import { formatDate } from "@/app/utils/formatDate"
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react"

const typeIcons = {
  income: <ArrowUpRight className="h-4 w-4 text-green-500" />,
  expense: <ArrowDownRight className="h-4 w-4 text-red-500" />,
  transfer: <MoveRight className="h-4 w-4 text-blue-500" />,
}

export const TransactionRow = ({ transaction }: { transaction: Transaction }) => {

  const accounts = useUserStore((state) => state.user?.accounts);
  const findAccount = (id: string) => accounts?.find((account) => account.id === id);
  const account = findAccount(transaction.accountId);

  return (
    <TableRow key={transaction.id} className="border-b border-[#333] hover:bg-[#222]">
      <TableCell className="text-gray-300">{formatDate(transaction.date)}</TableCell>
      <TableCell className="text-gray-300">{transaction.description}</TableCell>
      <TableCell className="text-gray-300">{account?.account_name}</TableCell>
      <TableCell
        className={`text-left font-medium ${transaction.amount >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {transaction.amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </TableCell>
      <TableCell className="text-gray-300">
        <div className="flex items-center justify-end gap-2">
          {typeIcons[transaction.type as keyof typeof typeIcons]}
          {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
        </div>
      </TableCell>
    </TableRow>
  )
}