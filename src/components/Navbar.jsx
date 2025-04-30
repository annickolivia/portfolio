import React from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen , setIsopen] = useState(false)

  const Open = () => {
    setIsopen(!isOpen)
  }
  return (

    <nav className='bg-[#ffeef5] fixed w-full z-10 p-5 ' >
      <div className=' w-full text-gray-700 flex items-center lg:justify-around justify-between text-xl '>
          <h1 className=' font-semibold text-2xl cursor-pointer text-[#DB0155] '>Annick</h1>
          <ul className='hidden lg:flex gap-x-10'>
            <li className='hover:text-[#DB0155]'>
              <a  href='/'>Accueil</a>
            </li>

            <li className='hover:text-[#DB0155]'>
              <a href='#a-propos'>A propos</a>
            </li>
            <li className='hover:text-[#DB0155]'><a href='#outils'>Outils</a></li>
            <li className='hover:text-[#DB0155]'><a href='#projet'>Projet</a></li>
            <li className='hover:text-[#DB0155]'><a href='#contact'>Contact</a></li>
          </ul>

          <div className='lg:hidden '>
            <HiOutlineMenuAlt2 onClick={Open} size="30px" className='text-[#DB0155] hover:text-white focus:outline-none'/>
          </div>
      </div>
      <AnimatePresence>
     { isOpen && (
      <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 70 }}
      className='fixed space-y-4 right-0 h-auto  bg-[#DB0155] shadow-lg z-50 lg:hidden rounded-xl'>
        
        <ul className='flex flex-col font-semibold space-y-2 text-white text-lg w-50 py-5 px-5'>
            <li className='hover:text-gray-600 duration-150'>
              <a  href='#/'>Accueil</a>
            </li>

            <li className='hover:text-gray-600 duration-150'>
              <a href='#a-propos'>A propos</a>
            </li>
            <li className='hover:text-gray-600 duration-150'><a href='#outils'>Outils</a></li>
            <li className='hover:text-gray-600 duration-150'><a href='#projet'>Projet</a></li>
            <li className='hover:text-gray-600 duration-150'><a href='#contact'>Contact</a></li>
        </ul>
      
      </motion.div>
     )}
     </AnimatePresence> 
      
    </nav>
  )
}
