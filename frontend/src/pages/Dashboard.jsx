import React from "react";

import TeamMembers from "@components/TeamMembers/TeamMembers";
import Nav from "@components/Nav/Nav";
import "./dashboard.css";
import IdeasBox from "@components/IdeasBox/IdeasBox";
import Description2 from "@components/Description/Description2";
import SearchBarDashBoard from "../components/SearchBarDashBoard";

function Dashboard() {
  return (
    <div id="dashboard">
      <div>
        <Nav />
      </div>

      <div className="search-main">
        <SearchBarDashBoard />
        <Description2 />
        <TeamMembers />
        <IdeasBox />
      </div>
    </div>
  );
}

export default Dashboard;
