import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="absolute z-[5] text-[#fff] left-[1rem] top-[1rem] w-full">
        <Link to={'/'} className="flex items-center">
            <svg style={{strokeLinejoin: 'round',strokeLinecap:'round'}} className="width-[4rem] height-auto overflow-visible" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24" width="48px" fill="none">
                <g></g>
                <g><motion.path initial={{opacity:0,pathLength:0}} animate={{opacity:1,pathLength:1}} transition={{duration:2,ease:'easeInOut'}} className="stroke-[#fff]" d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g>
            </svg>
            <motion.span initial={{opacity:0,x:-50}} animate={{opacity:1,x:-5}} transition={{duration:2,delay:2,ease:'easeInOut'}}  style={{fontSize:'1.25rem'}} className="text-[#fff] relative top-[10px] left-1 pd-[0.5rem]">
                Wibe Studio
            </motion.span>
        </Link>
    </div>
  )
}
export default Logo