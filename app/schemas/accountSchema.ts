import { z } from "zod";

export const accountSchema = z.object({
  account_name: z.string({
    required_error: 'Account name is required',
    invalid_type_error: 'Account name must be a string'
  }).min(5, { message: 'Must be at least 5 characters' }),
  type: z.enum(['bank', 'credit_card', 'investment', 'loan', 'crypto'], {
    required_error: 'The type is required'
  }),
  balance: z.coerce.number({
    required_error: "Balance is required",
    invalid_type_error: "Balance must be a number",
  }).refine((val) => val >= 0, {
    message: "Balance must be non-negative",
  }),
  description: z.string({ required_error: 'The description is required', invalid_type_error: 'The type is invalid' }).min(5, { message: 'Must be at least 5 characters' }).max(50, { message: 'Must be at most 50 characters' })
})

export const partialSchema = accountSchema.partial()
