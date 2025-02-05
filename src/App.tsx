import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layouts"
import { Home } from "./pages/Home"
// import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Certifications } from "./pages/Certifications"
import { Contact } from "./pages/Contact"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="skills" element={<Skills />} /> */}
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

