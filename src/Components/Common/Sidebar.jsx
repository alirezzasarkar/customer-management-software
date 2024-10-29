import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-auto w-24 bg-customBlue flex flex-col space-y-10 justify-between items-center py-4">
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
        icon="/src/Assets/Icons/Sidbar/log-out.svg"
        label="خروج"
      />
    </div>
  );
};

export default Sidebar;
