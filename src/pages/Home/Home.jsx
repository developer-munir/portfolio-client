import React from "react";
import FixedNav from "../Shared/Navbar/FixedNav";
import Header from "./Header";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <div>
        <FixedNav></FixedNav>
      </div>
      <div className="mb-4">
        <Header></Header>
      </div>
      <div>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default Home;
