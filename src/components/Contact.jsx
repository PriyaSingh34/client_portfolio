import React, { useEffect, useState } from "react";
import quotes from "../assets/quote-icon.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import { FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer id="contact" className=" relative w-full h-auto md:h-[700px] lg:h-full bg-black text-white pb-2">
      <div className="w-full h-auto flex  flex-col-reverse xl:flex-row lg:flex-col-reverse ">
        <div className="w-full  xl:ml-24 lg:w-full xl:w-[45%] p-5 md:px-4 md:py-14 bg-black flex flex-col gap-5 xl:gap-20">
          <div className=" w-full md:w-[90%]  lg:w-full m-auto  flex items-center xl:items-start flex-col gap-5">
            <p className="heading-font text-[20px] md:text-[39px] lg:w-[70%] leading-none md:leading-[48px] text-center xl:text-left">
              Available for select freelance opportunities
            </p>
            <p className="text-[19px]  lg:w-[70%] text-center xl:text-left">
              Have an exciting project you need help with?{" "}
              <br className="hidden md:block" />
              Send me an email or contact me via instant message!{" "}
            </p>
          </div>
          <div className=" flex flex-col items-center xl:items-start gap-2 ">
          <a
              className="text-[26px]  z-[1] relative group"
              href="mailto:priya@gmail.com"
            >
              tamal@tamalsen.dev
              <div className="absolute w-[105%] transition-all ease-in-out duration-400 h-2 group-hover:h-6 bg-purple-600 bottom-2  left-[-7px] z-[-1]"></div>
            </a>

            <a className="text-[20px]" href="">
              Messenger
            </a>
            <a href="text-[20px]">LinkedIn</a>
            <a href="text-[20px]">Instagram</a>
            <a href="text-[20px]">Github</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:h-[700px]   xl:w-[65%]">
          <div className="w-full flex flex-col gap-6 md:w-[47%]  heading-font p-6 md:p-[30px] bg-[#bc60fb] text-white">
            <div className="flex justify-between">
              <img className="w-[49px] h-[39px]" src={quotes} alt="" />
              <img className="w-[85px] h-[85px]" src={photo1} alt="" />
            </div>
            <p className="font-normal">
              Since 2018 Tamal has been responsible for the development of our
              website which has been instrumental to the growth of our company.
              Even while working remotely he’s been highly responsive, organized
              and strategic in his thinking. In addition to staying on top of
              day-to-day site changes and builds, he’s provided us with great
              advice to stay on top of the current changes in web technologies.
              He’s also implemented effective project management and Q&A
              processes. As a result Tamal has been an highly valued and
              impactful member of our team.
            </p>
            <div>
              <p className="font-normal">- Mark Greenspan</p>
              <p className="font-normal">
                {" "}
                Founder at <a href="">influenceTHIS Canada</a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-[53%] ">
            <div className="flex flex-col gap-4 p-6 md:p-[40px] bg-[#0067dc] heading-font w-full lg:h-[45%] h-[50%]">
              <div className="flex justify-between">
                <img className="w-[49px] h-[39px]" src={quotes} alt="" />
                <img className="w-[85px] h-[85px]" src={photo3} alt="" />
              </div>

              <p className="font-normal">
                Tamal is AMAZING! If you have any doubt about hiring him, ask me
                – I am really impressed by this guy!
              </p>
              <div>
                <p className="font-normal">- Mark Greenspan</p>
                <p className="font-normal">
                  {" "}
                  Founder at <a href="">influenceTHIS Canada</a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-6 md:p-[40px] heading-font bg-[#923fe6] w-full lg:h-[55%] h-[60%]">
             
            <div className="flex justify-between">
                <img className="w-[49px] h-[39px]" src={quotes} alt="" />
                <img className="w-[85px] h-[85px]" src={photo2} alt="" />
              </div>
               <p className="font-normal"> 
                Tamal is one of the best professionals that we have known in web
                development skills. Between his skills you can find good
                communication and accuracy with the planning in complex
                projects.
              </p>

              <div className="mt-2">
                <p className="font-normal">- Mark Greenspan</p>
                <p className="font-normal">
                  {" "}
                  Founder at <a href="">influenceTHIS Canada</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      
      </div>
      <div className={`fixed justify-center items-center bottom-5 right-10 transition-all ease-in-out duration-1000 bg-white w-14 h-14 ${isScrolled?" flex":"hidden"}`}>
          <a href="#homeSection">  <FaArrowUp size={25} className="text-[#bb77ff]" /></a>
      </div>
   
    </footer>
  );
};

export default Contact;
