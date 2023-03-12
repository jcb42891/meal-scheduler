import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MealForm from "./MealForm";
import Meals from "./Meals";
import AddMeal from "./AddMeal";
import EditMeal from "./EditMeal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/add" element={<AddMeal />} />
        <Route path="/meals/edit/:id" element={<EditMeal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
