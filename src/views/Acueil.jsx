import React from 'react'
import profil from '../assets/me.png'
import Hi from '../assets/Hi.svg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Acueil() {
  
  return (
    <div>
          <div className='mt-30 flex justify-center gap-x-20' >
          <motion.h1 className='flex flex-col items-start gap-y-5'  key={location.pathname} initial={{opacity:0, y:500}} animate={{y: 180, opacity:1}}  transition={{ duration: 3 }}>
              <p className='flex justify-center gap-x-2 items-center text-xl text-gray-700  text-center'>Bonjour !<span><img src={Hi}/></span>, bienvenue dans mon site </p>
              <p className='lg:text-5xl md:text-4xl font-bold md:leading-12 lg:leading-16 text-black' >
                Développeur Fullstack <br/> <span className='text-[#DB0155]'> Javascript et Php </span> <br/>
                Designer UI UX
              </p>
              <div className='flex space-x-6'>
                <Link to={'https://docs.google.com/document/d/1vL0mzY6yq2xR5u28MfQKCkH6cF5naA8WoIT4qdXLCb0/edit?tab=t.0'} className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                    Mon CV
                </Link>
                <a href={'#contact'}  className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
                    Me contacter ? 
                </a>
              </div>
             
            </motion.h1>
            <motion.div  key={location.pathname} initial={{opacity:0, x:500}} animate={{x: 0, opacity:1}}  transition={{ duration: 3 }} className='flex flex-col items-center justify-center mb-20 space-y-6' >
              <img src={profil} alt='profil' className="lg:w-2xl md:w-46  h-auto"></img>
              <h2 className='text-5xl text-black'>Annick Olivia</h2>
            </motion.div>
           
          </div>  
      </div>
      
  )
}
