import React from 'react'
import html from '../assets/html.svg' 
import css from '../assets/css.svg' 
import js from '../assets/js.svg' 
import php from '../assets/php.svg' 
import laravel from '../assets/laravel.svg' 
import mongo from '../assets/mongo.svg' 
import vue from '../assets/vue.svg' 
import react from '../assets/react.svg' 
import illu from '../assets/illu.svg' 
import photo from '../assets/photo.svg' 
import tailwind from '../assets/tailwind.svg' 
import mysql from '../assets/mysql.svg' 
import node from '../assets/node.svg' 
import figma from '../assets/figma.svg' 

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



export default function Outils() {
  const data = [
    {
      name: `HTML`,
      img: html,
      review: `Langage`
    },
    {
      name: `CSS`,
      img: css,
      review: `Langage`
    },
    {
      name: `JavaScript`,
      img: js,
      review: `Langage`
    },
    {
      name: `PHP`,
      img: php,
      review: `Langage`
    },
    {
      name: `React.js`,
      img: react,
      review: `Framework`
    },
    {
      name: `Laravel`,
      img: laravel,
      review: `Framework`
    },
    {
      name: `Vue.js`,
      img: vue,
      review: `Framework`
    },
    {
      name: `Node.js`,
      img: node,
      review: `Framework`
    },
    {
      name: `tailwind`,
      img: tailwind,
      review: `Framework`
    },
    {
      name: `MongoDB`,
      img: mongo,
      review: `BD`
    },
    {
      name: `MySQL`,
      img: mysql,
      review: `BD`
    },
    {
      name: `Figma`,
      img: figma,
      review: `Design`
    },
    {
      name: `Photoshop`,
      img: photo,
      review: `Design`
    },
    {
      name: `Illustrator`,
      img: illu,
      review: `Design`
    },

  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const sm = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
    <div className='hidden lg:flex md:flex flex-col  gap-y-20 text-black '>
            <h1 className='text-center font-bold text-4xl text-gray-600'>Outils</h1>
          <div className='w-3xl m-auto'>
            <Slider {...settings}>
              {data.map((d) => (
                
                 <div className="bg-white  h-[150px] rounded-xl">
                    <div className='flex justify-center mt-5 items-center rounded-t-xl'>
                      <img
                        src={d.img}/>
                    </div>
                    <div  className='flex justify-center items-center'>
                      <h2 className="font-bold">{d.name}</h2>             
                    </div>
                    <div className='flex justify-center items-center '>
                      <p>{d.review}</p> 
                    </div>
                      
                </div>
              
              ))}
          </Slider>
          </div>
    </div>
    <div className='lg:hidden md:hidden flex flex-col  gap-y-20 text-black '>
            <h1 className='text-center font-bold text-4xl text-gray-600'>Outils</h1>
          <div className='w-80 m-auto'>
            <Slider {...sm}>
              {data.map((d) => (
                
                 <div className="bg-white  h-[130px] rounded-xl space-y-2">
                    <div className='flex justify-center mt-5 items-center rounded-t-xl'>
                      <img
                        src={d.img} />
                    </div>
                    <div  className='flex justify-center items-center'>
                      <h2 className="font-bold text-sm">{d.name}</h2>             
                    </div>
                    <div className='flex justify-center items-center text-sm '>
                      <p>{d.review}</p> 
                    </div>
                      
                </div>
              
              ))}
          </Slider>
          </div>
    </div>
    </div>
  )
}

