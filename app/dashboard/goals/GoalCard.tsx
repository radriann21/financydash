/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoalInfo } from "@/types/types"
import { Trash } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useUserStore } from "@/app/store/UserStore"

export const GoalCard = ({ goal }: { goal: GoalInfo }) => {

  const deleteGoal = useUserStore((state) => state.deleteGoal)

  const formatDate = (date: any): string => {
    if (!date) return "Fecha no disponible"
    const parsedDate = new Date(date)
    return isNaN(parsedDate.getTime()) ? "Fecha inválida" : parsedDate.toDateString()
  }

  return (
    <div className="w-full rounded-md p-4 bg-[#151518]" key={goal.id}>
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-lg">{goal.name}</h3>
          <p className="text-slate-300">{goal.description}</p>
          <span className="block text-[12px] text-slate-500">Fecha limite: {formatDate(goal.deadline)}</span>
        </div>
        <button onClick={() => deleteGoal(goal.id)} className="text-slate-500 transition-colors duration-300 ease-in hover:text-red-300">
          <Trash className="h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col space-y-1 mt-4">
        <Progress value={goal.currentAmount} max={goal.targetAmount} />
        <div className="w-full flex items-center justify-between">
          <span className="text-sm">${goal.currentAmount} / ${goal.targetAmount}</span>
          <span className="text-sm">{(goal.currentAmount / goal.targetAmount * 100).toFixed(2)}%</span>
        </div>
      </div>
  </div>
  )
}