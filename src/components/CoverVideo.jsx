import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4"

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

const Title = styled.div`
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
        <Title>
            <div className="flex">
                <h1 data-scroll data-scroll-speed='4' data-scroll-delay='0.13' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>W</h1>
                <h1 data-scroll data-scroll-speed='4' data-scroll-delay='0.9' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>i</h1>
                <h1 data-scroll data-scroll-speed='4' data-scroll-delay='0.6' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>b</h1>
                <h1 data-scroll data-scroll-speed='4' data-scroll-delay='0.4' className="text-[10em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>e</h1>
            </div>
            <h2 data-scroll data-scroll-speed='2' data-scroll-delay='0.4' className="text-[1.25em]" style={{font:'kaushan-script shadow-[1px 1px 1px 1px]'}}>Inspire. Create. Belive</h2>
        </Title>
        <video src={MainVideo} loop muted type='video/mp4' autoPlay/>
    </VideoContainer>
  )
}
export default CoverVideo