import React from "react";
import mypic from "../../assets/mypic-bg.png";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <div className="flex items-center justify-center  banner">
      <div className="grid grid-cols-2 gap-40">
        <div className="flex items-center ">
          <div className="p-2">
            <h1 className="text-4xl">Hello!</h1>
            <p className="text-3xl mt-2">
              <span>I'm </span>
              <span className="font-bold my-text-red">
                <Typewriter
                  words={[
                    "Munir Hossain Juwel",
                    "Passionate",
                    "Frontend Developer",
                    "Munir Hossain Juwel",
                  ]}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                ></Typewriter>
              </span>
            </p>
            <p className="text-sm font-bold" data-aos="fade-right">
              Frontend Web Developer
            </p>
            <button
              className="my-bg-red p-2 my-text font-semibold mt-10 px-6 text-center flex items-center"
              data-aos="fade-right"
            >
              <span className="mr-3">Get Resume</span>
              <span>
                <AiOutlineCloudDownload size={20}></AiOutlineCloudDownload>
              </span>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in-left">
          <img
            src={mypic}
            alt=""
            className="rounded-full w-[400px] h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
