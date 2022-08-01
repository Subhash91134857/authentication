import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const layout = () => {
  return (
      <>
      <CssBaseline/>
      <Navbar />
      <Outlet />
    </>
  );
};

export default layout;
