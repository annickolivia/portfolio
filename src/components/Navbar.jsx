import React from 'react'

export default function Navbar() {
  
  return (

    <nav className='backdrop-sepia-0 bg-[#DB0155]/5 fixed w-full z-10 p-5 ' >
      <div className=' w-full text-gray-700 flex items-center justify-around text-xl '>
          <h1 className=' font-semibold text-2xl cursor-pointer text-[#DB0155] '>Annick</h1>
          <ul className='flex gap-x-10'>
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
      </div>
      
    </nav>
  )
}
