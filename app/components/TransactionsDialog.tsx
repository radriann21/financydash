import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react" 
import { TransactionsForm } from "./TransactionsForm"

export const TransactionsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[12px] font-semibold">
          New Transaction
          <ArrowLeftRight className="ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="space-y-1">
        <DialogHeader>
          <DialogTitle>Add a new transaction</DialogTitle>
          <DialogDescription>
            Fill the form below to add the new transaction.
          </DialogDescription>
        </DialogHeader>
        <TransactionsForm />
      </DialogContent>
    </Dialog>
  )
}