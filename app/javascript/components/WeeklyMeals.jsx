import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  getCurrentWeekRange,
  enumerateWeekRange,
  ensureZonedDate,
} from "../helpers/dateHelper";
import ScheduledMealCard from "./ScheduledMealCard";

const WeeklyMeals = (props) => {
  const [scheduledMeals, setScheduledMeals] = useState(null);
  const weekRange = enumerateWeekRange(props.anchorDate);

  useEffect(() => {
    fetch(`/api/scheduled-meals?anchor_date=${props.anchorDate}`)
      .then((response) => response.json())
      .then((data) => {
        setScheduledMeals(data);
      });
  }, [props.anchorDate]);

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {weekRange &&
        weekRange.map((day) => {
          let mealToRender = null;
          if (scheduledMeals) {
            mealToRender = scheduledMeals.filter(
              (meal) => ensureZonedDate(meal.scheduled_date) === day
            )[0];
          }
          return (
            <div className="p-3" key={new Date(day).toDateString()}>
              <ScheduledMealCard
                title={day}
                text={
                  mealToRender
                    ? mealToRender.description
                    : "No meal scheduled yet"
                }
                scheduled={mealToRender ? true : false}
              />
            </div>
          );
        })}
    </div>
  );
};

export default WeeklyMeals;
