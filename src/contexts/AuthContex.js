import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContex = React.createContext();

export function useAuth() {
  return useContext(AuthContex);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email,password) {
    return auth.signInWithEmailAndPassword(email, password)
  } 

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsuscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup
  };


  return (   
  <AuthContex.Provider value={value}>{children}</AuthContex.Provider>
  )
}
