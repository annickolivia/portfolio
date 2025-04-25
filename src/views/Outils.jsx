import React from 'react'
import js from '../assets/js.svg' 
import html from '../assets/html.svg' 
import css from '../assets/css.svg' 
import mongodb from '../assets/mongodb.svg' 
import mysql from '../assets/mysql.svg' 
import react from '../assets/react.svg' 
import node from '../assets/node.svg' 
import laravel from '../assets/laravel.svg' 
import tlw from '../assets/tlw.svg' 
import php from '../assets/php.svg' 
import photoshop from '../assets/photoshop.svg' 
import figma from '../assets/figma.svg' 
import illu from '../assets/illu.svg' 
import {motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import tailwindcss from '@tailwindcss/vite'


export default function Outils() {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    useEffect(() => {
        async function sequence() {
          await controls1.start({opacity:1,  x: 0 , transition: { duration: 0.5 } });
          await controls2.start({opacity:1,  x: 0, transition: { duration: 0.5 } });
          await controls3.start({opacity:1,  x: 0, transition: { duration: 0.5 } });
          await controls4.start({opacity:1,  x: 0, transition: { duration: 0.5 } });
        }
    
        sequence();
      }, []);

  return (
<div className='flex flex-col  gap-y-20 '>
      <h1 className='text-center font-bold text-4xl text-black'>Outils</h1>
    {/* <f className='flex flex-col items-center justify-center space-y-12 '>
        <t1 className='flex items-center justify-center gap-x-12'>
           
            <motion.c1
             initial={{opacity:0, x: -300}} 
             animate={ controls1 } 
             className='flex flex-col gap-y-10 items-center text-lg w-lg bg-white  mx-auto p-12 rounded-2xl shadow-xl'>
                <p className='font-bold text-2xl'>Langage de programation</p>
                <div className='flex gap-x-12'>
                    <div className='flex flex-col items-center'>
                        <img src={js} />
                        <h1>Javascript</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={html} />
                        <h1>HTML</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={css} />
                        <h1>CSS</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={php} />
                        <h1>PHP</h1>
                    </div>
                </div>    
            </motion.c1>

    
           
            <motion.c2
            initial={{opacity:0, x: 300}} 
            animate={controls2}
                  className='flex flex-col gap-y-10 items-center text-lg w-lg bg-white mx-auto p-12 rounded-2xl shadow-xl'>
                <p className='font-bold text-2xl'>Base de données</p>
                <div className='flex gap-x-12'>
                    <div className='flex flex-col items-center'>
                        <img src={mysql} />
                        <h1>Mysql</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={mongodb} />
                        <h1>MongoDb</h1>
                    </div>
                </div>    
            </motion.c2>
        </t1>
        <div className="absolute h-[65%] w-[4px] rounded-lg bg-[#DB0155] m-4" />

        <t2 className='flex items-center justify-center gap-x-12'>
     
            <motion.c3 
             initial={{opacity:0, x: -300}} 
             animate={controls3}
            className=' flex flex-col gap-y-10 items-center text-lg w-lg bg-white mx-auto p-10 rounded-2xl shadow-xl'>
                <p className='font-bold text-2xl'>Frameworks</p>
                <div className='flex gap-x-12'>
                    <div className='flex flex-col items-center'>
                        <img src={react} />
                        <h1>React.js</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={node} />
                        <h1>Node.js</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={laravel} />
                        <h1>Laravel</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={tlw} />
                        <h1>tailwind</h1>
                    </div>
                </div>    
            </motion.c3>


            <motion.c4 
            initial={{opacity:0, x: 300}} 
            animate={controls4}
                 className='flex flex-col gap-y-10 items-center text-lg w-lg bg-white  mx-auto p-12 rounded-2xl shadow-xl'>
                <p className='font-bold text-2xl'>Design</p>
                <div className='flex gap-x-12'>
                    <div className='flex flex-col items-center'>
                        <img src={photoshop} />
                        <h1>Photoshop</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={figma} />
                        <h1>Figma</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={illu} />
                        <h1>Illustrator</h1>
                    </div>
                </div>    
            </motion.c4>
        </t2>
                
    </f> */}
    <div className='flex space-x-4'>
        <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={html}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">HTML</h2>             
                      </div>
                      <p>99%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={css}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">CSS</h2>             
                      </div>
                      <p>80%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={js}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">JavaScript</h2>             
                      </div>
                      <p>80%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={php}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">PHP</h2>             
                      </div>
                      <p>75%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={mongodb}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">MongoDB</h2>             
                      </div>
                      <p>80%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={mysql}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">Mysql</h2>             
                      </div>
                      <p>95%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={react}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">React.js</h2>             
                      </div>
                      <p>79%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={laravel}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">Figma</h2>             
                      </div>
                      <p>90%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={figma}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">Figma</h2>             
                      </div>
                      <p>90%</p>   
            </div>
            <div className="flex flex-col items-center justify-center bg-base-100 w-30 h-40 space-y-4 rounded-lg shadow-lg">
                      <figure>
                        <img
                          src={figma}/>
                      </figure>
                      <div className="">
                        <h2 className="card-title font-bold">Figma</h2>             
                      </div>
                      <p>90%</p>   
            </div>
        </div>
         
</div>
  )
}
