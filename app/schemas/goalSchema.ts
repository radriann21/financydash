import { z } from "zod";

export enum GoalCategory {
  Financial = 'financial',
  Health = 'health',
  Personal = 'personal',
  Clothing = 'clothing',
  Entertainment = 'entertainment',
  Investment = 'investment',
  Trip = 'trip',
  Education = 'education',
  Gift = 'gift',
  Other = 'other'
}

export const goalSchema = z.object({
  name: z.string({
    required_error: 'The name is required',
    invalid_type_error: 'The name must be a string'
  }).min(8, { message: 'Must be at least 8 characters' }).max(80, { message: 'Must be at most 80 characters' }),
  description: z.string({
    required_error: 'The description is required',
    invalid_type_error: 'The description must be a string'
  }).max(200, { message: 'Must be at most 200 characters' }),
  category: z.nativeEnum(GoalCategory, {
    required_error: 'The category is required'
  }),
  targetAmount: z.coerce.number({
    required_error: 'The target amount is required', 
    invalid_type_error: 'The target amount must be a number'}).min(1, { message: 'Must be at least 1' }).refine((val) => val > 0, {
      message: "Target amount must be non-negative"
    }),
  currentAmount: z.coerce.number({
    required_error: 'The current amount is required', 
    invalid_type_error: 'The current amount must be a number'}).min(0, { message: 'Must be at least 0' }),
  deadline: z.date({required_error: 'The deadline is required'})
})