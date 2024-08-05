// src/components/Project1.js
import React,{useEffect, useState} from "react";
import proj3img1 from "../assets/proj3img1.jpeg";
import proj3img2 from "../assets/proj3img2.jpeg";
import proj1img3 from "../assets/booking-panel.jpeg";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa6";

const Project3 = () => {
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
    <div id="projecthead" className="flex flex-col gap-4 bg-black w-full h-auto">
      <Header />
      <div className="relative flex  gap-14 xl:gap-8  text-white w-full h-auto px-5 xl:p-4 pb-[200px] lg:pb-[50px]">
      <div className=" lg:flex flex-col h-full hidden">
          <Link
            to="/"
            className="h-16 w-16 rounded-full bg-gray-950 flex justify-center items-center"
          >
            <IoArrowBackSharp size={25} />
          </Link>
        </div>
        <div className="flex flex-col  gap-14 xl:gap-28">
          <div className="gap-3 mt-8 lg:mt-20 font-bold">
            <p>Web Development</p>
            <h1 className="heading-font mt-4 text-[46px] md:text-[50px] lg:text-[67px] leading-none lg:leading-[85px]">
              Khora – Urban <br /> Thinkers Consulting <br /> Firm
            </h1>
          </div>

          <div className="heading-font w-full text-[14px] flex gap-1">
            <p>
              Home &gt;Portfolio &gt; Khora – Urban Thinkers Consulting Firm{" "}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-24">
            <p className="heading-font text-[17px] w-full lg:w-[40%] text-[#FFFFFBF] leading-8">
              Khora Urban Thinkers works on the complexity of urban challenges
              with creativity, design and innovation. We go one step further
              with a team that is diverse and passionate for cities that
              implements sustainable urban solutions from the idea to their
              execution. Natives of the public sector, we work on cities from
              urban planning, environment, technology and economy with a
              people-centred focus.
            </p>

            <div className="flex gap-2 items-center ">
              <p>Open Project</p>
              <GrFormNextLink size={25} className="text-white" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img src={proj3img2} alt="" />
            <img src={proj3img1} alt="" />
          </div>

          <div className="absolute lg:fixed rounded-md bottom-0 lg:bottom-20 right-0 lg:right-5 bg-white flex flex-col px-8  gap-2 w-full lg:w-[270px] h-[129px] text-black">
            <div className="flex mt-6 justify-between gap-5 ">
              <h1 className="text-[16px]  font-semibold">Next Project</h1>
              <div className="flex gap-4">
              <Link to="/project/project2#headerSection">
                  {" "}
                  <GrFormPreviousLink size={25} className="" />
                </Link>

                <Link to="/project/project4#headerSection">
                  <GrFormNextLink size={25} className="" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between">
            <h1 className="lg:text-[19px] leading-none font-semibold">
            Khora – Urban Thinkers Consulting Firm

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
      <Footer />
    </div>
  );
};

export default Project3;
