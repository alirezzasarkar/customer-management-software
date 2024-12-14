import PropTypes from "prop-types";
import { useState } from "react";

const AuthInput = ({
  label,
  placeholdertext,
  input_type = "text",
  icon = null,
  verification = "",
  name,
  value,
  onChange,
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toggleVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleTextButtonClick = () => {
    alert("Text button clicked!");
  };

  return (
    <label
      className={`relative block rounded-md border-[1px] border-[#757575] shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 ${verification}`}
    >
      {icon && (
        <img
          src={icon}
          alt="Input Icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        />
      )}

      <input
        type={
          passwordVisibility && input_type === "password" ? "password" : "text"
        }
        name={name}
        value={value}
        onChange={onChange}
        className="peer border-none bg-transparent focus:border-transparent focus:outline-none focus:ring-0 placeholder:text-sm px-8 h-[46px] w-full"
        placeholder={placeholdertext}
      />

      <span className="pointer-events-none absolute start-[1.9rem] top-0 -translate-y-[65%] bg-[#F1F1F9] p-0.5 text-gray-700 transition-all text-sm font-semibold">
        {label}
      </span>

      {input_type === "password" && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
        >
          <img
            src={
              passwordVisibility
                ? "/src/Assets/Icons/eye-closed.svg"
                : "/src/Assets/Icons/eye-open.svg"
            }
            alt="Toggle Password Visibility"
            className="w-5 h-5 text-gray-400"
          />
        </button>
      )}

      {verification === "verification-button" && (
        <button
          type="button"
          onClick={handleTextButtonClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#153D8A] h-full text-white rounded-l-md text-xs w-14"
        >
          کد تایید
        </button>
      )}
    </label>
  );
};

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholdertext: PropTypes.string.isRequired,
  input_type: PropTypes.string,
  icon: PropTypes.string,
  verification: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default AuthInput;
