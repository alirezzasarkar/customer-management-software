import React from "react";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-dashboard min-h-screen flex-row rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 sm:p-6 p-5 text-right overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
