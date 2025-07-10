import { PhoneCallIcon, Mail, Navigation } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[135px] py-[75px]">
      <div className="flex flex-col items-start lg:flex-row gap-[36px] lg:items-center lg:gap-[75px] justify-between">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-[24px]">
          <h3 className="text-[20px] md:text-[24px] font-semibold text-black">
            Find us
          </h3>

          <div className="bg-lighterGray py-[10px] px-[20px] rounded-[12px] flex items-center gap-[12px]">
            <a
              href=""
              className="flex p-2 h-9 w-9 items-center justify-center rounded-full bg-[#36B864]"
            >
              <PhoneCallIcon className="h-6 w-6 text-white" />
            </a>
            <div>
              <p className="font-medium text-[14px] text-black">Call Us</p>
              <p className="text-grayText text-[12px]">+(08) 255 201 888</p>
            </div>
          </div>

          <div className="bg-lighterGray py-[10px] px-[20px] rounded-[10px] flex items-center gap-[16px]">
            <a
              href=""
              className="flex p-2 h-9 w-9 items-center justify-center rounded-full bg-[#36B864]"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
            <div>
              <p className="font-medium text-[14px] text-black">Email Now</p>
              <p className="text-grayText text-[12px]">Hello@procleaning.com</p>
            </div>
          </div>

          <div className="bg-lighterGray py-[10px] px-[20px] rounded-[10px] flex items-center gap-[16px]">
            <a
              href=""
              className="flex p-2 h-9 w-9 items-center justify-center rounded-full bg-[#36B864]"
            >
              <Navigation className="h-6 w-6 text-white" />
            </a>
            <div>
              <p className="font-medium text-[14px] text-black">Address</p>
              <p className="text-grayText text-[12px]">
                7510, Brand Tower, New York, USA
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-[24px]">
          <div>
            <p className="text-[20px] md:text-[24px] font-semibold text-black mb-2">
              Keep In Touch
            </p>
            <p className="text-[14px] text-grayText leading-relaxed">
              We prioritize responding to your inquiries promptly to ensure you
              receive the assistance you need in a timely manner
            </p>
          </div>

          <form className="flex flex-col gap-[16px]">
            <input
              type="text"
              placeholder="Name"
              className="bg-lighterGray px-[16px] py-[12px] rounded-[6px] outline-none text-[14px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-lighterGray px-[16px] py-[12px] rounded-[6px] outline-none text-[14px]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="bg-lighterGray px-[16px] py-[12px] rounded-[6px] outline-none text-[14px] resize-none"
            />

            <button
              type="submit"
              className="self-start bg-green text-white text-[14px] font-medium px-[24px] py-[12px] rounded-[6px] hover:bg-darkGreen transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
