import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-[#111D15] text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img
            className="w-[150px] md:w-[204px] h-[50.28px]"
            src={assets.FooterLogo}
            alt="logo"
          />
          <p className="mt-6 text-sm font-light">
            Stay updated with our latest cleaning tips, service updates, and
            helpful articles on maintaining a spotless home.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:justify-end gap-y-10 gap-x-20">
          <div>
            <h2 className="font-bold mb-5 text-white">Company</h2>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5 text-white">Know more</h2>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white mt-5">Newsletter</h2>
            <div className="text-sm space-y-2">
              <div className="flex flex-col items-start gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-[#36B864] outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-[#36B864] cursor-pointer w-24 h-9 text-white rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        {new Date().getFullYear()} Procleaning. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer