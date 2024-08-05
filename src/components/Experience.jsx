// import React, { useState } from "react";
// import { IoAdd, IoRemove } from "react-icons/io5";
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";
import upworkLogo from "../assets/upwork-logo.png";
// import { Accordion, AccordionItem } from '@szhsin/react-accordion';

// const Experience = () => {
//   const [toggle, SetToggle] = useState(false);
//   const [toggle1, SetToggle1] = useState(false);
//   const [toggle2, SetToggle2] = useState(false);

//   // const toggleIcon=()=>{
//   //   SetToggle(true)
//   // }





import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const Experience = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    // Toggle FAQ state
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if already open
    } else {
      setOpenFAQ(index); // Open the clicked one
    }
  };

  const faqList = [
    {
      question:(
        <div
        className="md:w-[728px] w-[350px] flex px-3 mr-8 md:px-5 py-3 justify-between items-center gap-4 bg-violet-800 rounded-lg"
      >
        <p className="text-[16px]">Software Engineer @ Saimon Global Ltd</p>
        <div className="flex gap-3 items-center">
          <p className="hidden md:block text-[14px]">2019 - Present</p>
          
        </div>
      </div>

      ),
      answer: ( <div className="w-full mt-4 flex flex-col md:flex-row px-4 py-4 md:px-6 md:py-7 gap-8 bg-violet-950 md:items-center md:justify-between rounded-lg">
        <div className="order-last md:order-1 flex w-full md:w-[70%] flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 text-gray-300">
              <span>Dhaka</span> <span>Bangladesh</span>{" "}
              <span>saimonglobal.com</span>
            </div>
            <p className="text-start">
              Developing front-end and mobile app solutions (B2C, B2B) in
              Travel Tech on React/Next.js framework and Flutter SDK.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-gray-300 text-[14px]">
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Javascript</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Dart</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>React</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>NextJS</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Redux</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Flutter</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-last w-[90px] h-[92px]">
          <img
            className="w-full h-full"
            src={logo}
            alt="Saimon Global Ltd Logo"
          />
        </div>
      </div>),
    },
    {
      question: ( <div
        className="md:w-[728px] w-[350px] flex px-3 md:px-5 py-3 justify-between items-center gap-4 bg-violet-800 rounded-lg"
      >
        <p className="text-[16px]"> Web Developer @ influenceTHIS Canada</p>
        <div className="flex gap-3 items-center">
          <p className="hidden md:block text-[14px]">2018 - 2019</p>
          
        </div>
      </div>),
      answer:(<div className="mt-4 w-full flex flex-col md:flex-row px-4 py-4 md:px-6 md:py-7 gap-8 bg-violet-950 md:items-center md:justify-between rounded-lg">
        <div className="order-last md:order-1 flex w-full md:w-[70%] flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex text-gray-300">
              <span>Remote (Toronto, Canada)</span>
              {"  "}
              <span>influencethis.ca</span>
            </div>
            <p className="text-start">
              Developed the UI and UX eco-system for a conference event
              platform using modular component structures with JS, SCSS,
              Gulp on Node.
            </p>
          </div>

          <div className="flex flex-wrap text-gray-300 gap-3 text-[14px]">
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>JS</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>GULP</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>SCSS</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Nodejs</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-last w-[90px] h-[92px]">
          <img
            className="w-full h-full"
            src={logo2}
            alt="influenceTHIS Logo"
          />
        </div>
      </div>),
    },
    {
      question: ( <div 
        className="md:w-[728px] w-[350px] flex px-3 md:px-5 py-3 justify-between items-center gap-4 bg-violet-800 rounded-lg"
      >
        <p className="text-[16px]">Top Rated Web Developer @ Upwork Inc.</p>
        <div className="flex gap-3 items-center">
          <p className="hidden md:block text-[14px]">2017 - Present</p>
          
        </div>
      </div>),
      answer: ( <div className="mt-4 w-full flex flex-col md:flex-row px-4 py-4 md:px-6 md:py-7 gap-8 bg-violet-950 md:items-center md:justify-between rounded-lg">
        <div className="order-last md:order-1 flex w-full md:w-[70%] flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 text-gray-300">
              <span>Remote</span> <span>upwork.com</span>
            </div>
            <p className="text-start">
              Top-Rated developer on Upwork specializing in Front-end
              (React, WordPress) technologies with a 100% job success rate
              and client satisfaction rating (based on 150+ Jobs, 2500+
              hours).
            </p>
          </div>

          <div className="flex flex-wrap text-gray-300 gap-3 text-[14px]">
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Javascript</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>PHP</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>HTML</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>CSS</p>
            </div>
            <div className="px-4 py-2 bg-blue-700 rounded-[26px]">
              <p>Figma</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-last w-[90px] h-[92px]">
          <img
            className="w-full h-full"
            src={upworkLogo}
            alt="Upwork Logo"
          />
        </div>
      </div>),
    },
   
   
  ];

  return (
    <section id="works" className="heading-font  pb-20 w-full xl:py-20 text-white bg-black">
      <div className="flex flex-col justify-center items-center  p-3 md:p-5 w-full text-center"> <h2 className="text-[40px] md:text-[62px] font-bold mb-10 leading-[50px] md:leading-[80px]">
          Professional
          <br /> Experience
        </h2>
        <div className="w-full lg:w-[728px] border border-black h-auto rounded-xl">
          {faqList.map((faq, index) => (
            <div className="" key={index}>
              <div
                className={`flex flex-col  justify-between items-center py-3 px-5 cursor-pointer ${
                  index !== faqList.length - 1 ? "border-b border-black" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="md:w-[728px] w-full  flex justify-between items-center">
                  <p className="text-[16px] font-semibold">{faq.question}</p>
                   <div className="relative flex items-center justify-center">
                  <div
                    className={`absolute transition-opacity duration-500 ${openFAQ === index ? "opacity-100" : "opacity-0"} ${openFAQ === index ? "transform rotate-0" : "transform rotate-45"
                      }`}
                  >
                    <MdRemoveCircleOutline size={25} />
                  </div>
                  <div
                    className={`absolute transition-opacity duration-500 ${openFAQ !== index ? "opacity-100" : "opacity-0"} ${openFAQ !== index ? "transform rotate-0" : "transform rotate-45"
                      }`}
                  >
                    <MdAddCircleOutline size={25} />
                  </div>
                </div>
                </div>
                <div
                  className={`overflow-hidden transition-all w-full duration-700 ${
                    openFAQ === index
                      ? "max-h-[400px] "
                      : "max-h-0"
                  }`}
                >
                  <div className=" py-3 w-full pt-3">
                    <p className="text-[15px]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




  

export default Experience;