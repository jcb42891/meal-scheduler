import React, { useState, useEffect } from "react";
import { httpGet } from "../helpers/httpHelper";
import { useParams } from "react-router-dom";

const ViewMeal = () => {
  const [meal, setMeal] = useState(null);
  const mealId = useParams().id;

  useEffect(() => {
    httpGet(`/api/meals/${mealId}`, onComplete);
  }, []);

  const onComplete = (data) => {
    setMeal(data);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <div className="d-flex flex-column">
        <div className="p-2">
          <h3>{meal ? meal.name : ""}</h3>
        </div>
        <div className="p-2">
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            <li>Ingredient 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewMeal;
