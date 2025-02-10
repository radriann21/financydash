import { create } from "zustand";

type UserState = {
  user: UserFinancialInfo | null
}

type Action = {
  setUser: (user: UserFinancialInfo) => void
}

const storedUser = localStorage.getItem('user')
const user: UserFinancialInfo = storedUser ? JSON.parse(storedUser) : null

export const useUserStore = create<UserState & Action>((set) => ({
  user,
  setUser: (user: UserFinancialInfo) => set(() => ({ user }))
}))