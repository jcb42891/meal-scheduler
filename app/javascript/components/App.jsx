import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import SiteNavbar from "./SiteNavbar";

const App = () => {
  return (
    <>
      <SiteNavbar />
      <AppRouter />
    </>
  );
};
export default App;
