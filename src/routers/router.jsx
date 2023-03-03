import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/Home";
import TrainingPage from "../pages/Training";
import UsersPage from "../pages/Users";

export default function router() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/trainings" element={<TrainingPage />}></Route>
      <Route exact path="/users" element={<UsersPage />}></Route>
    </Routes>
  );
}
