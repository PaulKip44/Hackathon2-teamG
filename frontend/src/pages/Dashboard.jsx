import React from "react";

import TeamMembers from "@components/TeamMembers/TeamMembers";
import Nav from "@components/Nav/Nav";
import "./dashboard.css";
import IdeasBox from "@components/IdeasBox/IdeasBox";
import Description from "@components/Description/Description";

function Dashboard() {
  return (
    <div id="dashboard">
      <Nav />

      <div id="container">
        <div id="box">
          <Description />
          <TeamMembers />
        </div>
        <IdeasBox />
      </div>
    </div>
  );
}

export default Dashboard;
