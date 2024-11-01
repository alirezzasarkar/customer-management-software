import PropTypes from "prop-types";
import { useState } from "react";

const AuthInput = ({ label, placeholdertext, input_type, icon }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const toggleVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  return (
    <label className="relative block rounded-md border-[1px] border-[#757575] shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 ">
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
        className="peer border-none bg-transparent focus:border-transparent focus:outline-none focus:ring-0 placeholder:text-sm px-8 h-[46px]"
        placeholder={placeholdertext}
      />

      <span className="pointer-events-none absolute start-[1.9rem] top-0 -translate-y-[65%] bg-[#F1F1F9] p-0.5  text-gray-700 transition-all text-sm font-semibold">
        {label}
      </span>

      {/* this section renders when the input is password */}
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
                : "/src/Assets/Icons/eye-closed.svg"
            }
            alt="Toggle Password Visibility"
            className="w-5 h-5 text-gray-400"
          />
        </button>
      )}
      {/* this section renders when the input is password */}
    </label>
  );
};

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholdertext: PropTypes.string.isRequired,
  input_type: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default AuthInput;
