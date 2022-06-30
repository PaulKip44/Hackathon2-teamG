import React, { useEffect, useState } from "react";
import api from "@services/endpoint";
import DisplayProject from "./DisplayProject";
import "./ProjectsBacklog.css";

function ProjectsBacklog() {
  const [user, setUser] = useState(3);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [liked, setLiked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ENDPOINTPROJECTS = `/projects`;
  const ENDPOINTUSERS = `/users`;

  useEffect(() => {
    api
      .get(ENDPOINTPROJECTS)
      .then((result) => {
        console.error(result.data[0]);
        setProjects(result.data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    api
      .get(ENDPOINTUSERS)
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const ENDPOINTLIKE = `/likeproject/${user}`;
    api
      .get(ENDPOINTLIKE)
      .then((result) => {
        setLiked(result.data);
        console.error(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
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
              {users.map((usermap) => {
                return (
                  <option key={usermap.Id} value={usermap.Id}>
                    {usermap.firstname} {usermap.lastname}
                  </option>
                );
              })}
            </select>
          </div>

          {projects.map((project) => {
            return (
              <DisplayProject
                project={project}
                key={project.Id}
                user={user}
                liked={liked}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProjectsBacklog;
