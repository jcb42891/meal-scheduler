import React from "react";
import { useEffect, useState } from "react";

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
    <div className="container-fluid">
      {scheduledMeals &&
        scheduledMeals.length > 0 &&
        scheduledMeals.map((m) => (
          <div className="row" key={m.description}>
            <p>Description: {m.description}</p>
            <p>Scheduled for: {new Date(m.scheduled_date).toDateString()}</p>
          </div>
        ))}
    </div>
  );
};

export default WeeklyMeals;
