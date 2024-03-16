import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click,setClick] = useState(false)
  return (
    <div className="w-[100vw] z-[6] absolute top-0 flex justify-center items-center">
      <ul className={`relative px-[10rem] py-0 ${click ? 'h-[5rem]' : 'h-0 '} text-[#fff] w-full flex justify-around items-center bg-[#202020]`}>
        <li onClick={()=>{setClick(!click)}} style={{listStyle:'none'}} className="absolute left-1/2 -translate-x-1/2 top-full text-[#202020] text-[1em] font-bold polygon bg-[#ffff]/75 flex justify-center items-center w-[15rem] cursor-pointer h-[2.5rem]">MENU</li>

        <li className="uppercase text-[#fff]">Home</li>
        <li className="uppercase text-[#fff]">About</li>
        <li className="uppercase text-[#fff]">Shop</li>
        <li className="uppercase text-[#fff]">New Arrival</li>
      </ul>
    </div>
  )
}
export default Navbar