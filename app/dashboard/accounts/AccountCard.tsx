"use client"
import { accountIcons } from "@/app/utils/accountsTypes"
import { AccountInfo } from "@/app/types/types"
import { setColor } from "@/app/utils/setColors"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { Edit } from "lucide-react"
import { useUserStore } from "@/app/store/UserStore"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CustomDialog } from "@/app/components/CustomDialog"
import { AccountForm } from "@/app/components/AccountForm"

export const AccountCard = ({ account }: { account: AccountInfo }) => {

  const deleteAccount = useUserStore((state) => state.deleteAccount)
  const Icon = accountIcons[account.type as keyof typeof accountIcons]
  const color = setColor(account)

  return (
    <article className="p-4 rounded-md border-slate-500 bg-[#151518]">
     <div className="w-full flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-md p-2 bg-slate-600/10 flex items-center justify-center">
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">{account.account_name}</h3>
          <span className="text-xs text-slate-400">{account.description}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">${account.balance.toFixed(2)}</h3>
      </div>
     </div>
     <div className="w-full flex items-center space-x-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="transition-all duration-300 ease-in-out hover:text-red-700 hover:shadow-sm hover:shadow-red-100">
            <Trash className="h-4 w-4" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure about delete this account?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the account and all of its data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteAccount(account.id)}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <CustomDialog 
        Form={AccountForm}
        elementId={account.id}
        icon={Edit}
        btnTitle="Edit Account"
        title="Edit Account"
        description="Please, fill the form below to edit the account"
      />
     </div>
    </article>
  )
}