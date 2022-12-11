import React from "react";
import project1 from "../../assets/screencapture-assignment-11-12beb-web-app-2022-12-11-02_27_16.png";
import project2 from "../../assets/screencapture-overstock-shop-web-app-2022-12-11-02_28_11.png";
import project3 from "../../assets/screencapture-assignment-ten-8362c-web-app-2022-12-11-02_27_27.png";

import { FaArrowRight } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const Projects = () => {
  return (
    <div className="my-6 py-6 px-6">
      <span className="flex items-center ">
        <span className=" text-3xl font-bold my-3 uppercase">My Projects</span>
        <span className="mx-4">
          <FaArrowRight size={25}></FaArrowRight>
        </span>
      </span>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        <div
          className="card rounded-none w-full  shadow-md  "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <figure className="h-[300px]">
            <img src={project2} alt="car!" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">
              Overstock Shop - A product resale website
            </h2>
            <p>
              Technologies: React, Tailwind ,Firebase, Node , Express , Mongodb
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://overstock-shop.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="my-bg-red my-text px-6 py-2 flex items-center rounded-xl">
                  <span>Live</span>
                  <span className="ml-3">
                    <MdLiveTv></MdLiveTv>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card rounded-none w-full  shadow-md "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <figure className="h-[300px]">
            <img src={project1} alt="car!" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">
              Wedding Family BD - A Wedding service website
            </h2>
            <p>
              Technologies: React, Tailwind ,Firebase, Node , Express , Mongodb
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://assignment-11-12beb.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="my-bg-red my-text px-6 py-2 flex items-center rounded-xl">
                  <span>Live</span>
                  <span className="ml-3">
                    <MdLiveTv></MdLiveTv>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card rounded-none w-full  shadow-md "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <figure className="h-[300px]">
            <img src={project3} alt="car!" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">
              Panabee.io - A Programming Course website
            </h2>
            <p>
              Technologies: React Router, React PDF, Tailwind css, Node.js,
              Express.js, Firebase
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://assignment-ten-8362c.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="my-bg-red my-text px-6 py-2 flex items-center rounded-xl">
                  <span>Live</span>
                  <span className="ml-3">
                    <MdLiveTv></MdLiveTv>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
