import { BookDashed } from "lucide-react"

export const EmptyState = () => {
  return (
    <div className="max-w-full h-full p-2 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <BookDashed className="h-8 w-8 mb-4" />
        <h3 className="text-lg font-bold">There&apos;s nothing here yet.</h3>
        <span className="text-slate-300">Add a account to get started.</span>
      </div>
    </div>
  )
}