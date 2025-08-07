import Header from "./components/Header"
import Projects from "./components/Projects"
import TechnicalSkills from "./components/TechnicalSkills"

function App() {
  return (
    <div className="w-[80%] m-auto max-w-[1100px] text-center">
      <Header/>
      <Projects/>
     <TechnicalSkills/> 
    </div>
  )
}

export default App






// initialized react vite project
// added lisence
// configured tailwind css
// setup stuff like title, favicon, font-family, google icon, tailwind-scrollbar
// now start with header, footer one-by-one.