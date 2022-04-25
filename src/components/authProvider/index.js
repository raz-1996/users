import React from "react";
import authService from "../../services/AuthService";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {

    if (authService.isAuth) {
        return children
    };
    
    return <Navigate to="/authentication/login" />
};
export default AuthProvider;