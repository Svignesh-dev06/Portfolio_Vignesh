import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import './App.css'

function App() {
  return (
    <div className="portfolio-app min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
