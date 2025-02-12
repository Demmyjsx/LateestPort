import { SkillCard } from "@/components/SkillCard"

const skills = [
  { name: "JavaScript", icon: "/assets/javascript.png" },
  { name: "TypeScript", icon: "/assets/typescript.png" },
  { name: "React", icon: "assets/react.png" },
  { name: "Node.js", icon: "/assets/node_icon.jpeg" },
  { name: "Tailwind Css", icon: "/assets/tainwind_css.png"},
  { name: "MongoDB", icon: "/assets/mongodb.jpeg" },
  { name: "MySQL", icon: "/assets/MySQL.png" },
  { name: "PostgreSQL", icon: "/assets/PostgreSQ.jpeg" },
  { name: "Postman", icon: "assets/Postman.jpeg" },
  { name: "Git", icon: "assets/Git.png" },
  { name: "Netlify", icon: "assets/netlify.png" },
  { name: "vercel", icon: "assets/vercel.png" },

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

