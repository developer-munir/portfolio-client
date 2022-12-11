import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-6 pb-6 px-6">
      <div className="footer-icons ">
        <div className="flex justify-between my-20 items-center  w-60 mx-auto">
          <Link className=" cursor-pointer">
            <FaFacebookF size={30}></FaFacebookF>
          </Link>
          <Link className=" cursor-pointer">
            <FaGithub size={30}></FaGithub>
          </Link>
          <Link className=" cursor-pointer">
            <FaTwitter size={30}></FaTwitter>
          </Link>
          <Link className=" cursor-pointer">
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </Link>
        </div>
      </div>
      <strong className="mt-6 text-center block">
        COMEOUT © 2022. ALL RIGHTS RESERVED BY DEVELOPER MUNIR.
      </strong>
    </div>
  );
};

export default Footer;
