import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import Navbar from "../layouts/Navbar";

const Section = styled.section`
position:relative;
min-height: 100vh;
over-flow:hidden;
`

const Home = () => {
  return (
    <Section>
        <CoverVideo/>
        <Logo/>
        <Navbar/>
    </Section>
  )
}
export default Home