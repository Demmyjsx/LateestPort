import { ProjectCard } from "@/components/ProjectCard";



const projects = [
  {
    title: "Therosebud",
    description: "online food resturant",
    language: { name: "REACT"},
    href: "https://therosebud.netlify.app/",
  },
  {
    title: "Obrianholdingltd",
    description: "investment and Real estate website",
    language: { name: "REACT", },
    href: "https://brianholdingltd.com/",
  },
  {
    title: "go-express",
    description: "LOGISTICS website",
    language: { name: "REACT & TYPESCRIPT" },
    href: "https://go-express.netlify.app/",
  },
  {
    title: "Ruleborn integrated",
    description: "financial website",
    language: { name: "NEXT JS & TYPECRIPT" },
    href: "https://rulebornintegrated.com/",
  },

  {
    title: "Brimble",
    description: "Hosting website similar to netlify and vercel",
    language: { name: "REACT" },
    href: "https://brimble.io/",
  },
]

export function Projects() {
  return (
    
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
          
        ))}
      </div>
     
    </div>
  )
}

