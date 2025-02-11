import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon, ArrowLeftRight, SquareArrowOutUpRight } from "lucide-react"
import { EmptyState } from "./EmptyState"

export const BalanceComponent = () => {

  const accounts:AccountInfo[] = [
    {
      id: '1',
      name: 'Main Savings',
      type: 'bank',
      balance: 238.45,
      description: 'Main savings account'
    },
    {
      id: '2',
      name: 'Credit Card',
      type: 'credit_card',
      balance: 500,
      creditLimit: 1000,
      description: 'Credit card'
    }
  ]

  return (
    <Card className="col-span-2 row-span-1">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          <span className="text-muted-foreground text-sm font-thin block">
            Total Balance
          </span>
          $238.45
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h5 className="text-slate-200">Accounts</h5>
        <ul className="w-full flex flex-col space-y-2 mt-2">
          {
            accounts.length === 0
            ? <EmptyState />
            : (accounts.map(account => (
              <li className="text-sm p-2 rounded-md duration-300 ease-in-out transition-colors hover:bg-slate-500/20 flex items-center justify-between" key={account.id}>
                <div className="flex flex-col space-y-1">
                  <h3 className="font-bold">{account.name}</h3>
                  <span className="text-sm text-slate-300">{account.description}</span>
                </div>
                <div>
                  <h3 className="font-bold">${account.balance}</h3>
                </div>
              </li>
            )))
          }
        </ul>
      </CardContent>
      <CardFooter className="flex items-center space-x-4">
        <Button className="text-[12px] font-semibold">
          Add Account
          <PlusIcon className="ml-1" />
        </Button>
        <Button className="text-[12px] font-semibold">
          New Transaction
          <ArrowLeftRight className="ml-1" />
        </Button>
        <Button className="text-[12px] font-semibold">
          All Accounts
          <SquareArrowOutUpRight className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}