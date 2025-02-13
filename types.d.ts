interface UserInfo { 
  id: string,
  username: string;
}

type AccountInfo = {
  id: string,
  account_name: string,
  type: 'bank' | 'credit_card' | 'investment' | 'loan' | 'crypto',
  balance: number,
  creditLimit?: number,
  description: string,
  icon?: React.ElementType
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
  type: 'income' | 'expense',
  account?: AccountInfo
}

type GoalInfo = {
  id: string,
  name: string,
  description: string,
  category: GoalCategory,
  targetAmount: number,
  currentAmount: number,
  deadline: Date
}

interface UserFinancialInfo extends UserInfo {
  totalBalance: number,
  income: number
  expenses: number,
  accounts: AccountInfo[]
  goals: GoalInfo[]
  transactions: Transaction[]
}