import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { httpPost } from "../helpers/httpHelper";

const ScheduleMealWidget = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const [dropDownMealChoices, setDropDownMealChoices] = useState(null);
  const [formData, setFormData] = useState({
    meal_id: "",
    scheduled_date: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      meal_id: value,
      scheduled_date: props.scheduledDate,
    }));
  };

  const handleToggleClick = () => {
    const toggle = formVisible;
    setFormVisible(!toggle);
    fetchAllMeals();
  };

  const fetchAllMeals = () => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        setDropDownMealChoices(data);
      });
  };

  const scheduleMeal = (event) => {
    event.preventDefault();
    httpPost("/api/schedule-meal", formData, onComplete);
  };

  const onComplete = (data) => {
    props.handleDataChange();
  };

  return (
    <>
      {!formVisible && (
        <Button
          className="m-2"
          variant="success"
          onClick={() => handleToggleClick()}
        >
          Schedule meal
        </Button>
      )}
      {formVisible && (
        <Form onSubmit={() => scheduleMeal(event)}>
          <Form.Group className="mb-3" controlId="formMealSelect">
            <Form.Label>Meal</Form.Label>
            <Form.Select onChange={handleInputChange}>
              <option>select one...</option>
              {dropDownMealChoices &&
                dropDownMealChoices.length > 0 &&
                dropDownMealChoices.map((meal) => (
                  <option key={meal.id} value={meal.id}>
                    {meal.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Button className="m-2" variant="success" type="submit">
            Schedule!
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            onClick={() => handleToggleClick()}
          >
            Cancel
          </Button>
        </Form>
      )}
    </>
  );
};

export default ScheduleMealWidget;
