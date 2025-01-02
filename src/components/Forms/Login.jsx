import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const LoginForm = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Example of checking email and password (you can replace this with actual authentication)
    if (email === "admin123@gmail.com" && password === "admin123") {
      setIsAuthenticated(true);  // This will update the state in App.js
      // Redirect to the dashboard on successful login
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
            <motion.input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </form>

        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-800 text-sm">
            Forgot Password?
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
