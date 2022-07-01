import "./teamMembers.css";
import api from "@services/endpoint";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

function TeamMembers() {
  const [users, setUsers] = useState("");
  const params = useParams();

  useEffect(() => {
    api
      .get(`/projects/${params.projectId}`)
      .then((res) => setUsers(res.data.map((e) => e)))
      // then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    {
      id: 1,
      name: "Firstname",
      selector: (row) => row.firstname,
    },
    {
      id: 2,
      name: "Lastname",
      selector: (row) => row.lastname,
    },
    {
      id: 3,
      name: "Role",
      selector: (row) => row.role,
    },
    {
      id: 4,
      name: "Office Location",
      selector: (row) => row.city,
    },
  ];
  return (
    <div id="teamMembers">
      <h2>Team Members</h2>
      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default TeamMembers;
