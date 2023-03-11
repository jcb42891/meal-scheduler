import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Meals = () => {
  let [meals, setMeals] = useState(null);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <div>
      <h3>Here are the meals we have so far:</h3>
      <Link to="/meals/add">Add a new meal</Link>
      <table border="1">
        <tbody>
          {meals &&
            meals.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meals;
