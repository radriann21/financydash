import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookDashed, SquareArrowOutUpRight } from "lucide-react";
import { EmptyState } from "../components/EmptyState";
import { useUserStore } from "../providers/userStoreProvider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AccountItem } from "../components/AccountItem";
import { CustomDialog } from "../components/CustomDialog";
import { AccountForm } from "../components/AccountForm";
import { TransactionsForm } from "../components/TransactionsForm";
import Link from "next/link";

export const BalanceComponent = () => {
  const accounts = useUserStore((state) => state.user?.accounts);
  const totalBalance = useUserStore((state) => state.user?.totalBalance);

  return (
    <Card className="col-span-2 row-span-1 bg-[#151518] font-geistSans flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          <span className="text-muted-foreground text-sm block">Total Balance</span>
          ${totalBalance?.toFixed(2)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <h5 className="text-slate-200">Accounts</h5>
        <ScrollArea className="h-[calc(100%-1rem)] w-full mt-4 px-2">
          {accounts?.length === 0 ? (
            <EmptyState
              title="There's nothing here yet."
              description="Add an account to get started."
              icon={BookDashed}
            />
          ) : (
            accounts?.map((account) => (
              <AccountItem key={account.id} account={account} />
            ))
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex items-center space-x-4 mt-4">
        <CustomDialog 
          btnTitle="Add Account"
          title="Add Account" 
          description="Please, fill the form below to add a new account"
          Form={AccountForm}
        />
        <CustomDialog 
          btnTitle="New Transaction"
          title="Add Transaction" 
          description="Please, fill the form below to add a new transaction"
          Form={TransactionsForm}
        />
        <Link href="/dashboard/accounts">
          <Button className="text-[12px] font-semibold">
            All Accounts
            <SquareArrowOutUpRight className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};