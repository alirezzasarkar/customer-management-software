import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen w-24 bg-customBlue flex flex-col justify-between items-center py-4">
      <div className="flex flex-col space-y-10 items-center">
        <img src="/src/Assets/Icons/AdklayLogo.svg" alt="" className="mb-4" />
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/icon.svg"
          label="متن تست"
        />
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/icon.svg"
          label="متن تست"
        />
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/icon.svg"
          label="متن تست"
        />
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/icon.svg"
          label="متن تست"
        />
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/icon.svg"
          label="متن تست"
        />
      </div>
      <div className="mb-4">
        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/log-out.svg"
          label="خروج"
        />
      </div>
    </div>
  );
};

export default Sidebar;
