import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const FixedNav = () => {
  const navLinks = (
    <>
      <li className="mr-3">HOME</li>
      <li className="mr-3">CONTACT</li>
    </>
  );
  return (
    <div className="navbar  font-semibold shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <Link className="mr-3 cursor-pointer">
            <FaFacebookF></FaFacebookF>
          </Link>
          <Link className="mr-3 cursor-pointer">
            <FaGithub></FaGithub>
          </Link>
          <Link className="mr-3 cursor-pointer">
            <FaTwitter></FaTwitter>
          </Link>
          <Link className="mr-3 cursor-pointer">
            <FaLinkedinIn></FaLinkedinIn>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className="my-bg-red p-2 my-text font-semibold  px-6 text-center flex items-center">
            Hire Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FixedNav;
