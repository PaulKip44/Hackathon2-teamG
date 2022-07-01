import React, { useEffect, useState } from "react";
import api from "@services/endpoint";
import "./ProjectsBacklog.css";
import Nav from "@components/Nav/Nav";
import SearchBarDashBoard from "@components/SearchBarDashBoard";
import DisplayProject from "./DisplayProject";

function ProjectsBacklog() {
  const [user, setUser] = useState(3);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [liked, setLiked] = useState([]);
  const [joined, setJoined] = useState([]);
  const [isLikedLoading, setIsLikedLoading] = useState(true);
  const [isJoinedLoading, setIsJoinedLoading] = useState(true);
  const [canRender, setCanRender] = useState(false);
  const ENDPOINTPROJECTS = `/projects`;
  const ENDPOINTUSERS = `/users`;

  useEffect(() => {
    api
      .get(ENDPOINTPROJECTS)
      .then((result) => {
        setProjects(result.data);
      })
      .catch((error) => console.error(error));
  }, [user]);

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
        setIsLikedLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);

  useEffect(() => {
    const ENDPOINTJOIN = `/userhasproject/${user}`;
    api
      .get(ENDPOINTJOIN)
      .then((result) => {
        setJoined(result.data);
        console.error(result.data);
        setIsJoinedLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);

  useEffect(() => {
    if (isLikedLoading === false && isJoinedLoading === false) {
      setCanRender(true);
    } else setCanRender(false);
  }, [isLikedLoading, isJoinedLoading, user]);

  return (
    <div id="projects-container">
      <Nav />

      <div className="content">
        <SearchBarDashBoard />
        <div className="user-selection">
          <select
            name="user"
            id="user-select"
            onChange={(e) => {
              setUser(e.target.value);
              setIsLikedLoading(true);
              setTimeout(() => {
                setIsLikedLoading(false);
              }, 20);
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
        {canRender === false ? (
          "Loading..."
        ) : (
          <>
            {projects.map((project) => {
              return (
                <DisplayProject
                  project={project}
                  key={project.Id}
                  user={user}
                  liked={liked}
                  joined={joined}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectsBacklog;
