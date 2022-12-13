import React, { useContext } from "react";
import { MdLiveTv } from "react-icons/md";
import { ProjectsContext } from "../../context/ProjectsProvider";
const ProjectsDetails = () => {
  const { details } = useContext(ProjectsContext);
  console.log(details);
  return (
    <div>
      <div
        className="card rounded-none w-full mt-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <figure>
            <img src={details?.picture} alt="car!" />
          </figure>
          <figure>
            <img src={details?.picture1} alt="car!" />
          </figure>
          <figure>
            <img src={details?.picture2} alt="car!" />
          </figure>
        </div>
        <div className="card-body ">
          <h2 className="card-title font-bold">{details?.title}</h2>
          <p>{details?.details}</p>
          <p>{details?.technology}</p>

          <div className="card-actions justify-end">
            <a href={details?.githubclient} target="blank">
              <button className="my-bg-red my-text px-6 py-2 flex items-center uppercase">
                <span>Github Client</span>
              </button>
            </a>
            <a href={details?.githubserver} target="blank">
              <button className="my-bg-red my-text px-6 py-2 flex items-center uppercase">
                <span>Github Server</span>
              </button>
            </a>
            <a href={details?.live} target="blank">
              <button className="my-bg-red my-text px-6 py-2 flex items-center uppercase">
                <span>Live Site Link</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
