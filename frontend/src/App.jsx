import React from "react";
import ProjectsBacklog from "@components/projectsBacklog/ProjectsBacklog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import NewsFeed from "@pages/NewsFeed";
import "./App.css";
import Map from "@components/Map";
import { CurrentUserContextProvider } from "./context/userContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/:projectId" element={<Dashboard />} />
            <Route path="/dashboard" element={<ProjectsBacklog />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
