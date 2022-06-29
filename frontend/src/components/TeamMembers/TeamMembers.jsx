import "./teamMembers.css";
import endpoint from "@services/endpoint";
import DataTable from "react-data-table-component";

import React, { useEffect, useState } from "react";

function TeamMembers() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    endpoint
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

      {/* <table id="simple-board">
        <thead>
          <tr id="row0">
            <td id="cell0-0">Firstname</td>
            <td id="cell0-1">Name</td>
            <td id="cell0-2">Role</td>
            <td id="cell0-3">Office Location</td>
            <td id="cell0-4">Role</td>
          </tr>
          <tr id="row1">
            {users.map((user) => (
              <td id="cell1-0">{user.firstname}</td>
            ))}
          </tr>

          <tr id="row2">
            <td id="cell2-0"></td>
            <td id="cell2-1"></td>
            <td id="cell2-2"></td>
          </tr>
        </thead>
      </table> */}

      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default TeamMembers;
