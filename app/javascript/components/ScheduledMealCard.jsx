import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ScheduleMealWidget from "./ScheduleMealWidget";

const ScheduledMealCard = (props) => {
  return (
    <Card
      border={!props.scheduled ? "danger" : "success"}
      style={{ width: "10rem", height: "15rem" }}
    >
      <Card.Body style={!props.scheduled ? { backgroundColor: "#dbdad7" } : {}}>
        <Card.Title>{new Date(props.title).toDateString()}</Card.Title>
        <div style={{ height: "25%" }}>
          <Card.Text>{props.text}</Card.Text>
        </div>
        {props.scheduled && (
          <div style={{ height: "20%" }}>
            <Button className="m-2" variant="warning">
              Reschedule
            </Button>
          </div>
        )}
        {!props.scheduled && <ScheduleMealWidget />}
      </Card.Body>
    </Card>
  );
};

export default ScheduledMealCard;
