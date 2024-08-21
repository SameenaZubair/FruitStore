import React, { useState } from 'react';
import { FaLeaf } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/",
  },
  {
    id: 3,
    title: "About",
    link: "/",
  },
  {
    id: 4,
    title: "Shop",
    link: "/",
  },
  {
    id: 5,
    title: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };
  
  return (
    <nav>
      <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 0.5, delay:0.5}}
      
      className='container flex justify-between items-center py-4 md:pt-4'>
        {/* Logo Section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit <span className='text-secondary'>Store</span> <br/> By Sameena Zubair</p>
          <FaLeaf className='text-green-500' />
        </div>

        {/* Menu Section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a href={menu.link}
                  className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                >{menu.title}</a>
              </li>
            ))}
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <IoCartOutline className='text-2xl hover:bg-primary hover:text-white rounded-full duration-200' />
            </button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Section */}
        <div className='md:hidden' onClick={handleToggleMenu}>
          <MdMenu className='text-4xl' />
        </div>
      </motion.div>


      {/* Mobile menu */}
      <ResponsiveMenu isOpen={open} menuItems={NavbarMenu} />
    </nav>
  );
};

export default Navbar;
