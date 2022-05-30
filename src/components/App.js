import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContex";
import Signup from "./Signup";

function App() {
  return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center"
    
       style={{ minHeight:"100vh" }}
       >
         <div className="w-100vh"
         style={{ maxWidth:"400px"}}> 
           <Signup />
         </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
