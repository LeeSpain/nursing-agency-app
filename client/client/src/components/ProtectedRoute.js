import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../services/auth";

export default function ProtectedRoute({ children }) {
  return Auth.isAuthenticated ? children : <Navigate to="/login" />;
}
