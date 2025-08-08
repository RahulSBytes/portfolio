import About from "./components/About"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import TechnicalSkills from "./components/TechnicalSkills"

export default function App() {
  return (
    <div className=" app-container w-[80%] m-auto max-w-[1100px] text-center">
      <Header/>
      <Projects/>
     <TechnicalSkills/> 
     <About/>
     <Education/>
     <Certifications/>
     <Contact/>
     <Footer/>
    </div>
  )
}








// initialized react vite project
// added lisence
// configured tailwind css
// setup stuff like title, favicon, font-family, google icon, tailwind-scrollbar
// now start with header, footer one-by-one.g