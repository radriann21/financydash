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
import { AccountForm } from "./AccountForm"

export const AddAccountDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-semibold">
          Add Account
          <PlusIcon />
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