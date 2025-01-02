import React, { useState } from "react";

const Settings = () => {
  const [profilePic, setProfilePic] = useState("https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"); // Initial error image URL

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set the selected image
      };
      reader.readAsDataURL(file); // Convert the image to base64 string
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg ml-64">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Account Settings</h2>

      {/* Profile Picture Section */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img
            src={profilePic} // Display error image initially
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
          />
          <label htmlFor="profile-pic-upload" className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-2 cursor-pointer shadow-lg transform hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h4l1 6h8l1-6h4M4 10l1 6h14l1-6M5 20h14" />
            </svg>
          </label>
          <input
            id="profile-pic-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
      </div>

      {/* Settings Section 1 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doe"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Settings Section 2 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h3>
        <form>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="current-password">Current Password</label>
              <input
                type="password"
                id="current-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="new-password">New Password</label>
              <input
                type="password"
                id="new-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="confirm-password">Confirm New Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Save Changes Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
