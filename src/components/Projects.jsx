import React from "react";
import img from "../assets/bg image.jpg";
import { Link } from "react-router-dom";
import project1Img from "../assets/ailabgranada.com-poster.jpg";
import project2Img from "../assets/flighlocal-cover-image.jpg";
import project3Img from "../assets/tapy-co-poster.jpg";
import project4Img from "../assets/khora-urban-thinkers-poster-r.jpg";
import project5Img from "../assets/tryotel_ios_mockup-scaled.jpg";
import project6Img from "../assets/tryotel-b2c-cover.jpg";
import project7Img from "../assets/walkerip-com-poster.jpg";
import project8Img from "../assets/kananaskis-nordic-spa-poster.jpg";
import project9Img from "../assets/ahigherthought.com-poster.jpg";
import project10Img from "../assets/all-the-roads-of-chittagong-cover.jpg";
const Projects = () => {
  return (
    <section id="process" className=" bg-black flex justify-center w-full">
      <div className="bg-black flex flex-col xl:flex-wrap gap-4  m-auto  text-white px-5 py-10 md:px-10 md:py-16 lg:py-24 ">
        <div className="flex flex-col md:flex-row gap-6">
          <Link to="/project/project1">
            <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px] flex flex-col gap-6">
              <div className="overflow-hidden">
              <img src={project1Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
              </div>
            
              <div className="p-2 flex flex-col gap-1">
                <h1 className="text-[19px] font-bold">
                AI Lab Granada
                </h1>
                <p className="text-[#ffffffbf]">Web Development</p>
              </div>
            </div>
          </Link>
          <Link to="/project/project2">
            <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px]  flex flex-col gap-6 overflow-hidden">
            <div className="overflow-hidden">
              <img src={project2Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
             </div>
              <div className="p-2 flex flex-col gap-1">
                <h1 className="text-[19px] font-bold">
                  Flight Local (B2B Travel Solution)
                </h1>
                <p className="text-[#ffffffbf]">Web Development</p>
              </div>
            </div>
          </Link>
        </div>
    <div className="flex flex-wrap gap-6"> 
    <Link to="/project/project4" className=" xl:w-[800px]">
        <div className="bg-gray-950 md:h-[666px] xl:h-[671px] w-full xl:w-[800px]">
          <div className="bg-gray-950 w-full h-full flex flex-col gap-4 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project5Img} className="transition-transform duration-300 hover:scale-110 md:h-[590px] w-full" alt="" />
</div>
            <h1 className="text-[19px] p-2 font-bold">
              Tryotel-Cross-Platform Travel App
            </h1>
          </div>
        </div>
        </Link>

        <div className="xl:w-[380px]  xl:mt-[-440px]  flex flex-col md:flex-row xl:flex-col gap-6">
        <Link to="/project/project3">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px]  flex flex-col gap-5 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project4Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
           </div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">
              Khora-Urban Thinkers Consulting Firm
              </h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
          </Link>
          <Link to="/project/project5">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px] flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project3Img} className=" w-full transition-transform duration-300 hover:scale-110" alt="" />
           </div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">
              Tapy – Download. Connect. Unlock.
              </h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
          </Link>
        </div>
    </div>


      <div className="flex flex-wrap gap-6">
      <Link to="/project/project6" className="xl:w-[800px]">
        <div className="bg-gray-950 md:h-[696px] xl:h-[671px] w-full xl:w-[800px]">
          <div className="bg-gray-950 w-full h-full flex flex-col gap-4 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project7Img} className="md:h-[590px] w-full transition-transform duration-300 hover:scale-110" alt="" />
</div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">Walker IP Pty Ltd</h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
        </div>
        </Link>


        <div className="flex flex-col md:flex-row xl:flex-col gap-6 xl:mt-[-225px]">
        <Link to="/project/project7">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px]  flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project6Img} className=" w-full transition-transform duration-300 hover:scale-110" alt="" />
           </div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">Tryotel Web (B2C)</h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
          </Link>
          <Link to="/project/project8">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px] flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project8Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
            </div>
            <div className="p-2 flex flex-col gap-1">
              <h1 className="text-[19px] font-bold">
                Kananaskis Nordic Spa Website
              </h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
        <div className="flex flex-col md:flex-row gap-6">
        <Link to="/project/project9">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px]   flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project10Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
            </div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">
              All the roads of Chittagong
              
              </h1>
              <p className="text-[#ffffffbf]">Data Visualization</p>
            </div>
          </div>
          </Link>
          <Link to="/project/project10">
          <div className="bg-gray-950 lg:h-[422px] max-w-[470px] xl:w-[380px]   flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden">
            <img src={project9Img} className="transition-transform duration-300 hover:scale-110 w-full" alt="" />
           </div>
            <div className="flex p-2 flex-col gap-1">
              <h1 className="text-[19px] font-bold">
                A Higher Thought
              </h1>
              <p className="text-[#ffffffbf]">Web Development</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
