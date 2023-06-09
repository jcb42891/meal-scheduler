import React from "react";
import MealForm from "./MealForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { httpPost } from "../helpers/httpHelper";
import { useParams } from "react-router-dom";

const EditMeal = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [meal, setMeal] = useState(null);
  const mealIdToEdit = useParams().id;

  useEffect(() => {
    fetch(`/api/meals/${mealIdToEdit}`)
      .then((response) => response.json())
      .then((data) => setMeal(data));
  }, []);

  const handleSubmit = (event, formData) => {
    event.preventDefault();
    httpPost(`/api/meals/edit/${meal.id}`, formData, onComplete);
  };

  const onComplete = (data) => {
    if (data.status === 200) {
      setShowSuccess(true);
    }
  };

  return (
    <div className="container-fluid">
      <MealForm onSubmit={handleSubmit} name={meal ? meal.name : ""} />
      <div className="row">
        <div className="col-md-4">
          {showSuccess && (
            <div className="alert alert-success" role="alert">
              Sucessfully edited meal!
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Link to="../meals">Back to meals list</Link>
        </div>
      </div>
    </div>
  );
};

export default EditMeal;
