import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroImg from '../../assets/fruit-plate.png';
import leafPng from '../../assets/leaf.png';
import {motion} from "framer-motion";
import { FadeRight } from '../utility/Animation';

const Hero = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            {/* Brand info */}
            < div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
                  <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible"
                  className='text-5xl lg:text-6xl font-bold leading-relaxed font-averia '>Healthy<br/>Fresh <span className='text-secondary'> Fruits</span></motion.h1>
                    <motion.p
                     variants={FadeRight(0.9)}
                     initial="hidden"
                     animate="visible" className='text-2xl tracking-wide'>Order Now for Fresh Healthy Life</motion.p>
                    <motion.p 
                      variants={FadeRight(1.2)}
                      initial="hidden"
                      animate="visible"
                      className='text-gray-900'>Disclaimer: This website is a project creation and not a functional e-commerce site.</motion.p> {/* Button Section */}
                <motion.div 
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"className='flex justify-center md:justify-start'>
                  <button className='primary-btn flex items-center gap-2'>
                    <span>
                      <IoBagHandleOutline/>
                    </span>
                    Order Now</button>
                </motion.div>
            </div>
            </div>
            {/* Hero image */}
            <div className='flex justify-center items-center'>
             <motion.img
             initial={{ opacity:0, x:200, rotate:75 }}
             animate={{ opacity:1, x:0, rotate:0}}
             transition={{duration:1, delay:0.2}}
             src={HeroImg} alt="healthy" className='w=[350px] md:w-[550px] drop-shadow'></motion.img>
            </div>
           {/*Leaf Image */}
           <div className='absolute top-14 md:top0 right-1/2 blur-sm opacity-80 rotate=[40deg]'>
            <motion.img
                 initial={{ opacity:0, x:200, rotate:75 }}
                 animate={{ opacity:1, x:0, rotate:0}}
                 transition={{duration:1, delay:1.5}}
               src={leafPng} alt="" className='w-full md:max-w-[300px]'></motion.img>
           </div>
        </div>
    </section>
  )
}

export default Hero
