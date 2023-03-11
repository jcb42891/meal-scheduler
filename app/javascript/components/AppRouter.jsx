import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Meals from "./Meals";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
