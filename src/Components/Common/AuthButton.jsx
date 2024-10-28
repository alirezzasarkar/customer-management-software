import React from "react";
import PropTypes from "prop-types";

const Button = ({ width, height, backgroundColor, text, textColor }) => {
  return (
    <div>
      <button
        className={`rounded-lg ${width} ${height} ${backgroundColor} ${textColor}`}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
