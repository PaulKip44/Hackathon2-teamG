import React, { useEffect, useState } from "react";
import DisplayProject from "./DisplayProject";
import "./ProjectsBacklog.css";
import api from "@services/endpoint";

const ProjectsBacklog = () => {
  const [user, setUser] = useState(1);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const ENDPOINTPROJECTS = `/projects`;
  const ENDPOINTUSERS = `/users`;
  useEffect(() => {
    api.get(ENDPOINTPROJECTS).then((result) => {
      console.error(result.data[0]);
      setProjects(result.data);
    });
    api.get(ENDPOINTUSERS).then((result) => {
      console.error(result.data[0]);
      setUsers(result.data);
    });
  }, []);

  return (
    <>
      <div className="user-selection">
        <select
          name="user"
          id="user-select"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        >
          <option value="">-- Please select a user</option>
          {users.map((user) => {
            return (
              <option value={user.Id}>
                {user.firstname} {user.lastname}
              </option>
            );
          })}
        </select>
      </div>
      {projects.map((project) => {
        return (
          <DisplayProject project={project} key={project.Id} user={user} />
        );
      })}
    </>
  );
};

export default ProjectsBacklog;
