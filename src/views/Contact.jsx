import React from 'react'
import { IoLogoWhatsapp, IoMailOutline, IoLogoLinkedin , IoLogoGithub, IoLogoFacebook, IoLogoInstagram    } from "react-icons/io5";


export default function Contact() {
  return (
    <div>

    <div className=' flex w-full justify-center  '>
      <div className='card bg-white p-10 px-20 shadow-xl'>
        <h1 className='text-center font-bold text-4xl text-gray-600'>Contacter moi</h1> 
        <div className='flex flex-col gap-y-6 m-10 font-semibold text-gray-600'>
            <div className=' flex items-center  gap-x-6'>
              <IoMailOutline size={'30px'} />
                <p> annickolivia63@gmail.com</p>
            </div>
            <div className=' flex items-center  gap-x-6'>
            <IoLogoWhatsapp size={'30px'} />
              +261 32 80 049 98
            </div>
            <div className=' flex items-center  gap-x-6'>
              <IoLogoLinkedin  size={'30px'}/>
              Annick Olivia
            </div>
            <div className=' flex items-center  gap-x-6'>
              <IoLogoGithub   size={'30px'}/>
              annickolivia
            </div>
            <div className=' flex items-center  gap-x-6'>
              <IoLogoFacebook  size={'30px'}/>
              Annick Randrianarijaona
            </div>
            <div className=' flex items-center  gap-x-6'>
              <IoLogoInstagram   size={'30px'}/>
              Annick Olivia
            </div>
        </div>
      </div>
    </div>
      <h1 className='font-bold text-center mt-10 text-[#DB0155] text-xl'>Merci pour votre visite !</h1>
    </div>
  )
}
