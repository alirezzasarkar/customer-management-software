import { useState } from "react";
import { FaClock } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";

const PersianTimePicker = ({ onChange, label_text }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (onChange) onChange(time); // Call onChange with selected time
  };

  return (
    <div className="sm:w-[30%]">
      <label htmlFor="" className="px-2 text-[#153D8A]">
        {label_text}
      </label>
      <DatePicker
        containerStyle={{ display: "block" }}
        className="w-full"
        timePicker // Enable time picker only
        format="HH:mm" // Time format (24-hour format)
        value={selectedTime}
        onChange={handleTimeChange}
        render={(currentValue, openCalendar) => (
          <TimeInput displayValue={currentValue} onClick={openCalendar} />
        )}
        onlyTime // Ensure only time can be selected (no date)
      />
    </div>
  );
};

export const TimeInput = ({ displayValue, onClick }) => (
  <div
    className="h-10 mt-2 w-full flex items-center justify-between px-3 text-gray-700  bg-white rounded-lg focus:outline-none focus:border-blue-300 cursor-pointer text-right"
    onClick={onClick}
  >
    <span className={`text-gray-500 ${displayValue ? "text-gray-700" : ""}`}>
      {displayValue}
    </span>
    <FaClock className="text-gray-500" />
  </div>
);

export default PersianTimePicker;
