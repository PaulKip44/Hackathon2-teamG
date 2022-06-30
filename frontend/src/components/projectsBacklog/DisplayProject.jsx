import React, { useEffect, useState } from "react";
import api from "@services/endpoint";

function DisplayProject({ project, user, liked, joined }) {
  const [hasJoined, setHasJoined] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const projectLiked = liked.filter((res) => res.project_Id === project.Id);
  const projectJoined = joined.filter((res) => res.project_Id === project.Id);

  useEffect(() => {
    if (projectLiked.length === 0) {
      // console.error("This project is not liked");
    } else {
      // console.error(projectLiked[0]);
      setIsLiked(true);
    }
  }, [project.Id]);

  useEffect(() => {
    if (projectJoined.length === 0) {
      console.error(`The project ${project.Id} is not joined by user ${user}`);
    } else {
      console.error(`The project ${project.Id} is joined by user ID ${user}`);
      setHasJoined(true);
    }
  }, [project.Id]);

  const handleJoin = (e) => {
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

  const handleUnjoin = (e) => {
    const ENDPOINTUNJOIN = `/userunjoinproject/${e.target.value}/${user}`;
    api
      .delete(ENDPOINTUNJOIN)
      .then((res) => {
        if (res.status === 204) {
          console.error(`User ID ${user} unjoined project ${project.Id}`);
          setHasJoined(false);
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
          console.error(`project with id ${project.Id} liked`);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUnlike = (e) => {
    const ENDPOINTUNLIKE = `/unlikeproject/${e.target.value}/${user}`;
    const data = {
      userId: user,
      projectId: parseInt(e.target.value, 10),
    };
    api.delete(ENDPOINTUNLIKE, data).then((res) => {
      if (res.status === 204) {
        console.error(`project with id ${project.Id} unliked`);
        setIsLiked(false);
      }
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
      <button
        type="button"
        className="btn-orange"
        value={project.Id}
        onClick={handleUnlike}
      >
        Unlike
      </button>
    );
  };

  const allreadyJoined = () => {
    return (
      <button
        type="button"
        className="btn-greyed"
        value={project.Id}
        onClick={handleUnjoin}
      >
        Unjoin
      </button>
    );
  };

  return (
    <div className="displayproject-main">
      <div className="project-synthesis">
        <details className="project-synthesis">
          <summary>
            <h3>{project.name}</h3>
          </summary>
          <div>{project.description}</div>
        </details>
      </div>
      <div className="feedback">
        <div className="rejoindre">
          {hasJoined ? allreadyJoined() : joinProjectButton()}
        </div>
        <div className="like">
          {isLiked ? haslikedButton() : likeProjectButton()}
        </div>
      </div>
    </div>
  );
}

export default DisplayProject;
