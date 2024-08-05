import React from "react";
// import Header from "./components/Header";
import Home from "./Home.jsx"
import Expertise from "./Expertise.jsx";
import Experience from "./Experience";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    
      <Main className="w-full bg-[#1A191D]">
        <Home/>
        <Expertise />
        <Services />
        <Projects/>
        <Experience />
        <Contact/>
      </Main>
     
  
  );
};

export default Main;
