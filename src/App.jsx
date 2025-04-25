import Acueil from './views/Acueil';
import Propos from './views/Propos';
import Outils from './views/Outils';
import Projet from './views/Projet';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import './App.css'
function App() {

  return (
      <div className="flex flex-col min-h-screen bg-radial-custom">
        <Navbar />
        <section>
          <Acueil />
        </section>

        <section id="a-propos" className="py-16 px-4 md:px-8">
          <Propos />
        </section>

        <section id="outils" className="py-16 px-4 md:px-8 ">
          <Outils />
        </section>

        <section id="projet" className="py-16 px-4 md:px-8">
          <Projet />
        </section>

        <section id="contact" className="py-16 px-4 md:px-8 ">
          <Contact />
        </section>
    </div>
    
  )
}

export default App
