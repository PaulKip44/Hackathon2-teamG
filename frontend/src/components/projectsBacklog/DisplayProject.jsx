import React from "react";
import api from "@services/endpoint";

const DisplayProject = ({ project, user }) => {
  const handleJoin = (e) => {
    console.error(e.target.value);
    const ENDPOINT = "/userhasproject";
    const data = {
      userId: user,
      projectId: parseInt(e.target.value, 10),
      role: "Contributor",
    };
    console.error(data);

    api.post(ENDPOINT, data).then((result) => {
      console.error(result);
    });
  };
  const handleLike = () => {
    console.error("coucou");
  };

  return (
    <>
      <div className="displayproject-main">
        <details className="project-synthesis">
          <summary>
            <h2>{project.name}</h2>
          </summary>
          <div>{project.description}</div>
        </details>
        <div className="feedback">
          <div className="rejoindre">
            <button
              type="button"
              className="btn-blue"
              value={project.Id}
              onClick={handleJoin}
            >
              Join project
            </button>
          </div>
          <div className="like">
            <button type="button" className="btn-orange" onClick={handleLike}>
              Like
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProject;
