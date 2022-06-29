import React, { useEffect, useState } from "react";
import DisplayProject from "./DisplayProject";
import "./ProjectsBacklog.css";
import api from "@services/endpoint";

const ProjectsBacklog = () => {
  const [user, setUser] = useState(1);
  const [projects, setProjects] = useState([]);
  const ENDPOINT = `/projects`;
  useEffect(() => {
    api.get(ENDPOINT).then((result) => {
      console.error(result.data[0]);
      setProjects(result.data);
    });
  }, []);

  return (
    <>
      {projects.map((project) => {
        return (
          <DisplayProject project={project} key={project.Id} user={user} />
        );
      })}
    </>
  );
};

export default ProjectsBacklog;
