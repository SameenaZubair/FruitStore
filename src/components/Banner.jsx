import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/Animation';
import BannerPng from '../../assets/fruits-splash.png';

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        {/* Banner Image */}
        <div className='flex justify-center items-center'>
          <motion.img
          initial={{opacity:0, scale: 0.5}}
          whileInView={{opacity:1, scale: 1}}
          transition={{type: "spring", stiffness:100, delay:0.2}}
          viewport={{once:true}}
          
          
          src={BannerPng} alt="" className='w-300 md:max-w-md h-full object-cover drop-shadow'/>
        </div>

        {/* Brand Info */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <h1 
              {...motion} 
              variants={FadeUp(0.5)} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className='text-3xl lg:text-6xl font-bold uppercase'> 
              {" "}
              Online Fruit Store
            </h1>
            <p 
              {...motion} 
              variants={FadeUp(0.7)} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea vero libero cum eveniet voluptatibus soluta odit nesciunt
              veritatis, dolorem earum. Rerum ducimus natus velit ut voluptatibus possimus vero quia alias!
            </p>
            <p
             {...motion} 
             variants={FadeUp(0.9)} 
             initial="hidden" 
             whileInView="visible" 
             viewport={{ once: true }} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt nesciunt ex cupiditate? Iusto, eveniet nemo.</p>
            {/* Button Section */}
            <div 
              {...motion} 
              variants={FadeUp(1.1)} 
              initial="hidden" 
              animate="visible" 
              className='flex justify-center md:justify-start'
            >
              <button className='primary-btn'> Download App</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;