import React from "react";

import TeamMembers from "@components/TeamMembers/TeamMembers";
import Nav from "@components/Nav/Nav";
import "./dashboard.css";
import IdeasBox from "@components/IdeasBox/IdeasBox";

function Dashboard() {
  return (
    <div id="dashboard">
      <div>
        <Nav />
      </div>

      <div>
        <TeamMembers />
      </div>
      <IdeasBox />
    </div>
  );
}

export default Dashboard;
