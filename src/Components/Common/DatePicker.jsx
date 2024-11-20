import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";

const PersianDatePicker = ({ onChange, label_text }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) onChange(date);
  };

  return (
    <div className="sm:w-[30%]">
      <label htmlFor="" className="px-2 text-[#153D8A]">
        {label_text}
      </label>
      <DatePicker
        containerStyle={{ display: "block" }}
        className="w-full"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={selectedDate}
        onChange={handleDateChange}
        render={(currentValue, openCalendar) => (
          <DateInput displayValue={currentValue} onClick={openCalendar} />
        )}
      />
    </div>
  );
};

export const DateInput = ({ displayValue, onClick }) => (
  <div
    className="h-10 mt-2 w-full flex items-center justify-between px-3 text-gray-700  bg-white rounded-lg focus:outline-none focus:border-blue-300 cursor-pointer text-right"
    onClick={onClick}
  >
    <span className={`text-gray-500 ${displayValue ? "text-gray-700" : ""}`}>
      {displayValue}
    </span>
    <FaCalendarAlt className="text-gray-500" />
  </div>
);

export default PersianDatePicker;
