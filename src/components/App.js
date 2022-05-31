import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContex";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100vh" style={{ maxWidth: "400px" }}>
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
    </Container>
  );
}

export default App;
