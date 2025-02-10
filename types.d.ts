interface UserInfo { 
  id: string,
  username: string;
}

type AccountInfo = {
  id: string,
  name: string,
  type: 'bank' | 'credit_card' | 'investment' | 'loan'
  balance: number,
  creditLimit?: number,
  typeOfAccount: string,
  description: string
}

enum GoalCategory {
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

type Transaction = {
  id: string,
  date: Date,
  description: string,
  amount: number,
  type: 'income' | 'expense'
}

type GoalInfo = {
  id: string,
  name: string,
  description: string,
  category: GoalCategory,
  targetAmount: number,
  currentAmount: number
}

interface UserFinancialInfo extends UserInfo {
  balance: number,
  income: number
  expenses: number,
  accounts: AccountInfo[],
  goals: GoalInfo[],
  transactions: Transaction[]
}