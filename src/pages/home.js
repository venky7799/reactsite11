import React,{useEffect,useRef} from "react";
import gsap from "gsap";
import Cases from "../component/cases";
import Banner from "../component/banner";
import IntroOverlay from "../component/introOverlay";

const Home=()=>{

    const title = useRef(null);
    useEffect(()=>{
    console.log(title.current);
  
  
  
     
     //gsap animatin//
     
      const tl = gsap.timeline();
      tl.from(".line span",1.8 , {
        y:100,
        ease:"power4.out",
        delay:1,
        skewY:7,
        stagger:{
          amount:0.3
        }
      });
      tl.to('.overlay-top',1.6,{
        height:0,
        ease:"expo.inOut",
        stagger:.4
      })
      tl.to(".overlay-bottom",1.6,{
        width:0,
        ease:"expo.inOut",
        delay:-0.8,
        stagger:{
          amount:.4
        }
      }).to(".intro-overlay",0,{css:{display:'none'}})
      tl.from(".case-image img",1.6,{
        scale:1.4,
        ease:"expo.inOut",
        delay:-2,
        stagger:{
          amount:.4
        }
      });
    },[]);


    return(
        <>
            <IntroOverlay/>
            <Banner/>
            <Cases/>
        </>
    )
}


export default Home;