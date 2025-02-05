interface SkillCardProps {
    name: string
    icon: string
  }
  
  export function SkillCard({ name, icon }: SkillCardProps) {
    return (
      <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
        <img src={icon || "/placeholder.svg"} alt={name} className="w-12 h-12 object-contain" />
        <span className="text-sm text-gray-600">{name}</span>
      </div>
    )
  }
  
  