import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./component/header";
import Home from "./pages/home";


function App() {
  useEffect(()=>{
  //prevents flashing//
  gsap.to('body', 0 ,{css:{visibility:"visible"}});

  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh',`${vh}px`);
    

  });
 


  return (
    <>
     
      <Header/>
      <Home/>
    </>
  );
}

export default App;
