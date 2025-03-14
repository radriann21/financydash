"use client"

import { useRouter } from "next/navigation"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userSchema from "../schemas/userShema"
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "../providers/userStoreProvider";
import type { UserFinancialInfo } from "../types/types";

export function UserForm() {
  const setUser = useUserStore((state) => state.setUser)
  const router = useRouter()
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: ''
    }
  })

  function onSubmit(values: z.infer<typeof userSchema>) {
    const { username } = values
    const user:UserFinancialInfo = {
      username,
      id: crypto.randomUUID(),
      totalBalance: 0,
      income: 0,
      expenses: 0,
      accounts: [],
      goals: [],
      transactions: []
    }
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(user))
      router.push(`/dashboard`)
      setUser(user)
      return
    }
    router.push(`/dashboard`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-fit mx-auto text-left">
        <FormField 
          control={form.control} 
          name="username"
          render={({field}) => 
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Write the username..." {...field} autoComplete="off" />
              </FormControl>
              <FormDescription>
                This is the username for display on dashboard
              </FormDescription>
              <FormMessage />
            </FormItem>
          }
        />
        <Button type="submit" className="w-full font-bold">Submit</Button>
      </form>
    </Form>
  )
}