import React, { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Certificates } from './components/sections/Certificates';
import { Resume } from './components/sections/Resume';
import { Footer } from './components/Footer';
import Services from './components/sections/Services';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

          <Home/>
          <About/>
          <Services/>
          <Projects/>
          <Certificates/>
          <Resume/>
          <Contact/>

          <Footer/>

        </div>

    </>
  )
  
}

export default App
