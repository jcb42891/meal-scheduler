import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const MealForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const csrfToken = document.querySelector("[name='csrf-token']").content;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/meals/add", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          setShowSuccess(true);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
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
