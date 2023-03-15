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
    <div className="container-fluid m-4">
      <div className="row mb-2">
        <div className="col-md-4">
          <Link className="btn btn-primary" to="/meals/add">
            Add a new meal
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {meals && meals.length > 0 && (
            <table border="1" className="table table-hover">
              <tbody>
                {meals.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <Link to={`/meals/view/${m.id}`}>{m.name}</Link>
                    </td>
                    <td>
                      <Link to={`/meals/edit/${m.id}`} className="btn btn-info">
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteMeal(m.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meals;
