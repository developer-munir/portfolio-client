import React from "react";
import myImg from "../../assets/WhatsApp Image 2022-12-13 at 14.54.43.jpeg";
const AboutMe = () => {
  return (
    <div className="my-6 py-6 px-6">
      <div className=" ">
        <div className=" grid grid-cols-2">
          <div>
            <img src={myImg} alt="" className="w-full p-20" />
          </div>
          <div className="py-20">
            <h1 className="text-5xl font-bold">Munir Hossain Juwel</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
