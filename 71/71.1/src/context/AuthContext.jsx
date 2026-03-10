import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loginApi, signUpApi } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("auth_token") || "");
  const [loading, setLoading] = useState(false);
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (token && !user) {
      // In a real app fetch profile; here we hydrate a basic user object.
      setUser({ email: localStorage.getItem("auth_email") || "user@example.com" });
    }
  }, [token, user]);

  const login = async (values) => {
    setLoading(true);
    try {
      const result = await loginApi(values);
      setToken(result.token);
      setUser({ email: values.email });
      localStorage.setItem("auth_token", result.token);
      localStorage.setItem("auth_email", values.email);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (values) => {
    setLoading(true);
    try {
      const result = await signUpApi(values);
      setToken(result.token);
      setUser({ email: values.email });
      localStorage.setItem("auth_token", result.token);
      localStorage.setItem("auth_email", values.email);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_email");
  };

  const value = useMemo(
    () => ({ user, token, isAuthenticated, loading, login, signUp, logout }),
    [user, token, isAuthenticated, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
