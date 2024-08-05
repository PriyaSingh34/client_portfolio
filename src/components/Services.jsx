import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import rightSideArrow from "../assets/right-side-arrow.png";
import mobileImage from "../assets/tryotel-animation-poster-test.png";
import mobileVideo from "../assets/mobile-video.webm";
import { Link } from "react-router-dom";
const MyWork = () => {
  return (
    <section id="mywork" className="w-full bg-black text-white  m-auto ">
      <div className="w-full h-full flex flex-col gap-6 items-center  md:px-0   py-28">
        {/* <h2 className="text-5xl font-bold mb-14 lg:mb-10">My Expertise</h2> */}
        <div className="w-[90%] md:w-full xl:w-[1284px] h-full flex  flex-col md:flex-row items-center  md:gap-6 lg:gap-8 ">
          <div className=" md:w-[45%]  xl:w-[558px] md:h-[682px] flex flex-col gap-10 md:pl-10">
            <p className="heading-font text-[60px] md:text-[105px] font-bold leading-[80px] md:leading-[130px]">
              My<br /> Work
            </p>

            <p className="leading-7 text-lg lg:text-[20px]">
              Deployed scalable travel, event and telemedicine web and hybrid
              mobile apps using React SPA and PWA.
              <br />
              Collaborated in 140+ projects with 50+ clients all around the
              world. I am also interested in data analytics and visualization.
            </p>
          </div>
          <div className="relative w-full lg:w-[55%] md:h-[682px] h-[590px] p-4 md:p-0 flex flex-row-reverse overflow-y-hidden xl:overflow-y-visible ">
            <div className="absolute left-[-210px] md:left-[-130px] lg:left-[-80px] top-[-25px] md:top-[-35px] md:w-[850px] w-[700px]  h-full md:h-[623px] ">
              <video src={mobileVideo} autoPlay loop muted></video>
            </div>
            <div className="absolute left-0 bottom-[-332px] flex w-full xl:w-[35%] flex-col h-full">
              <img src={rightSideArrow} className="md:ml-20 w-20 h-20  md:w-32 md:h-32" alt="" />
              <p className="text-lg md:text-2xl mt-2">Featured Project</p>
              <p className="text-4xl mt-1">Tryotel App</p>
              <Link to="/project/project4" className="p-2 w-36 mt-6 bg-violet-700 text-lg font-semibold rounded-md">
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;