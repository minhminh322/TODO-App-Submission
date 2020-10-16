import React from "react";
import { DatePicker } from "react-rainbow-components";
export const DateChooser = ({ dueInput, setDueInput }) => {
  return (
    <div
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
      style={{ maxWidth: "70%" }}
    >
      <DatePicker
        // required
        // error="Set your due date"
        value={dueInput}
        minDate={new Date()}
        // maxDate={new Date(2020, 0, 4)}
        // label="DatePicker Label"
        onChange={(value) => setDueInput(value)}
      />
    </div>
  );
};
