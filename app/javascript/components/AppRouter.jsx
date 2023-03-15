import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meals from "./Meals";
import AddMeal from "./AddMeal";
import EditMeal from "./EditMeal";
import Dashboard from "./Dashboard";
import ViewMeal from "./ViewMeal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/add" element={<AddMeal />} />
        <Route path="/meals/edit/:id" element={<EditMeal />} />
        <Route path="meals/view/:id" element={<ViewMeal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
