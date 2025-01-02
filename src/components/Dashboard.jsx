import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 ml-64">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold mb-2">Total Tutors</h3>
          <p className="text-4xl font-extrabold">150</p>
          <p className="text-sm opacity-75 mt-2">+10 this week</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold mb-2">Total Students</h3>
          <p className="text-4xl font-extrabold">500</p>
          <p className="text-sm opacity-75 mt-2">+25 this week</p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold mb-2">Upcoming Lessons</h3>
          <p className="text-4xl font-extrabold">45</p>
          <p className="text-sm opacity-75 mt-2">8 lessons today</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Performance</h3>
        <div className="h-48">
          {/* Placeholder for Chart */}
          <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center text-gray-600">
            Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
