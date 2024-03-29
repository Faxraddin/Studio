import React, { useLayoutEffect, useRef } from "react"
import styled from "styled-components"

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
position:relative;
width:100vw;
height:auto;
overflow:hidden;
top:50px;

display: flex; 
justify-content:flex-start;
align-items:flex-start;
margin:0 auto;
`

const Item = styled.div`
display:inline-block;
width:20rem;
margin-right:6rem;
img{
  cursor:pointer;
  height:auto;
  width:100%;
};

h1{
  font-weight:300;
  text-align:center;
  cursor:pointer;
}
`

const Product = ({img, title='' }) => {
  return(
    <Item>
      <img src={img} alt={title}/>
      <h1>{title}</h1>
    </Item>
  )
}

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(()=>{
    let element = ref.current;
    const scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let tl = gsap.timeline();
    setTimeout(()=>{
      tl.to(element,{
        scrollTrigger:{
          trigger: element,
          start:'top top',
          end:pinWrapWidth,
          pin:true,
          scrub:true,
          scroller:'.App'
        },
        ease:'none',
        height:`${scrollingElement.scrollWidth}px`
      })

      tl.to(scrollingElement,{
        scrollTrigger:{
          trigger: scrollingElement,
          start:'top top',
          end:pinWrapWidth,
          
          scrub:true,
          scroller:'.App'
        },
        ease:'none',
        x:-pinWrapWidth
      })

      ScrollTrigger.refresh();
    },1000)
    return()=>{

    }
  },[])
  return (
    <Section data-scroll data-scroll-speed='-1'>
      <h1 style={{fontFamily:'Kaushan Script'}} className="text-[5em] shadow-lg z-[11] text-[#fff] absolute m-auto font-semibold top-[2rem] left-[5%]">New Arrivals</h1>
      <div className="bg-[#202020] text-[#fff] z-[5]  left-0 flex justify-center items-center w-[35%] min-h-[100vh]">
        <p className="text-[1.25em] font-semibold w-4/5 m-[0 auto]">
          The brand new collection is currently being developed in USA. 
          We create our products using best quality material, including the use of some of the pure fabrics to make our products. 
          All products are made using the best materials, from the finest cotton to the finest fabrics.
          <br/>
          <br/>
          We have lots of different clothing options like shoes, jackets and dresses. 
          Not only clothes but we also provide unique Jewellery as well. 
          It is great for us to carry our new clothes all around the country and look different.
        </p>
      </div>
      <div ref={horizontalRef} className="bg-[#bebebe] absolute left-[35%] min-h-[100vh] w-[65%] flex justify-start items-center pl-[30%]">
        <Product img={img1} title="xyz"/>
        <Product img={img1} title="xyz"/>
        <Product img={img1} title="xyz"/>
        <Product img={img1} title="xyz"/>
        <Product img={img1} title="xyz"/>
      </div>
    </Section>
  )
}
export default Shop