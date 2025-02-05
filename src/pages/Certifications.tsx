import { CertificationCard } from "@/components/CertificationCard"

const certifications = [
  {
    title: "FinOps Certified Practioner",
    organization: "The Linux Foundation",
    image: "/certifications/finops.png",
    bgColor: "bg-yellow-200",
  },
  {
    title: "Full Stack Web Developer",
    organization: "Zuri Training",
    image: "/certifications/zuri.png",
    bgColor: "bg-teal-600",
  },
  {
    title: "DevOps Engineer",
    organization: "HNG Internship",
    image: "/certifications/hng.png",
    bgColor: "bg-blue-100",
  },
  {
    title: "Cloud DevOps Engineer",
    organization: "Udacity Nanodegree",
    image: "/certifications/udacity.png",
    bgColor: "bg-blue-200",
  },
]

export function Certifications() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} {...cert} />
        ))}
      </div>
    </div>
  )
}

