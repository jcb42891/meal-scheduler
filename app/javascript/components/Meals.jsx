import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { httpDelete } from "../helpers/httpHelper";

const Meals = () => {
  let [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  const deleteMeal = (mealId) => {
    httpDelete(`/api/meals/destroy/${mealId}`, handleDelete);
  };

  const handleDelete = (data) => {
    if (data.status === 200) {
      // Update the state to rerender
      const mealsCopy = [...meals];
      setMeals(mealsCopy.filter((meal) => meal.id != data.destroyed_meal_id));
    }
  };

  return (
    <div>
      <h3>Here are the meals we have so far:</h3>
      <Link to="/meals/add">Add a new meal</Link>
      {meals && meals.length > 0 && (
        <table border="1">
          <tbody>
            {meals.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>Edit</td>
                <td>
                  <button onClick={() => deleteMeal(m.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Meals;
