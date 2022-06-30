import ProjectsBacklog from "@components/projectsBacklog/ProjectsBacklog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/backlog" element={<ProjectsBacklog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
