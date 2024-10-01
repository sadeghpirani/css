import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import NotFoundPage from "../pages/404";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/Users";
import Loader from "../components/modules/Loader";



const Router = () => {
  const {data, isLoading , error} = useQuery(["profile"],getProfile)
  
  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
