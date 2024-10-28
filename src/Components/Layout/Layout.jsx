import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex bg-dashboard min-h-screen flex-row rtl">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-6 text-right overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
