import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ScheduleMealWidget from "./ScheduleMealWidget";

const ScheduledMealCard = (props) => {
  const scheduledDate = new Date(props.title).toDateString();

  return (
    <Card
      border={!props.scheduled ? "danger" : "success"}
      style={{ width: "30rem" }}
    >
      <Card.Body style={!props.scheduled ? { backgroundColor: "#dbdad7" } : {}}>
        <Card.Title>{scheduledDate}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        {props.scheduled && (
          <>
            <Button className="m-2" variant="primary">
              View meal
            </Button>
            <Button className="m-2" variant="warning">
              Reschedule
            </Button>
          </>
        )}
        {!props.scheduled && (
          <ScheduleMealWidget
            handleDataChange={props.handleDataChange}
            scheduledDate={scheduledDate}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default ScheduledMealCard;
