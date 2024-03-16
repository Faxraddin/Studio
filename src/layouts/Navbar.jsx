import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click,setClick] = useState(false)
  return (
    <motion.div initial={{y:'-5rem'}} animate={{y:0}} transition={{duration:1.5,delay:2}} className={`w-[100vw] z-[6] absolute top-0 flex justify-center items-center`}>
      <ul className={`relative px-[10rem] py-0 ${click ? 'h-[5rem]' : 'h-0 '} cursor-pointer transition-all duration-300 ease-in text-[#fff] w-full flex bg-[#202020] justify-around items-center`}>
        <li onClick={()=>{setClick(!click)}} style={{listStyle:'none'}} className="absolute left-1/2 -translate-x-1/2 top-full text-[#202020] text-[1em] font-bold polygon bg-[#ffff]/75 flex justify-center items-center w-[15rem] cursor-pointer h-[2.5rem]">MENU</li>

        <motion.li transition={{duration:0}} whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.8, y:0}} className={`uppercase text-[#fff] transition-all duration-300 ease-in ${click ? 'opacity-1':'opacity-0'}`}>Home</motion.li>
        <motion.li transition={{duration:0}} whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.8, y:0}} className={`uppercase text-[#fff] transition-all duration-300 ease-in ${click ? 'opacity-1':'opacity-0'}`}>About</motion.li>
        <motion.li transition={{duration:0}} whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.8, y:0}} className={`uppercase text-[#fff] transition-all duration-300 ease-in ${click ? 'opacity-1':'opacity-0'}`}>Shop</motion.li>
        <motion.li transition={{duration:0}} whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.8, y:0}} className={`uppercase text-[#fff] transition-all duration-300 ease-in ${click ? 'opacity-1':'opacity-0'}`}>New Arrival</motion.li>
      </ul>
    </motion.div>
  )
}
export default Navbar