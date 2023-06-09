import React from "react";
import { useState } from "react";
import { getCurrentWeekRange } from "../helpers/dateHelper";

const WeekSelector = (props) => {
  const [anchorDate, setAnchorDate] = useState(new Date());

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

  const weekRange = getCurrentWeekRange(anchorDate);
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
        <div className="p-2">
          <h4>{weekRange[0] + " to " + weekRange[1]}</h4>
        </div>
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
