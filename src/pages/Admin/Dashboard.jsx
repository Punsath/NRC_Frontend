import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiMenu, FiX } from "react-icons/fi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:8000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#004066] to-[#003355] text-white p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <Link to="/dashboard" className="text-2xl font-bold">NRC</Link>
            <FiX className="lg:hidden cursor-pointer text-2xl" onClick={() => setSidebarOpen(false)} />
          </div>
          <ul className="space-y-6">
            <li>
              <Link to="/dashboard/employee" className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-500 transition">
                <i className="fs-4 bi-people"></i>
                <span className="text-lg">BlueCap</span>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-[#004066] to-[#003355] p-6 text-white shadow-md flex items-center justify-between">
          <h4 className="text-xl font-semibold">Project BlueCap</h4>
          <FiMenu className="lg:hidden cursor-pointer text-2xl" onClick={() => setSidebarOpen(true)} />
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
