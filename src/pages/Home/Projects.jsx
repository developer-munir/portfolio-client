import React, { useContext, useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsProvider";

const Projects = () => {
  const { handleDetails } = useContext(ProjectsContext);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="my-6 py-6 px-6">
      <span className="flex items-center ">
        <span className=" text-3xl font-bold my-3 uppercase">My Projects</span>
        <span className="mx-4">
          <FaArrowRight size={25}></FaArrowRight>
        </span>
      </span>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        {projects?.map((project) => (
          <div
            className="card rounded-none w-full  shadow-md  "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={project?.id}
          >
            <figure className="h-[300px]">
              <img src={project?.picture} alt="car!" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title font-bold">{project?.title}</h2>
              <p>{project?.technology}</p>
              <div className="card-actions justify-end">
                <Link to="/details" onClick={() => handleDetails(project)}>
                  <button className="my-bg-red my-text px-6 py-2 flex items-center uppercase">
                    <span>See Project Details</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
