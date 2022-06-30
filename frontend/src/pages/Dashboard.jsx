import React from "react";

import TeamMembers from "../components/TeamMembers/TeamMembers";
import Nav from "../components/Nav/Nav";
import "./dashboard.css";
import SearchBarDashBoard from "../components/SearchBarDashBoard";

function Dashboard() {
  return (
    <div id="dashboard">
      <div>
        <Nav />
      </div>

      <div>
        <SearchBarDashBoard />
        <TeamMembers />
      </div>
    </div>
  );
}

export default Dashboard;
