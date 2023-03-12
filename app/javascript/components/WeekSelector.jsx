import React from "react";
import { useState } from "react";
import { findNearestPrevMonday } from "../helpers/dateHelper";

const WeekSelector = (props) => {
  const [anchorDate, setAnchorDate] = useState(new Date());

  const getCurrentWeekRange = () => {
    const start = new Date(findNearestPrevMonday(anchorDate));
    const end = new Date(start);
    end.setDate(end.getDate() + 6);

    return [start.toDateString(), end.toDateString()];
  };

  const handleLeftArrowClick = () => {
    const currentAnchorDate = new Date(anchorDate);
    setAnchorDate(
      new Date(currentAnchorDate.setDate(currentAnchorDate.getDate() - 7))
    );
    props.onAnchorDateChange(new Date(currentAnchorDate));
  };

  const handleRightArrowClick = () => {
    const currentAnchorDate = new Date(anchorDate);
    setAnchorDate(
      new Date(currentAnchorDate.setDate(currentAnchorDate.getDate() + 7))
    );
    props.onAnchorDateChange(new Date(currentAnchorDate));
  };

  const weekRange = getCurrentWeekRange();
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="d-flex flex-row">
        <div className="me-3">
          <button
            type="button"
            className="btn btn-default"
            aria-label="Left Align"
            onClick={() => handleLeftArrowClick()}
          >
            <p style={{ fontSize: "2em" }}>
              <i className="fa fa-arrow-left"></i>
            </p>
          </button>
        </div>
        <div className="p-2">{weekRange[0] + " - " + weekRange[1]}</div>
        <div className="ms-3">
          <button
            type="button"
            className="btn btn-default"
            aria-label="Right Align"
            onClick={() => handleRightArrowClick()}
          >
            <p style={{ fontSize: "2em" }}>
              <i className="fa fa-arrow-right"></i>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekSelector;
