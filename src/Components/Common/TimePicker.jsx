import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const PersianTimePicker = ({ onChange, label_text, value }) => {
  const [tempTime, setTempTime] = useState(value || "");

  useEffect(() => {
    if (value) {
      setTempTime(value);
    }
  }, [value]);

  const handleTimeChange = (time) => {
    console.log("Selected Time:", time); // لاگ گرفتن زمان انتخاب شده
    setTempTime(time);
    if (onChange) {
      onChange(time);
    }
  };

  return (
    <div className="w-full sm:w-[30%]">
      <label
        htmlFor="time-picker"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label_text}
      </label>
      <div className="relative">
        <TimePicker
          id="time-picker"
          onChange={handleTimeChange}
          value={tempTime}
          disableClock={true}
          clearIcon={null}
          format="HH:mm:ss"
          className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          hourPlaceholder="HH"
          minutePlaceholder="MM"
          secondPlaceholder="SS"
        />
        <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default PersianTimePicker;
