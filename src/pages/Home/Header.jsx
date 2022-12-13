import React from "react";
import { AiOutlineCloudDownload, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="p-10">
        <div className="flex items-center">
          <div className="p-2">
            <h1 className="text-sm ">Hi, my name is</h1>
            <p className="text-5xl mt-2">
              <span className="name-font">Munir Hossain Juwel.</span>
            </p>
            <p className="name-font mt-2">
              <span className="font-bold ">I build things for the web.</span>
            </p>
            <p className="text-3xl  mt-[50px]" data-aos="fade-right ">
              I'm a front-end developer. I have developed many types of
              front-ends Website's. I'm passionate about <br /> beautiful
              interfaces and intuitively implemented UX.
            </p>
            <div className="flex mb-[80px]">
              <a
                href="https://drive.google.com/file/d/1BBMz2K_HsXS10Gk0fPQfCJWXN3JJQ1GL/view?usp=share_link"
                target="blank"
              >
                <button
                  className="my-bg-red p-2 my-text mt-10 px-6 text-center flex items-center"
                  data-aos="fade-right"
                >
                  <span className="mr-3">Get Resume</span>
                  <span>
                    <AiOutlineCloudDownload size={20}></AiOutlineCloudDownload>
                  </span>
                </button>
              </a>
              <Link to="/projects">
                <button
                  className="my-bg-red ml-3 p-2 my-text mt-10 px-6 text-center flex items-center"
                  data-aos="fade-right"
                >
                  <span className="mr-3">Explore My Projects</span>
                  <span>
                    <AiOutlineArrowRight size={20}></AiOutlineArrowRight>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
