import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificationCardProps {
  title: string
  organization: string
  image: string
  bgColor?: string
}

export function CertificationCard({ title, organization, image, bgColor = "bg-gray-100" }: CertificationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`${bgColor} p-8 flex items-center justify-center`}>
        <img src={image || "/placeholder.svg"} alt={title} className="h-24 object-contain" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">- {organization}</p>
      </CardContent>
    </Card>
  )
}

