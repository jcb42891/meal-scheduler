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
      <div className="container-fluid m-4">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {showSuccess && (
              <div class="alert alert-success" role="alert">
                Sucessfully added meal!
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
    </>
  );
};

export default MealForm;
