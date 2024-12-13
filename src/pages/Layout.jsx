import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-yellow-100">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
