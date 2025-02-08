"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const userSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string'
  }).min(5, { message: 'Must be at least 5 characters' })
})

export function UserForm() {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: ''
    }
  })

  function onSubmit(values: z.infer<typeof userSchema>) {
    const { username } = values
    if (!localStorage.getItem(username)) {
      localStorage.setItem('username', username)
    }
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