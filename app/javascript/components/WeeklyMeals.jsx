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
import { Audio } from "react-loader-spinner";

const WeeklyMeals = (props) => {
  const [scheduledMeals, setScheduledMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const weekRange = enumerateWeekRange(props.anchorDate);

  const fetchScheduledMeals = () => {
    setLoading(true);
    fetch(`/api/scheduled-meals?anchor_date=${props.anchorDate}`)
      .then((response) => response.json())
      .then((data) => {
        setScheduledMeals(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchScheduledMeals();
  }, [props.anchorDate]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}

      {weekRange &&
        weekRange.map((day) => {
          let mealToRender = null;
          if (scheduledMeals) {
            mealToRender = scheduledMeals.filter(
              (meal) => ensureZonedDate(meal.scheduled_date) === day
            )[0];
          }
          return (
            <div
              className="d-flex flex-column"
              style={{ width: "60%" }}
              key={new Date(day).toDateString()}
            >
              <div className="p-3">
                <ScheduledMealCard
                  title={day}
                  text={
                    mealToRender
                      ? mealToRender.description
                      : "No meal scheduled yet"
                  }
                  scheduled={mealToRender ? true : false}
                  scheduledMealId={mealToRender?.id}
                  handleDataChange={fetchScheduledMeals}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WeeklyMeals;
