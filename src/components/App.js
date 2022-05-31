import React from "react";
import { AuthProvider } from "../contexts/AuthContex";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
