import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layouts"
import { Home } from "./pages/Home"


import { Contact } from "./pages/Contact"
import Nopage from "./pages/Nopage"
import { Projects } from "./pages/Projects"


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

