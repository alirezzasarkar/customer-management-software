// src/Common/DashboardInputs.jsx
import React from "react";

const TimePicker = ({
  lable_text,
  placeholder_text,
  value,
  onChange,
  type = "text",
  min,
  max,
}) => {
  return (
    <div className="w-full sm:w-[30%]">
      <label htmlFor={lable_text} className="text-[#153D8A]">
        {lable_text}
      </label>
      <input
        type={type}
        id={lable_text}
        placeholder={placeholder_text}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className="rounded-lg h-10 placeholder:text-xs px-3 placeholder:opacity-70 mt-2 mx-1"
      />
    </div>
  );
};

export default TimePicker;
