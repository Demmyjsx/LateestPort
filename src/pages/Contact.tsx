import { Github, Linkedin } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Profile from "public/assets/profile.png"

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Reach Out to me!</h2>
        <p className="text-gray-600 mb-8">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-lg">
                  Problem solver - I'm focused on getting the work done through best practices while meeting up with
                  deadlines and budgets.
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-mono">127.0.0.1</span>
                </p>
                <p>Open for opportunities: Yes</p>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/Demmyjsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="www.linkedin.com/in/ademola-abdul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            {/* <div className="w-48 h-48 rounded-full border-4 border-navy overflow-hidden">*/}
              <img 
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

