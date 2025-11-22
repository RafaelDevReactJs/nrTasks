import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-green-200 backdrop-blur-sm flex overflow-hidden">
      <div className="flex w-full h-full bg-white overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-y-auto bg-white">
          <div className="flex-1 p-4 sm:p-6 md:p-8 pt-12 md:pt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

