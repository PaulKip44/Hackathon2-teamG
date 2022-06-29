import React from "react";

const DisplayProject = ({ project }) => {
  const handleJoin = () => {
    console.error("coucou");
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
            <button type="button" className="btn-blue" onClick={handleJoin}>
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
