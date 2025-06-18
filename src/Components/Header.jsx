

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    navigate('/login');
  };

  return (
    <header className="bg-red-700 text-white px-4 py-2 flex justify-between items-center shadow">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2023/02/07/Letters-CQ-Logo-Icon-Design-Graphics-60295351-2-580x387.jpg"
          alt="Logo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <h1 className="text-lg font-bold">University</h1>
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-9 h-9 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center focus:outline-none"
        >
          👤
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md z-50">
            <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
              CAM123456
            </div>
            <button
              onClick={() => {
                navigate('/profile/view');
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={() => {
                navigate('/support/raise');
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Support
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
