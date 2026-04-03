import React from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Create User with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userInfo = { createUser, googleLogin };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
