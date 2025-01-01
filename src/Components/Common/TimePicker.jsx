import { FaClock } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const PersianTimePicker = ({ onChange, label_text, value }) => {
  const handleTimeChange = (time) => {
    const formattedTime = time ? time.format("HH:mm:ss") : ""; // Format time as HH:mm:ss
    if (onChange) onChange(formattedTime); // Trigger onChange with the formatted time
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
        format="HH:mm:ss" // Ensure the format is HH:mm:ss
        value={value} // Use the `value` passed from props
        onChange={handleTimeChange} // Directly update the parent state
        disableDayPicker
        render={(currentValue, openCalendar) => (
          <TimeInput displayValue={currentValue} onClick={openCalendar} />
        )}
      />
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
