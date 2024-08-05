import React from "react";
import Header from "./Header";
import bgImage from "../assets/bg image.jpg";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

import mov from "../assets/mouse.gif"
const Home = () => {

  return (
    <section
      id="homeSection"
      className=" h-[90vh] md:h-[100vh] w-full pb-20 bg-[#1A191D] text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className="flex flex-col w-full 2xl:m-auto   gap-10 items-center justify-center h-full px-6">
        <h1 className="text-white text-[50px] md:text-[76px] tracking-wide  lg:text-[144px] xl:text-[150px] 2xl:text-[200px]  w-full   text-center mt-[50px] font-bold leading-[50px] lg:leading-[90px] 2xl:leading-[240px]">
          TAMAL SEN
        </h1>
        <p className="w-full md:w-[70%] text-white tracking-wider mt-2 text-center  text-[22px]">
          SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
        </p>

        <a href="#process" className="w-[60px] h-[60px] pt-20"><img src={mov} alt="" /></a>
      </div>
    </section>
  );
};

export default Home;
