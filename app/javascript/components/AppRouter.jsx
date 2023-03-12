import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MealForm from "./MealForm";
import Meals from "./Meals";
import AddMeal from "./AddMeal";
import EditMeal from "./EditMeal";
import Dashboard from "./Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/add" element={<AddMeal />} />
        <Route path="/meals/edit/:id" element={<EditMeal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
