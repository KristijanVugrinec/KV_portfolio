import Header from './components/Header'
import AboutMe from './components/AboutMe'
import './App.css'
// import { Canvas } from '@react-three/fiber'
// import { Experience } from './components/Experience'
import SkillsText from './components/Skills'
import Icons from './components/Icons'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Timeline from './components/Timeline'

function App() {
return (
  <>
   {/* <div style={{position:"fixed", width:"100%", height:"100%",opacity:"30%",pointerEvents:"none", left:0, top:0,}}>
  <Canvas style={{pointerEvents:"none"}}>
    <Experience />
  </Canvas>
  </div>  */}
  <Header/>
  <Welcome />
  <AboutMe /> 
  <Timeline />
  <div id="skills" style={{position:"relative"}}>
    <SkillsText
    text="SKILLS"
    startIndex={3}
    endIndex={5}
    highlightStyle={{color: '#44DDC0'}} />
  </div> 
   <Icons /> 
  <Projects />
  <Footer />
</>
)
}

export default App
