import React, { useEffect, useState } from "react";
import DisplayProject from "./DisplayProject";
import "./ProjectsBacklog.css";
import Axios from "axios";

const ProjectsBacklog = () => {
  const [projects, setProjects] = useState([]);
  const ENDPOINT = `http://localhost:5000/project`;
  useEffect(() => {
    Axios.get(ENDPOINT).then((result) => {
      console.error(result.data[0]);
      setProjects(result.data);
    });
  }, []);

  return (
    <>
      {projects.map((project) => {
        return <DisplayProject project={project} key={project.Id} />;
      })}
    </>
  );
};

export default ProjectsBacklog;
