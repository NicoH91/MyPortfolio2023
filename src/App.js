
import './App.scss';
import { Routes, Route, useLocation } from "react-router-dom"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home"
import About from "./containers/about"
import Resume from "./containers/resume"
import Portfolio from "./containers/portfolio"
import Skills from "./containers/skills"
import Contact from "./containers/contact"
import Navbar from './components/navBar';
import particles from './utils.js/particles';




function App() {

  const location = useLocation()


  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";


  return (
    <div className="App">

      {
        renderParticleJsInHomePage && <Particles id='particles' options={particles} init={handleInit} />
      }







      <Navbar />
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/MyPortfolio2023/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>



    </div>
  );
}

export default App;
