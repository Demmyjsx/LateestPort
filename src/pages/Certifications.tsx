import { CertificationCard } from "@/components/CertificationCard"


const certifications = [
  {
    title: "certificate of proficiency information system management",
    organization: "Aptech",
    image: "assets/information systems.webp",
    bgColor: "bg-yellow-200",
  },
  {
    title: "Software engineering and leadership training",
    organization: "Decagon",
    image: "assets/NOde.jpeg",
    bgColor: "bg-teal-600",
  },
  {
    title: "Advance diploma software engineering",
    organization: "Aptech",
    image: "assets/diplima.webp",
    bgColor: "bg-blue-100",
  },
 
]

export function Certifications() {
  return (
    <>
     <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} {...cert} />
        ))}
      </div>

      
    </div>
    
    
    </>
   
  )
}

