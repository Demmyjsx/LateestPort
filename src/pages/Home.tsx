import { Github, Linkedin } from "lucide-react"
import man from "/assets/manOnTable.a15c230b.svg"
import { Skills } from "@/pages/Skills"
import { Link } from "react-router-dom"

import { Certifications } from "./Certifications"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
export function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section id="#About">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
      
        <div className="space-y-8">
           
                <h1 className="text-6xl font-bold">Hi everyone, I&apos;m DemmyTsx</h1>
                <p className="text-2xl text-gray-600"> | Software Engineer | React | Javascript | typescript | Node |</p>
                <div className="flex gap-4">
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
                  {/* <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </a> */}
                </div>
                <div className="flex gap-4">
                  <Link to="/project"  className="bg-[#002147] hover:bg-[#002147]/90 text-white p-4 rounded">
                    CONTACT ME
                  </Link>
                
                </div>

          


          
                </div>
                <div className="relative">
                  <img
                    src={man}
                    alt="Developer illustration"
                    className="w-full h-auto"
                  />
                </div>
             
                
       </div>
  
    
        {/* Skills content will go here */}
        <Skills />
        
        <Certifications />

        <Projects />


        <Contact />
     

     </section>
    </main>
  )
}

