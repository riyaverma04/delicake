import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
