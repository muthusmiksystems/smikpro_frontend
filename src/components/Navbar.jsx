
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const Navbar = ({ isAuthenticated }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 shadow-xl fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-blue-600 font-bold rounded-full h-10 w-10 flex items-center justify-center text-lg">
            HT
          </div>
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>

        <div className="space-x-8 hidden sm:flex">
          <Link
            to="/dashboard"
            className="text-white hover:text-indigo-200 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          {/* {isAuthenticated ? ( */}
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-indigo-200 transition duration-300 ease-in-out"
              >
                Profile
              </button>

              {isDropdownOpen && (
                <div className="absolute bg-white text-gray-700 p-2 rounded-lg shadow-md top-10 right-0 w-48 z-10">
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
                  >
                    View Profile
                  </Link>
                  {/* <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
                  >
                    Settings
                  </Link> */}
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-red-600 hover:bg-indigo-100 rounded-lg"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          {/* ) : ( */}
            {/* <Link
              to="/login"
              className="text-white hover:text-indigo-200 transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


