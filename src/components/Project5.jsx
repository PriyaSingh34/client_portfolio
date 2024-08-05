// src/components/Project1.js
import React, {useState, useEffect} from "react";
import proj5img1 from "../assets/proj5img1.jpeg";
import proj5img2 from "../assets/proj5img2.jpeg";
import { GrFormNextLink } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";
import { GrFormPreviousLink } from "react-icons/gr";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
const Project5 = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-black w-full h-auto">
     <Header/>
     <div className="relative flex  gap-14 xl:gap-8  text-white w-full h-auto px-5 xl:p-4 pb-[200px] lg:pb-[50px]">
     <div className=" lg:flex flex-col h-full hidden">
          <Link
            to="/"
            className="h-16 w-16 rounded-full bg-gray-950 flex justify-center items-center"
          >
            <IoArrowBackSharp size={25} />
          </Link>
        </div>
        <div className="flex flex-col  gap-14 xl:gap-28"><div className="gap-3 mt-8 lg:mt-20 font-bold">
        <p>Web Development</p>
        <h1 className="heading-font mt-4 text-[46px] md:text-[50px] lg:text-[67px] leading-none lg:leading-[85px]">
        Tapy – Download.
        <br /> Connect. Unlock.
        </h1>
      </div>

      <div className="heading-font text-[16px] flex gap-1">
      <p>Home &gt;</p>
        <p>Portfolio &gt;</p>
        <p>Tapy – Download. Connect. Unlock. </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28">
        <p className="heading-font text-[17px] w-full lg:w-[40%] text-[#FFFFFBF] leading-8">
        Tapy connects customers and businesses through a range of customised
          Taps. It unlocks your businesses potential to create engaging
          marketing promotions, leading to an increase in revenue and customer
          satisfaction.
        </p>

      
      </div>

      <div className="flex flex-col gap-4">
        <img className="h-[900px]" src={proj5img1} alt="" />
        <img src={proj5img2} alt="" />
      </div>

      <div className="absolute lg:fixed rounded-md bottom-0 lg:bottom-20 right-0 lg:right-5 bg-white flex flex-col px-8  gap-2 w-full lg:w-[270px] h-[129px] text-black">
        <div className="flex mt-6 justify-between gap-5 ">
          <h1 className="text-[16px]  font-semibold">
            Next Project
          </h1>
          <div className="flex gap-4">
          <Link to="/project/project4#headerSection">
                  {" "}
                  <GrFormPreviousLink size={25} className="" />
                </Link>

                <Link to="/project/project6#headerSection">
                  <GrFormNextLink size={25} className="" />
                </Link>
          </div>
        
        </div>
        <div className="flex items-center justify-between">
            <h1 className="lg:text-[19px] leading-none  font-semibold">
            Walker IP Pty Ltd
           
            </h1>
            
            <div
                className={`fixed justify-center  items-center bottom-5 right-2 md:right-6 lg:bottom-20 lg:right-12 transition-all ease-in-out duration-1000 bg-white w-12 h-12 md:w-16 lg:w-20 md:h-14 ${
                  isScrolled ? " flex" : "hidden"
                }`}
              >
                <a href="#projecthead">
                  {" "}
                  <FaArrowUp size={25} className="text-[#bb77ff]" />
                </a>
              </div>
          </div>
      </div>
      </div>
      </div>
<Footer/>

    </div>
  );
};

export default Project5;
