import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AddAccountDialog } from "./AddAccountDialog"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, BookDashed, SquareArrowOutUpRight } from "lucide-react"
import { EmptyState } from "../components/EmptyState"
import { useUserStore } from "../store/UserStore"
import { ScrollArea } from "@/components/ui/scroll-area"

export const BalanceComponent = () => {

  const accounts = useUserStore((state) => state.user?.accounts)

  return (
    <Card className="col-span-2 row-span-1 h-full bg-[#151518] space-y-8 font-geistSans">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          <span className="text-muted-foreground text-sm block">
            Total Balance
          </span>
          $238.45
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h5 className="text-slate-200">Accounts</h5>
          <ul className="w-full flex flex-col space-y-2 mt-2">
        <ScrollArea className="h-40 w-full scroll-smooth">
            {
              accounts?.length === 0
              ? <EmptyState title="There&apos;s nothing here yet." description="Add a account to get started." icon={BookDashed} />
              : (accounts?.map(account => (
                <li className="text-sm p-2 rounded-md duration-300 ease-in-out transition-colors hover:bg-slate-500/20 flex items-center justify-between" key={account.id}>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold">{account.account_name}</h3>
                    <span className="text-sm text-slate-300">{account.description}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">${account.balance}</h3>
                  </div>
                </li>
              )))
            }
        </ScrollArea>
          </ul>
      </CardContent>
      <CardFooter className="flex items-center space-x-4">
        <AddAccountDialog />
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