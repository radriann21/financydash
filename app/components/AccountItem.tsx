import { accountIcons } from "../utils/accountsTypes"
import { setColor } from "../utils/setColors"

export const AccountItem = ({ account }: { account: AccountInfo }) => {
  const Icon = accountIcons[account.type as keyof typeof accountIcons]
  const color = setColor(account)

  return (
    <li className="text-[12px] p-2 rounded-md duration-300 ease-in-out transition-colors hover:bg-slate-500/20 flex items-center justify-between" key={account.id}>
      <div className="flex space-x-4">
        <div className="rounded-md p-2 bg-slate-600/10 flex items-center justify-center">
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div>
          <h3 className="font-bold text-white">{account.account_name}</h3>
          <span className="text-slate-400">{account.description}</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-white">${account.balance.toFixed(2)}</h3>
      </div>
    </li>
  )
}