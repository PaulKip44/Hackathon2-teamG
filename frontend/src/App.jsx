import ProjectsBacklog from "@components/projectsBacklog/ProjectsBacklog";
import Home from "@pages/Home";

import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/backlog" element={<ProjectsBacklog />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
