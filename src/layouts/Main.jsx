import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import FixedNav from "../pages/Shared/Navbar/FixedNav";
import "./main.css";
const Main = () => {
  return (
    <div className="main min-h-screen bg-white">
      <div>
        <FixedNav></FixedNav>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
