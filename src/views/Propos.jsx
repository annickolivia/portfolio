import React from 'react'
import girl from '../assets/WORKING GIRL.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  IoMailOutline, IoLogoGithub  } from "react-icons/io5";

export default function Propos() {
 
  return (
    <div className='flex flex-col gap-y-24 justify-center w-full'>
      <div className="hidden lg:flex justify-evenly">
            <motion.div 
                initial={{ y: -30}}  
                animate={{ y: 10 }} 
                transition={{
                duration: 2,
                repeat: Infinity,

                repeatType: "mirror",
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }} 
              className='flex flex-col ml-20'>
              <img src={girl} alt='profil' className="w-lg "></img>
            </motion.div>
            <div className='space-y-6 flex flex-col '>
              <h2 className='text-gray-600 font-bold text-2xl  '>A propos de moi</h2>
              <div className='text-lg text-gray-600 font-semibold w-lg'>
                <p className='text-justify'>Je suis Randrianarijaona Annick Olivia étudiante en Informatique Multimédia Technologie de l’Information et de la Communication à l’Institut Supérieur Polytechnique Antsobolo. <br/> Je suis passionnée par la développement web et la programation.  <br/>Je conçois des interfaces à la fois esthétiques et fonctionnelles.
                    Mon objectif ? Donner vie à des projets web qui allient design, fluidité et efficacité.
                </p>
              </div>
        
              <div className='flex space-x-6'>
                <Link to='https://mail.google.com/' className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                  <IoMailOutline size={'30px'} />
                  Gmail
                </Link>
                <Link to='https://github.com/annickolivia' className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                  <IoLogoGithub size={'30px'} />
                  Github
                </Link>
              </div>
            </div>
      </div>
      
     {/* responsive  */}
      <div className="lg:hidden space-y-3 flex flex-col items-center justify-center">
            
           
            <motion.div 
                initial={{ y: -30}}  
                animate={{ y: 10 }}  
                transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }} 
              className='flex '>
              <img src={girl} alt='profil' className="w-sm "></img>
            </motion.div>
            <div className='space-y-6 flex flex-col px-10 items-center'>
              <h2 className='text-gray-600 font-bold text-2xl text-center  '>A propos de moi</h2>
              <div className='text-lg text-gray-600 font-semibold text-center '>
                <p className='text-justify'>Je suis Randrianarijaona Annick Olivia étudiante en Informatique Multimédia Technologie de l’Information et de la Communication à l’Institut Supérieur Polytechnique Antsobolo. <br/> Je suis passionnée par le développement web et la programmation.  <br/>Je conçois des interfaces à la fois esthétiques et fonctionnelles.
                    Mon objectif ? Donner vie à des projets web qui allient design, fluidité et efficacité.
                </p>
              </div>
        
              <div className='flex space-x-6'>
                <a to='https://mail.google.com/'  className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                  <IoMailOutline size={'30px'} />
                  Gmail
                </a>
                <Link to='https://github.com/annickolivia' className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                  <IoLogoGithub size={'30px'} />
                  Github
                </Link>
              </div>
            </div>
      </div>


      <div className="space-y-20 ">
        <h1 className='text-center font-bold text-4xl text-gray-600'>Expérience Professionelle</h1> 
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
             <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#DB0155]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic text-gray-600">17 Septembre 2025</time>
              <div className="text-lg font-black text-gray-600">Stagiaire chez SENSO Design Agency</div>
                    <div className='flex flex-col gap-y-1 text-sm md:text-lg lg:w-lg bg-white p-5 rounded-2xl shadow-lg text-black'>
                      <p className='text-center font-semibold '>Maintenance et mise en ligne du site</p>
                      <ul className="list-disc pl-4 ml-4">
                        <li>Mise à jour du contenu, amélioration des performances et suivi technique.</li>
                        <li>Améliorations graphiques, ajout de nouvelles sections, mise à jour régulière du contenu.</li>
                      </ul>
                      <p className='text-center font-semibold '> Création d'un site e-commerce </p>
                      <ul className="list-disc pl-4 ml-4">
                        <li>Conception de l’interface.</li>
                        <li>Integration.</li>
                        <li>Gestion des produits.</li>
                        <li>Vente d’objets et accessoires pour la maison, avec gestion des stocks, panier.</li>
                      </ul>
                    </div>
            </div>
            <hr className='bg-[#DB0155]'/>
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#DB0155]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
           <div className="timeline-start mb-10 md:text-end">
          {/* Date */}
          <time className="font-mono italic block text-gray-600">06 Avril 2025</time>
                  <div className="text-lg font-black text-gray-600">Stagiaire chez INSTAT Madagascar</div>
                  <div className="bg-white text-black p-5 rounded-2xl shadow-lg max-w-xl w-full md:ml-auto">
                    <h2 className="text-center font-semibold text-base md:text-lg mb-1">Plateforme d'échange de données</h2>

                    <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-left">
                      <li>Développement Fullstack Laravel et React.js</li>
                      <li>Développement d’une application web permettant l’échange de données entre différentes sociétés.</li>
                      <li>Utilisation de React.js comme frontend et Laravel comme backend.</li>
                      <li>Utilisation d’une base de données MySQL.</li>
                    </ul>
                  </div>
              </div>
          <hr className='bg-[#DB0155]' />
          </li>
         

        </ul>
      </div>
    </div>
  )
}
