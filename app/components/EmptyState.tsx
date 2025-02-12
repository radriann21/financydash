export const EmptyState = ({ 
  title, 
  description, 
  icon: Icon 
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="max-w-full h-full p-2 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Icon className="h-8 w-8 mb-4" />
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-slate-300">{description}</span>
      </div>
    </div>
  )
}