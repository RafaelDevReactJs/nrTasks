import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";

function Layout() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-green-200 backdrop-blur-sm flex overflow-hidden">
      <div className="flex w-full h-full bg-white overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-y-auto bg-white">
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

