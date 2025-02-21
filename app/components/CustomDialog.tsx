import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react";

export const CustomDialog = ({ btnTitle, title, description, Form, elementId }: { btnTitle: string; title: string; description: string; Form: React.ElementType; elementId?: string }) => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="text-[12px] font-semibold">
        {btnTitle}
        <PlusIcon />
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
       <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <Form id={elementId} />
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}