import PropTypes from "prop-types";

const Button = ({ width, height, backgroundColor, text, textColor }) => {
  return (
    <div>
      <button
        className={`rounded-lg ${width} ${height} ${backgroundColor} ${textColor} Auth-Button hover:bg-[#385c9f]`}
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
