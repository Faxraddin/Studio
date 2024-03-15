import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from 'framer-motion';


const VideoContainer = styled.section`
height:100vh;
width:100%;
position:relative,

video{
    height:100vh;
    width:100%;
    object-fit:cover
}
`

const DarkOverlayed = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:1;

background-color:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
`

const Title = styled(motion.div)`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:5;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color: ${props => props.theme.text}
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <DarkOverlayed/>
        <Title initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}}>
            <div className="flex">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} data-scroll data-scroll-speed='4' data-scroll-delay='0.13' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>W</motion.h1>
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} data-scroll data-scroll-speed='4' data-scroll-delay='0.09' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>i</motion.h1>
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} data-scroll data-scroll-speed='4' data-scroll-delay='0.06' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>b</motion.h1>
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} data-scroll data-scroll-speed='4' data-scroll-delay='0.04' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>e</motion.h1>
            </div>
            <h2 data-scroll data-scroll-speed='2' data-scroll-delay='0.4' className="text-[1.25em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>Inspire. Create. Belive</h2>
        </Title>
        <video src={MainVideo} loop muted type='video/mp4' autoPlay/>
    </VideoContainer>
  )
}
export default CoverVideo