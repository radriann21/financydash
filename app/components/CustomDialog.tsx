import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const CustomDialog = ({ btnTitle, title, description, icon: Icon, Form, elementId }: { btnTitle: string; title: string; description: string; icon: React.ElementType; Form: React.ElementType; elementId?: string }) => {
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
        <Form id={elementId} />
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}