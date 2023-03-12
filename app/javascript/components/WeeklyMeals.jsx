import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WeeklyMeals = (props) => {
  const [scheduledMeals, setScheduledMeals] = useState(null);

  useEffect(() => {
    fetch(`/api/scheduled-meals?anchor_date=${props.anchorDate}`)
      .then((response) => response.json())
      .then((data) => {
        setScheduledMeals(data);
        console.log(data);
      });
  }, [props.anchorDate]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {scheduledMeals &&
        scheduledMeals.length > 0 &&
        scheduledMeals.map((m) => (
          <div className="p-3" key={new Date(m.scheduled_date).toDateString()}>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>
                  {new Date(m.scheduled_date).toDateString()}
                </Card.Title>
                <Card.Text>{m.description}</Card.Text>
                <Button className="m-2" variant="primary">
                  View meal
                </Button>
                <Button className="m-2" variant="primary">
                  Reschedule
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default WeeklyMeals;
