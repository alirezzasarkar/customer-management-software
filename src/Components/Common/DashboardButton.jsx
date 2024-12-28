const DashboardButton = ({
  inner_text,
  bg_color,
  icon,
  button_type,
  border_color,
  text_color,
  onClick
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-3 py-2 h-9 w-36 ${bg_color} ${border_color} ${text_color} text-white font-semibold rounded-md text-xs`}
      type={button_type}
      onClick={onClick}
    >
      <span>{inner_text}</span>
      <img src={icon} className="w-5 h-5" />
    </button>
  );
};

export default DashboardButton;
