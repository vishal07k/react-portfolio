import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Navbar } from './layout/Navbar'
import {Hero} from "@/sections/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      </main>
   </div>
  )
}

export default App
