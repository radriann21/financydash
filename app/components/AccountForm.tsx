"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useUserStore } from "../store/UserStore"
import { Import } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

import { accountSchema, partialSchema } from "../schemas/accountSchema"

export const AccountForm = ({ id }: { id?: string }) => {

  const toast = useToast()
  const setAccount = useUserStore((state) => state.setAccount)
  const editAccount = useUserStore((state) => state.editAccount)
  const accounts = useUserStore((state) => state.user?.accounts)

  const initialData = id ? accounts?.find((account) => account.id === id) : null;
  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(id ? partialSchema : accountSchema),
    defaultValues: initialData ?? {
      account_name: '',
      type: undefined,
      balance: 0,
      description: ''
    }
  })

  const onSubmit = (values: z.infer<typeof accountSchema>) => {
    if (id && initialData) {
      editAccount(id, { ...initialData, ...values });
      toast.toast({
        title: "Account updated",
        description: "Your account has been updated successfully",
      });
    } else {
      setAccount({ id: crypto.randomUUID(), ...values });
      toast.toast({
        title: "Account added",
        description: "Your account has been added successfully",
      });
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-6 mt-4 font-geistSans" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
            control={form.control}
            name="account_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter account name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bank">Bank</SelectItem>
                      <SelectItem value="credit_card">Credit Card</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="loan">Loan</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                    </SelectContent>
                  </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="balance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Balance</FormLabel>
                <FormControl>
                  <Input placeholder="Enter account balance" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe purpouse of the account"
                    className="resize-none h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            Save Account
            <Import className="ml-2" />
          </Button>
      </form>
    </Form>
  )
}