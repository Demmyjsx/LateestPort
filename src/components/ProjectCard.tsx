import { FileCode2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string
  description: string
  language: {
    name: string
 
  }
  href: string
}

export function ProjectCard({ title, description, language, href }: ProjectCardProps) {
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
            <span className="w-3 h-3 rounded-full"  />
            <span className="text-sm text-gray-600">{language.name}</span>
          </div>
          <Link to={href} className="text-sm text-gray-500">{href}</Link>
        </div>
      </CardContent>
    </Card>
  )
}

