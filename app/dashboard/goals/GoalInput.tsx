"use client"

enum GoalCategory {
  Financial = 'financial',
  Health = 'health',
  Personal = 'personal',
  Clothing = 'clothing',
  Entertainment = 'entertainment',
  Investment = 'investment',
  Trip = 'trip',
  Education = 'education',
  Gift = 'gift',
  Other = 'other'
}

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { goalSchema } from "@/app/schemas/goalSchema"
import { z } from "zod"
import { format } from "date-fns"
import { toast } from "@/hooks/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar" 
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { useUserStore } from "@/app/providers/userStoreProvider"


export const GoalInput = () => {

  const setGoal = useUserStore(state => state.setGoal)

  const form = useForm<z.infer<typeof goalSchema>>({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      name: '',
      description: '',
      category: GoalCategory.Other,
      targetAmount: 0,
      currentAmount: 0,
      deadline: new Date()
    }
  })
  
  function onSubmit(values: z.infer<typeof goalSchema>) {
    setGoal({ id: crypto.randomUUID(), ...values })
    toast({
      title: 'Goal Created',
      description: 'Your goal has been created successfully!'
    })
    form.reset()
  }

  return (
    <div className="w-full p-4 rounded-md bg-[#151518]">
      <h3 className="font-bold text-lg">Create your new goal</h3>
      <Form {...form}>
        <form className="space-y-4 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Goal Name</FormLabel>
                <FormControl>
                  <Input placeholder="Write your goal..." {...field} autoComplete="off" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="w-full flex items-center space-x-12">
            <FormField 
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Category</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="mr-2">Select a category</SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={GoalCategory.Personal}>Personal</SelectItem>
                      <SelectItem value={GoalCategory.Health}>Health</SelectItem>
                      <SelectItem value={GoalCategory.Financial}>Financial</SelectItem>
                      <SelectItem value={GoalCategory.Clothing}>Clothing</SelectItem>
                      <SelectItem value={GoalCategory.Entertainment}>Entertainment</SelectItem>
                      <SelectItem value={GoalCategory.Investment}>Investment</SelectItem>
                      <SelectItem value={GoalCategory.Trip}>Trip</SelectItem>
                      <SelectItem value={GoalCategory.Education}>Education</SelectItem>
                      <SelectItem value={GoalCategory.Gift}>Gift</SelectItem>
                      <SelectItem value={GoalCategory.Other}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="currentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter current amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="targetAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter target amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Deadline</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button className="bg-transparent border-[1px] border-input text-slate-100 hover:bg-transparent hover:text-slate-300">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {
                            field.value 
                            ? (format(field.value, "PPP"))
                            : (
                              <span>Pick a date</span>
                            )
                          }
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar 
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          <FormField 
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea className="h-28 resize-none" placeholder="Write your description..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button>Save Goal</Button>
        </form>
      </Form>
    </div>
  )
}