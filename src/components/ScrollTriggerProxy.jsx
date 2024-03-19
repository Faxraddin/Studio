import React, { useEffect } from "react";
import gsap from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerProxy = () => {
    const {scroll} = useLocomotiveScroll();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        if(scroll){
            const etement = scroll?.el;
            scroll.on('scroll',ScrollTrigger.update)
        }
    },[])
    return (
        null
    )
}
export default ScrollTriggerProxy