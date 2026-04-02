import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const user = { name: "Aaron", email: "aa@ron.com" };
  const userInfo = { user };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
