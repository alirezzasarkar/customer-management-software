import { useState } from "react";
import { FaClock } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const PersianTimePicker = ({ onChange, label_text, value }) => {
  const [tempTime, setTempTime] = useState(value || ""); // Temporary state for unconfirmed time
  const [selectedTime, setSelectedTime] = useState(value || ""); // Confirmed time state

  const handleTimeChange = (time) => {
    const formattedTime = time ? time.format("HH:mm") : ""; // Format time as HH:mm
    setTempTime(formattedTime); // Update temporary time
  };

  const handleConfirmTime = () => {
    setSelectedTime(tempTime); // Confirm the selected time
    if (onChange) onChange(tempTime); // Trigger onChange with the confirmed time
  };

  return (
    <div className="sm:w-[30%]">
      <label htmlFor="time-picker" className="px-2 text-[#153D8A]">
        {label_text}
      </label>
      <DatePicker
        id="time-picker"
        className="w-full"
        plugins={[<TimePicker position="bottom" key="time-picker-plugin" />]}
        format="HH:mm"
        value={tempTime} // Bind tempTime to the time picker
        onChange={handleTimeChange}
        disableDayPicker
        render={(currentValue, openCalendar) => (
          <TimeInput displayValue={currentValue} onClick={openCalendar} />
        )}
      />
      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={handleConfirmTime}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          تایید زمان
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        زمان انتخاب شده:
        <span className="font-bold">{selectedTime || "---"}</span>
      </p>
    </div>
  );
};

const TimeInput = ({ displayValue, onClick }) => (
  <div
    className="h-10 mt-2 w-full flex items-center justify-between px-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:border-blue-300 cursor-pointer text-right"
    onClick={onClick}
  >
    <span className={`text-gray-500 ${displayValue ? "text-gray-700" : ""}`}>
      {displayValue || "انتخاب زمان"}
    </span>
    <FaClock className="text-gray-500" />
  </div>
);

export default PersianTimePicker;
