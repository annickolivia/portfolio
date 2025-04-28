import React from 'react'
import girl from '../assets/WORKING GIRL.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  IoMailOutline, IoLogoGithub  } from "react-icons/io5";



export default function Propos() {
 
  return (
    <div className='flex flex-col gap-y-24 justify-center min-h-screen  w-full'>
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
                <p>Je suis Randrianarijaona Annick Olivia étudiante en Informatique Multimédiat Technologie de l’Information et de la Communication à l’institut supérieur Antsobolo. <br/> Je suis passionnée par la développement web et la programation.  <br/>J'aime concevoir des interfaces à la fois esthétiques et fonctionnelles.
                    Mon objectif ? Donner vie à des projets web qui allient design, fluidité et efficacité.
                </p>
              </div>
        
              <div className='flex space-x-6'>
                <Link  className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
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
      <div className="lg:hidden space-y-3 flex flex-col items-center justify-evenly">
            
           
            <motion.div 
                initial={{ y: -30}}  
                animate={{ y: 10 }}  
                transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }} 
              className='flex ml-20'>
              <img src={girl} alt='profil' className="w-sm "></img>
            </motion.div>
            <div className='space-y-6 flex flex-col px-10 items-center'>
              <h2 className='text-gray-600 font-bold text-2xl text-center  '>A propos de moi</h2>
              <div className='text-lg text-gray-600 font-semibold text-center '>
                <p>Je suis Randrianarijaona Annick Olivia étudiante en Informatique Multimédia Technologie de l’Information et de la Communication à l’Institut Supérieur Polytechnique Antsobolo. <br/> Je suis passionnée par la développement web et la programation.  <br/>J'aime concevoir des interfaces à la fois esthétiques et fonctionnelles.
                    Mon objectif ? Donner vie à des projets web qui allient design, fluidité et efficacité.
                </p>
              </div>
        
              <div className='flex space-x-6'>
                <Link  className="flex font-bold items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#DB0155] to-[#9B002E] hover:from-[#9B002E] hover:to-[#DB0155] transition-all duration-300 text-white cursor-pointer">
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


      <div className="space-y-20 ">
        <h1 className='text-center font-bold text-4xl text-gray-600'>Expérience Professionelle</h1> 
        {/* frize1 */}
        <div className='flex items-center justify-center'>
            <h1 className='text-center text-white font-bold text-3xl bg-[#DB0155] p-5 rounded-lg'>2025</h1> 

          {/* horozintal */}
              <div className='w-20 bg-[#DB0155] h-1'></div>
 
            {/* rond */}
            <div className="relative z-10 flex justify-center items-center">
                <div className="size-7 rounded-full bg-[#DB0155]"></div>
            </div>

             {/* horozintal */}
              <div className='w-20 bg-[#DB0155] h-1'></div>

            <div className='flex flex-col gap-y-1 text-lg w-lg bg-white p-5 rounded-2xl shadow-lg text-black'>
              <h1 className='text-center font-semibold '>Développement Fullstack Laravel et React.js | INSTAT| 2025</h1>
              <p className='text-center font-semibold '>Plateforme d'échange de données</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Stagiaire en développement web.</li>
                <li>Développement d’une application web permettant l’échange de données entre différentes sociétés.</li>
                <li>Utilisation de React.js comme frontend et Laravel comme backend.</li>
                <li>Utilisation d’une base de donné MySQL.</li>
              </ul>
          </div>
        </div>
       
      </div>
    </div>
  )
}
