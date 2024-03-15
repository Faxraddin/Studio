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
            <div>
                <h1 className="text-[10em] font-[kaushan-script]">Wibe</h1>
            </div>
        </Title>
        <video src={MainVideo} loop muted type='video/mp4' autoPlay/>
    </VideoContainer>
  )
}
export default CoverVideo