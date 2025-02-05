import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    title: "btc-investment",
    description: "Bitcoin Investment App",
    language: { name: "Blade", color: "#f7523f" },
    size: "30664 KB",
  },
  {
    title: "Olubaba",
    description: "Ecommerce App",
    language: { name: "JavaScript", color: "#f1e05a" },
    size: "449 KB",
  },
  {
    title: "Terraform-Projects",
    description: "Infrastructure as Code Projects",
    language: { name: "HCL", color: "#844FBA" },
    size: "37 KB",
  },
  {
    title: "Ansible-Projects",
    description: "Infrastructure Automation",
    language: { name: "Shell", color: "#89e051" },
    size: "11 KB",
  },
  {
    title: "addictionsupportroom.web",
    description: "Support Community Platform",
    language: { name: "Python", color: "#3572A5" },
    size: "18840 KB",
  },
  {
    title: "Helm-Practice",
    description: "Kubernetes Package Management",
    language: { name: "Shell", color: "#89e051" },
    size: "7 KB",
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

