import React from "react";
import Nav from "@components/Nav/Nav";
import TeamMembers from "@components/TeamMembers/TeamMembers";
import "./dashboard.css";

function Dashboard() {
  return (
    <div id="dashboard">
      <div>
        <Nav />
      </div>

      <div>
        <TeamMembers />
      </div>
    </div>
  );
}

export default Dashboard;
