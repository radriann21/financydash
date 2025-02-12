import { z } from "zod";

const userSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string'
  }).min(5, { message: 'Must be at least 5 characters' }),
})

export default userSchema