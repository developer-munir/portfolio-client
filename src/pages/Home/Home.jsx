import React from "react";
import FixedNav from "../Shared/Navbar/FixedNav";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <div>
        <FixedNav></FixedNav>
      </div>
      <div className="mb-4">
        <Header></Header>
      </div>
    </div>
  );
};

export default Home;
