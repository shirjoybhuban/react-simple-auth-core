import React from "react";
import { AuthProvider } from "../../../context/AuthContext";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

const LoginComponent : React.FC= () => {
  return (
    <AuthProvider>
      <div>
        <LoginForm />
      </div>
      <div>
        <UserCard />
      </div>
    </AuthProvider>
  );
};


export default LoginComponent;