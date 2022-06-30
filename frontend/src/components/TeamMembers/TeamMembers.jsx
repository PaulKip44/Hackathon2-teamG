import "./teamMembers.css";
import api from "@services/endpoint";
import DataTable from "react-data-table-component";

import React, { useEffect, useState } from "react";

function TeamMembers() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    api
      .get("./users")
      .then((res) => setUsers(res.data.map((e) => e)))
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
      selector: (row) => row.type,
    },
    {
      id: 4,
      name: "Office Location",
      selector: (row) => row.agence_Id,
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
