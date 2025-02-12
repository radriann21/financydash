import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { AccountForm } from "../components/AccountForm"

export const AddAccountDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[12px] font-semibold">
          Add Account
          <PlusIcon className="ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
         <DialogTitle>Add Account</DialogTitle>
          <DialogDescription>Please, fill the form below to add a new account</DialogDescription>
          <AccountForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}