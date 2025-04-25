import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'
import github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import gmail from '../assets/gmail.svg'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1 className='text-white text-5xl text-center mt-40 mb-10'>Contact</h1>
      <div className='flex flex-col space-y-10'>
        <div className='flex items-center space-x-6 justify-center'>
            <Link   className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
              <img src={gmail} alt='gmail' className='w-8'></img>
              Gmail
            </Link>
            <Link to={'https://web.facebook.com/annickah.oliviah?locale=fr_FR'}  className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
              <img src={facebook} alt='facebook' className='w-8'></img>
              Facebook
            </Link>
            <Link to={'https://www.instagram.com/annick_olivia/'} className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
            <img src={instagram} alt='insta' className='w-8'></img>
              Instagram
            </Link>
        </div>
        <div className='flex items-center space-x-6 justify-center'>
            <Link  className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
              <img src={whatsapp} alt='whatsapp' className='w-8'></img>
              Whatsapp
            </Link>
            <Link to={'https://github.com/annickolivia'} className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
              <img src={github} alt='git' className='w-8'></img>
              Github
            </Link>
            <Link to={'https://www.linkedin.com/in/annick-olivia-76b012338/'} className="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-gradient-to-bl  from-[#FF00D0] to-[#99007D] hover:from-[#99007D] hover:to-[#FF00D0] transition-all duration-300 text-white cursor-pointer">
              <img src={LinkedIn} alt='linkedin' className='w-8'></img>
              LinkedIn
            </Link>
         </div>
        </div>
        <h1 className='text-white text-center text-2xl m-20'>Merci d'avoir visiter</h1>
    </div>
  )
}
