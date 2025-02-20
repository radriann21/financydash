"use client"

import type { UserFinancialInfo, AccountInfo, GoalInfo, Transaction } from "@/app/types/types";
import { create } from "zustand";

type UserState = {
  user: UserFinancialInfo | null
}

type Action = {
  setUser: (user: UserFinancialInfo) => void,
  setAccount: (account: AccountInfo) => void,
  deleteAccount: (id: string) => void,
  editAccount: (id: string, account: AccountInfo) => void,
  setGoal: (goal: GoalInfo) => void
  deleteGoal: (id: string) => void
  setTransaction: (transaction: Transaction) => void
}

const storedUser = localStorage.getItem('user')
const user: UserFinancialInfo | null = storedUser ? JSON.parse(storedUser) : null

export const useUserStore = create<UserState & Action>((set) => ({
  user,
  setUser: (user: UserFinancialInfo) => set({ user }),
  setAccount: (account: AccountInfo) => set((state) => {
    if (!state.user) return state;
    
    const updatedAccounts = [...state.user.accounts, account]
    const newBalance = updatedAccounts.reduce((sum, account) => sum + account.balance, 0)

    const user = {
      ...state.user,
      totalBalance: newBalance,
      accounts: updatedAccounts
    }

    localStorage.setItem('user', JSON.stringify(user))

    return {
      user
    }
  }),
  deleteAccount: (id: string) => set((state) => {
    if (!state.user) return state;
    const updatedAccount = state.user.accounts.filter(account => account.id !== id)
    const newBalance = updatedAccount.reduce((sum, account) => sum + account.balance, 0)

    const user = {
      ...state.user,
      totalBalance: newBalance,
      accounts: updatedAccount
    }

    localStorage.setItem('user', JSON.stringify(user))

    return {
      user
    }
  }),
  editAccount: (id: string, account: AccountInfo) => set((state) => {
    if (!state.user) return state;
    
    const updatedAccounts = state.user.accounts.map((a) => a.id === id ? account : a)
    const newBalance = updatedAccounts.reduce((sum, account) => sum + account.balance, 0)
    
    const user = {
      ...state.user,
      totalBalance: newBalance,
      accounts: updatedAccounts
    }

    localStorage.setItem('user', JSON.stringify(user))

    return {
      user
    }
  }),
  setGoal: (goal: GoalInfo) => set((state) => {
    if (!state.user) return state;
    const updatedGoals = [...state.user.goals, goal]
    const user = {
      ...state.user,
      goals: updatedGoals
    }
    localStorage.setItem('user', JSON.stringify(user))
    return { user }
  }),
  deleteGoal: (id: string) => set((state) => {
    if (!state.user) return state;
    const updatedGoals = state.user.goals.filter(goal => goal.id !== id)
    const user = {
      ...state.user,
      goals: updatedGoals
    }
    localStorage.setItem('user', JSON.stringify(user))
    return { user }
  }),
  setTransaction: (transaction: Transaction) =>
    set((state) => {
      if (!state.user) return state;
  
      const updateAccountBalance = (account: AccountInfo): AccountInfo => {
        if (account.id !== transaction.accountId) return account;
  
        if (transaction.type === "expense" && account.balance < transaction.amount) {
          throw new Error("Insufficient balance in the account");
        }
  
        const newBalance =
          transaction.type === "expense"
            ? account.balance - transaction.amount
            : account.balance + transaction.amount;
  
        return { ...account, balance: newBalance };
      };

      const updatedAccounts = state.user.accounts.map(updateAccountBalance);
      const updatedBalance = updatedAccounts.reduce((sum, account) => sum + account.balance, 0);
  
      const user = {
        ...state.user,
        transactions: [...state.user.transactions, transaction],
        accounts: updatedAccounts,
        totalBalance: updatedBalance
      };
  
      localStorage.setItem("user", JSON.stringify(user));
  
      return { user }
    })
}))