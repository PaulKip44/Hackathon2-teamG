import React from "react";
import ProjectsBacklog from "@components/projectsBacklog/ProjectsBacklog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import NewsFeed from "@pages/NewsFeed";
import "./App.css";
import { CurrentUserContextProvider } from "./context/userContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/backlog" element={<ProjectsBacklog />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
