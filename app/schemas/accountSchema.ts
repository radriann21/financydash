import { z } from "zod";

const accountSchema = z.object({
  account_name: z.string({
    required_error: 'Account name is required',
    invalid_type_error: 'Account name must be a string'
  }).min(5, { message: 'Must be at least 5 characters' }),
  type: z.enum(['bank', 'credit_card', 'investment', 'loan'], {
    required_error: 'The type is required'
  }),
  balance: z.string().transform((val) => parseFloat(val)).refine((val) => !isNaN(val), {
    message: "Must be a valid number",
  }),
  description: z.string({ required_error: 'The description is required', invalid_type_error: 'The type is invalid' }).min(5, { message: 'Must be at least 5 characters' })
})

export default accountSchema 