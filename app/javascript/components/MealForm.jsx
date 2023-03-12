import { useState } from "react";
import React from "react";

const MealForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="container-fluid m-4">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={() => props.onSubmit(event, formData)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name ? formData.name : props.name}
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
      </div>
    </>
  );
};

export default MealForm;
