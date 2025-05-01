import Accueil from './views/Accueil';
import Propos from './views/Propos';
import Outils from './views/Outils';
import Projet from './views/Projet';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
      <div className=" min-h-screen bg-radial-custom">
          <Navbar />

          <div id="accueil" className="min-h-screen py-16 px-4 ">
            <Accueil />
          </div>

          <div id="a-propos" className="min-h-screen py-16 px-4">
            <Propos />
          </div>

          <div id="outils" className=" py-16 px-4">
            <Outils />
          </div>

          <div id="projet" className="py-16 px-4">
            <Projet />
          </div>

          <div id="contact" className=" py-16 px-4">
            <Contact />
          </div>
      </div>
    
  )
}

export default App
