import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  return localStorage.getItem("isLoggedIn") ? <Outlet /> : <Navigate to={'/'} />;

}
