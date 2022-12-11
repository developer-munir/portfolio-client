import React from "react";
import mypic from "../../assets/mypic-bg.png";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  return (
    <div className=" banner">
      <div className=" p-10">
        <div className="flex items-center">
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
            <a
              href="https://drive.google.com/file/d/1BBMz2K_HsXS10Gk0fPQfCJWXN3JJQ1GL/view?usp=share_link"
              target="blank"
            >
              <button
                className="my-bg-red p-2 my-text font-semibold mt-10 px-6 text-center flex items-center"
                data-aos="fade-right"
              >
                <span className="mr-3">Get Resume</span>
                <span>
                  <AiOutlineCloudDownload size={20}></AiOutlineCloudDownload>
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* <div data-aos="zoom-in-left">
          <img
            src={mypic}
            alt=""
            className="rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
