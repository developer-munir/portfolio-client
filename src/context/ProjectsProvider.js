import React, { createContext, useState } from "react";

export const ProjectsContext = createContext();
const ProjectsProvider = ({ children }) => {
  const [details, setDetails] = useState();
  const handleDetails = (project) => {
    setDetails(project);
  };
  const projectsInfo = { handleDetails, details };
  return (
    <ProjectsContext.Provider value={projectsInfo}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
