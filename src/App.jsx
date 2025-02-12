import "./App.css"
import About from "./componets/About"
import Contact from "./componets/Contact"
import Footer from "./componets/Footer"
import Hero from "./componets/Hero"
import Navbar from "./componets/Navbar"
import Projects from "./componets/Projects"
import Service from "./componets/Services"
function App() {

  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Service/>
       <Projects/>
       <Contact/>
      <Footer/>
    </div>
  )
}

export default App
