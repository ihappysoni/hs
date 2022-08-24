import "./App.css"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
