import { Transaction } from "../types/types";
import { TableRow, TableCell } from "@/components/ui/table"
import { useUserStore } from "../store/UserStore"
import { formatDate } from "../utils/formatDate"

export const TransactionRow = ({ transaction }: { transaction: Transaction }) => {

  const accounts = useUserStore((state) => state.user?.accounts);
  const findAccount = (id: string) => accounts?.find((account) => account.id === id);
  const account = findAccount(transaction.accountId);

  return (
    <TableRow key={transaction.id}>
      <TableCell>{formatDate(transaction.date)}</TableCell>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>{account?.account_name}</TableCell>
      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
      <TableCell>{transaction.type}</TableCell>
  </TableRow>
  )
}