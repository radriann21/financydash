import { AccountInfo } from "../types/types"

export function setColor(account: AccountInfo) {
  const colors: Record<AccountInfo['type'], string> = {
    bank: 'stroke-green-500',
    credit_card: 'stroke-red-500',
    investment: 'stroke-purple-500',
    loan: 'stroke-orange-400',
    crypto: 'stroke-yellow-500',
  }
  const color = colors[account.type]
  return color
}