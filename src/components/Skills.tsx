import { SkillCard } from "@/components/SkillCard"

const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Netlify", icon: "/icons/netlify.svg" },
  { name: "Heroku", icon: "/icons/heroku.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
  { name: "Jenkins", icon: "/icons/jenkins.svg" },
  { name: "Nginx", icon: "/icons/nginx.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "Ansible", icon: "/icons/ansible.svg" },
  { name: "Terraform", icon: "/icons/terraform.svg" },
  { name: "Selenium", icon: "/icons/selenium.svg" },
  { name: "Azure", icon: "/icons/azure.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
]

export function Skills() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}

