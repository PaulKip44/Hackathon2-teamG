import React, { useEffect, useState } from "react";
import api from "@services/endpoint";

function DisplayProject({ project, user }) {
  const [hasJoined, setHasJoined] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    const ENDPOINT = "/likeproject";
    api.get(ENDPOINT).then((result) => {
      console.error(result);
      // to be implemented: check if this projectId is liked by this user
      setHasLiked();
    });
  }, []);

  const handleJoin = (e) => {
    console.error(e.target.value);
    const ENDPOINT = "/userhasproject";
    const data = {
      userId: user,
      projectId: parseInt(e.target.value, 10),
      role: "Contributor",
    };
    console.error(data);

    api
      .post(ENDPOINT, data)
      .then((result) => {
        if (result.status === 201) {
          setHasJoined(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleLike = (e) => {
    const ENDPOINT = "/likeproject";
    const data = {
      userId: user,
      projectId: parseInt(e.target.value, 10),
    };
    api
      .post(ENDPOINT, data)
      .then((result) => {
        if (result.status === 201) {
          setHasLiked(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const joinProjectButton = () => {
    return (
      <button
        type="button"
        className="btn-blue"
        value={project.Id}
        onClick={handleJoin}
      >
        Join project
      </button>
    );
  };

  const likeProjectButton = () => {
    return (
      <button
        type="button"
        className="btn-orange"
        value={project.Id}
        onClick={handleLike}
      >
        Like
      </button>
    );
  };

  const haslikedButton = () => {
    return (
      <button type="button" className="btn-orange" value={project.Id}>
        You liked this project
      </button>
    );
  };

  const allreadyJoined = () => {
    return (
      <button type="button" className="btn-greyed" value={project.Id}>
        Successfully joined
      </button>
    );
  };

  return (
    <div className="displayproject-main">
      <div className="project-synthesis">
        <details className="project-synthesis">
          <summary>
            <h2>{project.name}</h2>
          </summary>
          <div>{project.description}</div>
        </details>
      </div>
      <div className="feedback">
        <div className="rejoindre">
          {hasJoined ? allreadyJoined() : joinProjectButton()}
        </div>
        <div className="like">
          {hasLiked ? haslikedButton() : likeProjectButton()}
        </div>
      </div>
    </div>
  );
}

export default DisplayProject;
