import React from "react";
import WeekSelector from "./WeekSelector";
import { useEffect, useState } from "react";
import WeeklyMeals from "./WeeklyMeals";

const Dashboard = () => {
  const [anchorDate, setAnchorDate] = useState(new Date());
  useEffect(() => {}, []);

  const handleAnchorDateChange = (date) => {
    setAnchorDate(new Date(date));
  };

  return (
    <>
      <WeekSelector onAnchorDateChange={handleAnchorDateChange} />
      <WeeklyMeals anchorDate={anchorDate.toDateString()} />
    </>
  );
};

export default Dashboard;
