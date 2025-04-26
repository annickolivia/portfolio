import React from 'react'
import phone from '../assets/phone.png'
import recfeo from '../assets/recfeo.png'
import Nala from '../assets/Nala.jpg'
import { Link } from 'react-router-dom'
import github from '../assets/github.svg'
import site from '../assets/site.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
export default function Projet() {
  return (
    <div className='w-full space-y-8 '>
      <h1 className='text-center font-bold text-4xl text-gray-600'>Projets</h1>
        
      <div className='flex gap-x-10 items-center justify-center'>
        
        <div className="card bg-white w-96 shadow-lg">
          <figure>
            <img
              src={recfeo}
              alt="Shoes" 
               className='object-cover w-full h-55 '/>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black font-bold">Rec'feo <span className='font-semibold text-gray-700'><p>(MERN, Python)</p></span></h2>
            <p  className="text-gray-700">Recfeo est un outil de détection de tonalité musicale, conçu pour accompagner les apprenties musiciennes, ainsi que les chanteurs et musiciens dans leur pratique. Les utilisateurs peuvent importer une chanson ou bien chanter directement .</p>
            <div className="card-actions justify-end">
                <Link to={'https://github.com/Manohisoaa/Recfeo'} className="btn btn-primary border-none bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300"><img src={github} alt='git' className='w-8'></img>
                  Github
                </Link>
                <Link to={'https://recfeo.vercel.app/'} className="btn btn-primary border-none bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300"><img src={site} alt='git' className='w-8'></img>
                  Site
                </Link>
            </div>
          </div>
        </div>

        <div className="card bg-white w-96 shadow-lg">
          <figure>
            <img
              src={phone}
              alt="phone"
              className='object-cover w-full h-55 ' />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-black">Spotshare <span className='font-semibold text-gray-700'><p>(MEVN)</p></span></h2>
            <p className='text-gray-700'>Spotshare est une application web conçu pour partager vos endroits préférés, que ce soit un hôtel, un restaurant ou tout autre lieu. Elle vous aide à trouver rapidement des lieux recommandés, surtout en cas d’urgence ou de pression.</p>
            <div className="card-actions justify-end">
                <Link to={'https://github.com/annickolivia/spotshare'} className="btn btn-primary border-none bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300"><img src={github} alt='git' className='w-8'></img>
                  Github
                </Link>
            </div>
          </div>
        </div>

        <div className="card bg-white w-96 shadow-lg">
          <figure>
            <img
              src={Nala}
              alt="phone" 
              className='w-full h-55 object-cover '/>
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-black">Nala <span className='font-semibold text-gray-700'><p>(C#, Unity)</p></span></h2>
            <p className='text-gray-700'>Nala est un jeu de plateforme en 2D conçu pour représenter les mythes malgaches. L’utilisateur y incarne un personnage qui affronte diverses figures issues de ces légendes. Après chaque niveau, un quiz à choix multiples est proposé au joueur, avec des questions sur les mythes abordés. Les réponses sont évaluées et une note est attribuée à la fin.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
