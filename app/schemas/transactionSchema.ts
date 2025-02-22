import { z } from "zod";

enum TransactionType {
  Income = 'income',
  Expense = 'expense'
}

export const transactionSchema = z.object({
  date: z.date({ required_error: 'The date is required', invalid_type_error: 'The date must be a date' }),
  description: z.string({ required_error: 'The description is required', invalid_type_error: 'The description must be a string' }).min(4, { message: 'Must be at least 4 characters' }),
  amount: z.coerce.number({ required_error: 'The amount is required', invalid_type_error: 'The amount must be a number' }).min(1, { message: 'Must be at least 1' }),
  type: z.nativeEnum(TransactionType, { required_error: 'The type is required', invalid_type_error: 'The type must be a TransactionType' }),
  accountId: z.string({ required_error: 'Need to select an account' })
})
