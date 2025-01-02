import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import TutorsManagement from "./components/Tutor/TutorsManagement";
import StudentsManagement from "./components/StudentsManagement";
import LessonsManagement from "./components/LessonsManagement";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";
import LoginForm from "./components/Forms/Login";
import Logout from "./components/Logout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Only render Sidebar and Navbar if authenticated */}
        {isAuthenticated && <Sidebar />}
        <div className="flex-1">
          {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} />}

          <div className="p-6 overflow-y-auto mt-14">
            {/* Content area */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tutors" element={<TutorsManagement />} />
              <Route path="/students" element={<StudentsManagement />} />
              <Route path="/lessons" element={<LessonsManagement />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<LoginForm setIsAuthenticated={setIsAuthenticated}/>} /> {/* Add the Login route */}
              <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
