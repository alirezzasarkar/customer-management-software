import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ to, icon, label, subItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={to} className="flex flex-col items-center">
        <img src={icon} alt={label} className="h-6 w-6 mb-2" />
        <span className="text-xs text-white">{label}</span>
      </Link>

      {isHovered && subItems && (
        <div className="absolute right-full top-0 mt-2 w-max bg-white/70 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200">
          {subItems.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.to}
              className="block text-xs px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
