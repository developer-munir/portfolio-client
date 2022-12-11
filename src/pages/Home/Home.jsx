import React from "react";
import FixedNav from "../Shared/Navbar/FixedNav";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";

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
        <Projects></Projects>
      </div>
      <div>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;
