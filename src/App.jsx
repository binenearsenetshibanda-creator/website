import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Education from './pages/Education'
import SecuritySkills from './pages/SecuritySkills'
import ProjectsBlog from './pages/ProjectsBlog'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Education />} />
            <Route path="/cyber-securite" element={<SecuritySkills />} />
            <Route path="/projets" element={<ProjectsBlog />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
