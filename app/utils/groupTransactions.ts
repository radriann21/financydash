import { Transaction } from "../types/types";

enum TransactionType {
  Income = 'income',
  Expense = 'expense'
}

export const groupTransactions = (transactions: Transaction[]) => {
  const groupedData: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date)
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

    if (!groupedData[monthYear]) {
      groupedData[monthYear] = { income: 0, expense: 0 }
    }

    if (transaction.type === TransactionType.Income) {
      groupedData[monthYear].income += transaction.amount
    } else if (transaction.type === TransactionType.Expense) {
      groupedData[monthYear].expense += transaction.amount
    }
  })

  return Object.keys(groupedData)
  .sort()
  .map((monthYear) => ({
    month: monthYear,
    income: groupedData[monthYear].income,
    expense: groupedData[monthYear].expense,
  }))
}