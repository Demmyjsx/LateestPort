import { FileCode2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  language: {
    name: string
    color: string
  }
  size: string
}

export function ProjectCard({ title, description, language, size }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCode2 className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: language.color }} />
            <span className="text-sm text-gray-600">{language.name}</span>
          </div>
          <span className="text-sm text-gray-500">{size}</span>
        </div>
      </CardContent>
    </Card>
  )
}

