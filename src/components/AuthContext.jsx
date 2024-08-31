import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null);

    const login = (jwtToken) => {
        setIsAuthenticated(true);
        setToken(jwtToken);
        //optionally, storing the token in localStorage
        localStorage.setItem('token', jwtToken);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        //removing the token from localStorage
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}