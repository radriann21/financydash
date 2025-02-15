import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AccountForm } from "./AccountForm"

export const AddAccountDialog = ({ id, btnTitle, title, description, icon: Icon  }: { id?: string; btnTitle: string; title: string; description: string; icon: React.ElementType }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[12px] font-semibold">
          {btnTitle}
          <Icon className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
         <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <AccountForm id={id} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}