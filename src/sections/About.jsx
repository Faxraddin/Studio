import React from "react"
import styled from "styled-components"

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'

const Section = styled.section`
position:relative;
min-height: 80vh;
width:80vw;

dislay:flex;
margin:0 auto;
`

const About = () => {
  return (
    <Section className="flex min-h-[80vh] py-0" id="fixed-target">
        <h1 data-scroll data-scroll-speed="-2" style={{fontFamily:'Kaushan Script'}} data-scroll-direction="horizontal" className="text-[10em] absolute m-auto font-semibold top-[1rem] z-[5] left-[5%]">About Us</h1>
        <div data-scroll  data-scroll-sticky data-scroll-target="#fixed-target" className="w-1/2 font-semibold text-[1.25rem] relative z-[5] mt-[20%]">
            We're fashion studio based in california. 
            We create unique designs that will blow your mind. We also design unique jewellary pieces. 
            Fashion is an ART that can not be grasped by everyone.
            <br/>
            <br/>
            We are very dedicated to making our products. 
            We offer unique and creative products to a wide range of people. 
            We have a variety of styles, but for most people, all of the options are in the box. 
            We specialize in making things that make you happy.
            <br/>
            <br/>
            We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
            We are always looking to make something that is easy for everyone.
        </div>
        <div className="w-1/2 relative ">
            <img src={img1} className="h-auto w-full" alt="img1"/>
            <img src={img2} data-scroll data-scroll-speed="5" className="h-auto  small-img-1" alt="img3"/>
            <img src={img3} data-scroll data-scroll-speed="-2" className="h-auto  small-img-2" alt="img3"/>
        </div>
    </Section>
  ) 
}
export default About