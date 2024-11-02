const DashboardButton = ({
  inner_text,
  bg_color,
  icon,
  button_type,
  hover_state,
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 h-9 ${bg_color} ${hover_state} text-white font-semibold rounded-md text-xs`}
      type={button_type}
    >
      <span>{inner_text}</span>
      <img src={icon} className="w-5 h-5" />
    </button>
  );
};

export default DashboardButton;
