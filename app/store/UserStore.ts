"use client"

import { create } from "zustand";

type UserState = {
  user: UserFinancialInfo | null
}

type Action = {
  setUser: (user: UserFinancialInfo) => void,
  setAccount: (account: AccountInfo) => void,
  deleteAccount: (id: string) => void
  editAccount: (id: string, account: AccountInfo) => void
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
  })
}))