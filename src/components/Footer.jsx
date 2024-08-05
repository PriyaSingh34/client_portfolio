import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";

import { CgMail } from "react-icons/cg";
import { SiGooglemaps } from "react-icons/si";

function Footer() {
  return (
    <footer className=" w-full    bg-black text-white bottom-0 px-4 py-6">
      <div className=" w-full flex flex-col lg:flex-row gap-1 justify-between p-2">
        
        <p className="text-left lg::text-center text-[15px]">
         &copy; 2024. Made with passion by Tamal Sen.
        </p>
        <p>All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
