import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ScheduleMealWidget = () => {
  const [formVisible, setFormVisible] = useState(false);

  const handleToggleClick = () => {
    const toggle = formVisible;
    setFormVisible(!toggle);
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
        <Form>
          <Form.Group className="mb-3" controlId="formMealSelect">
            <Form.Label>Meal</Form.Label>
            <Form.Select>
              <option>Meal 1</option>
              <option>Meal 2</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDateSelect">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="datepic" placeholder="DateRange" />
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
