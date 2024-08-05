import React, { useEffect, useState } from "react";
import LogoMain from "../assets/Logo-main.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [hovered, setHovered] = useState(null);

  const navItems = [
    "// home",
    "// expertise",
    "// work",
    "// experience",
    "// contact",
  ];
  console.log("object", hovered);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
    <header id="headerSection" className="w-full h-auto relative z-[100]">
      <div
        className={` w-full ${
          isScrolled
            ? " fixed  top-0  backdrop-blur-[1000px]	 transition-all ease-in-out duration-1000 "
            : ""
        }`}
      >
        <div
          className={`relative z-20 h-10  w-full flex items-center px-4 md:px-6 lg:px-10 py-9 ${
            isScrolled ? " lg:justify-between justify-start" : "justify-between"
          } `}
        >
          <div className="flex gap-5 items-center">
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <FaBars className="w-6 h-6 text-white" />
              </button>
            </div>
            <Link
              to="/"
              className={`flex  items-center ${isScrolled ? "" : ""}`}
            >
              <p className="text-[30px] lg:text-[36px] text-[#6ec1e4] font-semibold">
                TamalSen<span className="text-white">.</span><span className="text-purple-600">_</span>
              </p>
              {/* <img className="w-[182px] h-[40px]" src={LogoMain} alt="Logo" /> */}
            </Link>
          </div>
          <div className="md:flex mt-[-10px] md:gap-4 lg:gap-20 md:items-center">
            <div className="hidden  lg:flex text-xl md:gap-6 lg:gap-10">
              <a
                href="/#homeSection"
                className={`cursor-pointer text-end leading-4 tracking-tight ${
                  isScrolled
                    ? " text-[#91e0ed] hover:text-white"
                    : "text-white hover:text-gray-500"
                } `}
              >
                {" "}
                <span className="text-[10px]">01</span>
                <p className="text-[17.6px]">// home</p>
              </a>
              <a
                href="/#process"
                className={`cursor-pointer text-end leading-4 tracking-tight  ${
                  isScrolled
                    ? " text-[#91e0ed] hover:text-white"
                    : "text-white hover:text-gray-500"
                } `}
              >
                <span className="text-[10px]">02</span>
                <p>// expertise</p>
              </a>
              <a
                href="/#mywork"
                className={`cursor-pointer text-end leading-4 tracking-tight  ${
                  isScrolled
                    ? " text-[#91e0ed] hover:text-white"
                    : "text-white hover:text-gray-500"
                } `}
              >
                <span className="text-[10px]">03</span>
                <p className="text-[17.6px]">// work</p>
              </a>
              <a
                href="/#experience"
                className={`cursor-pointer text-end leading-4 tracking-tight  ${
                  isScrolled
                    ? " text-[#91e0ed] hover:text-white"
                    : "text-white hover:text-gray-500"
                } `}
              >
                <span className="text-[10px]">04</span>
                <p className="text-[17.6px]">// experience</p>
              </a>
              <a
                href="/#contact"
                className={`cursor-pointer text-end leading-4 tracking-tight ${
                  isScrolled
                    ? " text-[#91e0ed] hover:text-white"
                    : "text-white hover:text-gray-500"
                } `}
              >
                <span className="text-[10px]">05</span>
                <p className="text-[17.6px]"> // contact</p>
              </a>
            </div>
          </div>
          <div className="lg:w-[5%] xl:w-[10%]"></div>
        </div>

        <div
          className={`${isOpen ? "left-0" : "-left-full"} ${
            isScrolled ? "h-screen w-[50%] bg-white" : ""
          }  lg:hidden fixed top-0 h-full  w-[70%] md:w-[50%] bg-white z-20 transition-all duration-700 flex flex-col`}
        >
          <div className="md:ml-6 ml-4 mt-6 flex items-center justify-center  px-4 py-4 my-4 rounded-full bg-gray-200 w-10 h-10">
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none"
            >
              <RxCross2 className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <a
            href="/#homeSection"
            className="block md:px-6 px-4 py-2 text-base font-semibold text-black hover:cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            // home
          </a>
          <a
            href="/#process"
            className="block md:px-6 px-4 py-2 text-base font-semibold text-black hover:cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            // expertise
          </a>
          <a
            href="/#mywork"
            className="block md:px-6 px-4 py-2 text-base font-semibold text-black hover:cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            // work
          </a>
          <a
            href="/#experience"
            className="block md:px-6 px-4 py-2 text-base font-semibold text-black hover:cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            // experience
          </a>
          <a
            href="/#contact"
            className="block md:px-6 px-4 py-2 text-base font-semibold text-black hover:cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            // contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
