import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ to, icon, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-white w-10 h-10 rounded-full bg-customBlue hover:bg-blue-800 flex items-center justify-center relative"
    >
      <img src={icon} alt={label} />
      {hovered && (
        <span className="absolute right-12 bg-gray-800 text-white whitespace-nowrap text-xs rounded-md py-1 px-5">
          {label}
        </span>
      )}
    </Link>
  );
};

export default SidebarItem;
