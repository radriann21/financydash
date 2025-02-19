import { GoalInput } from "./GoalInput";
import { GoalList } from "./GoalsList";

export default function GoalsPage() {
  return (
    <section className="w-full mt-4 font-geistSans flex flex-col space-y-8">
      <GoalInput />
      <GoalList />
    </section>
  )
}