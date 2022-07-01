import "./Description.css";
import api from "@services/endpoint";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Description() {
  const [desc, setDesc] = useState("");
  const params = useParams();

  useEffect(() => {
    api
      .get(`/projects/${params.projectId}`)
      // then((res) => setDesc(res.data.map((e) => e)))
      .then((res) => setDesc(res.data[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section id="project-description">
      <h2>Description du projet</h2>
      <p>{desc.description}</p>
    </section>
  );
}
