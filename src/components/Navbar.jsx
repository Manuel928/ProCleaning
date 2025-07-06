import { MenuIcon, XIcon } from "lucide-react";
import { assets } from "../assets/assets.js";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white py-[10px] md:py-[14px] top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12 xl:px-[135px]">
        <a className="cursor-pointer" href="/">
          <img
            src={assets.CleaningLogo}
            alt="Logo"
            className="w-[150px] md:w-[170px] h-[50.28px]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex flex-row gap-7 text-[14px] text-[#4D4D4D]">
            <li className="cursor-pointer hover:text-[#36B864]">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer hover:text-[#36B864]">
              <a href="#">About us</a>
            </li>
            <li className="cursor-pointer hover:text-[#36B864]">
              <a href="#service">Service</a>
            </li>
            <li className="cursor-pointer hover:text-[#36B864]">
              <a href="#">Blog</a>
            </li>
            <li className="cursor-pointer hover:text-[#36B864]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="bg-[#36B864] hidden text-[14px] md:flex cursor-pointer text-white px-6 py-2 rounded-[6px]">
          Get a quote
        </button>

        <MenuIcon
          onClick={() => setIsOpen(true)}
          className="md:hidden w-6.5 h-6.5 md:w-8 md:h-8 cursor-pointer"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-3xl z-50 flex flex-col items-center justify-center space-y-6 px-8">
          <XIcon
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-6 h-6 text-black cursor-pointer"
          />
          <ul className="flex flex-col text-black text-[14px] md:text-[16px] gap-6 items-center">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                About us
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Service
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-[#36B864] cursor-pointer text-[14px] md:text-[16px] text-white px-6 py-2 rounded-[6px]">
            Get a quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
