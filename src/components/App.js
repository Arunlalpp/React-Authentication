import React from "react";
import { AuthProvider } from "../contexts/AuthContex";
import Signup from "./Signup";
import Dashboard from "./OurTeam";
import Login from "./Login";
import HomePage from "./HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./Service";
import UserProfile from "./UserProfile";
import OurTeam from "./OurTeam";

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Routes>
            <Route exact path="/" element={<HomePage />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/userprofile" element={ <UserProfile />}/>
              <Route path="/service" element={<Service />}/>
              <Route path="/ourteam" element={<OurTeam />}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
