const DashboardButton = ({ inner_text, bg_color, icon, button_type }) => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 h-9 ${bg_color} text-white font-semibold rounded-md text-xs`}
      type={button_type}
    >
      <span>{inner_text}</span>
      <img src={icon} className="w-5 h-5" />
    </button>
  );
};

export default DashboardButton;
