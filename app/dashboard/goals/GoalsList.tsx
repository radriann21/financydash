"use client"

import { useUserStore } from "@/app/store/UserStore"
import { EmptyState } from "@/app/components/EmptyState"
import { BookDashed } from "lucide-react"
import { GoalCard } from "./GoalCard"

export const GoalList = () => {
  
  const goals = useUserStore((state) => state.user?.goals)
  
  return (
    <section className="w-full mt-4 flex flex-col space-y-4">
      {
        goals?.length === 0
        ? (<EmptyState title="There's nothing here yet." description="Add a goal to get started" icon={BookDashed} />)
        : (goals?.map((goal) => (<GoalCard key={goal.id} goal={goal} />)))
      }
    </section>
  )
}