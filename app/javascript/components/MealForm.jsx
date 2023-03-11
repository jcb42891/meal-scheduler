import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { httpPost } from "../helpers/httpHelper";

const MealForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onComplete = (data) => {
    console.log(data.status);
    if (data.status === 200) {
      setShowSuccess(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    httpPost("/api/meals/add", formData, onComplete);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
      {showSuccess && <span>Meal added successfully!</span>}
      <div>
        <Link to="../meals">Back to meals list</Link>
      </div>
    </>
  );
};

export default MealForm;
