import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//rafce
import LandingPage from "../pages/LandingPage";

const ExpenseRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/app/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<h1>Login</h1>} />
      <Route path="register" element={<h1>Register</h1>} />
    </Routes>
  );
};
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<h1>Dashboard</h1>} />
      <Route path="catagory" element={<h1>Catagory</h1>} />
      <Route path="setting" element={<h1>Setting</h1>} />
      <Route path="add" element={<h1>Add</h1>} />
    </Routes>
  );
};

export default ExpenseRoute;
