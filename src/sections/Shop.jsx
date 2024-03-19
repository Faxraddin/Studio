import React from "react"
import styled from "styled-components"

import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'

const Section = styled.section`
position:relative;
width:100vw;
height:auto;
overflow:hidden;

display: flex; 
justify-content:flex-start;
align-items:flex-start;
margin:0 auto;
`

const Shop = () => {
  return (
    <Section data-scroll data-scroll-speed='-1'>
      <h1 style={{fontFamily:'Kaushan Script'}} className="text-[5em] shadow-lg z-[11] text-[#fff] absolute m-auto font-semibold top-[1rem] left-[5%]">New Arrivals</h1>
      <div className="bg-[#202020] text-[#fff] z-[5]  left-0 flex justify-center items-center w-[35%] min-h-[100vh]">
        <p className="text-[1.25em] font-semibold w-4/5 m-[0 auto]">
          The brand new collection is currently being developed in USA. 
          We create our products using best quality material, including the use of some of the pure fabrics to make our products. 
          All products are made using the best materials, from the finest cotton to the finest fabrics.

          We have lots of different clothing options like shoes, jackets and dresses. 
          Not only clothes but we also provide unique Jewellery as well. 
          It is great for us to carry our new clothes all around the country and look different.
        </p>
      </div>
      <div className="bg-[#bebebe] absolute left-[35%] min-h-[100vh] w-[65%] flex justify-start items-center pl-[30%]">
        <h1 className="w-[5rem] margin-[0 2rem]">img</h1>
        <h1 className="w-[5rem] margin-[0 2rem]">img</h1>
        <h1 className="w-[5rem] margin-[0 2rem]">img</h1>
        <h1 className="w-[5rem] margin-[0 2rem]">img</h1>
        <h1 className="w-[5rem] margin-[0 2rem]">img</h1>
      </div>
    </Section>
  )
}
export default Shop