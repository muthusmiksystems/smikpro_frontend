import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    navigate("/");
  }, [setIsAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-extrabold text-center text-indigo-600 mb-6">Logging Out...</h2>
        <p className="text-center">You have been logged out successfully. Redirecting...</p>
      </div>
    </div>
  );
};

export default Logout;
