import React from "react";
import { Outlet } from "react-router-dom";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
