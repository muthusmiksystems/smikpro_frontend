import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons
import axios from "../../api/axios";


const TutorsManagement = () => {
  const [tutors, setTutors] = useState([]);
  console.log("tutors",tutors);
  const [isAddTutorModalOpen, setAddTutorModalOpen] = useState(false);
  const [isEditTutorModalOpen, setEditTutorModalOpen] = useState(false);
  const [currentTutor, setCurrentTutor] = useState(null);

  // Sample tutor data
  const tutorss = [
    { name: "John Doe", subject: "Mathematics" },
    { name: "Jane Smith", subject: "English" },
    { name: "Mark Johnson", subject: "Science" },
  ];

  // Open and close modal functions
  const openAddTutorModal = () => setAddTutorModalOpen(true);
  const closeAddTutorModal = () => setAddTutorModalOpen(false);

  const openEditTutorModal = (tutor) => {
    setCurrentTutor(tutor);
    setEditTutorModalOpen(true);
  };
  const closeEditTutorModal = () => setEditTutorModalOpen(false);

  const fetchTutors = async () => {
    try {
      const response = await axios.get("/admin/");
      setTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error.message);
    }
  };
  useEffect(() => {
    fetchTutors();
  }, []);
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-xl ml-64">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Tutors Management</h2>

      {/* Add Tutor Button */}
      <button
        onClick={openAddTutorModal}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6 transition-all duration-200"
      >
        + Add Tutor
      </button>

      {/* Tutors Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tutorss.map((tutor, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4">{tutor.name}</td>
                <td className="px-6 py-4">{tutor.subject}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditTutorModal(tutor)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit className="mr-2" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 ml-4">
                    <FaTrashAlt className="mr-2" /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Tutor Modal */}
      {isAddTutorModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Add Tutor</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter tutor's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter tutor's subject"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeAddTutorModal}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                  Add Tutor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Tutor Modal */}
      {isEditTutorModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Edit Tutor</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  defaultValue={currentTutor.name}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter tutor's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  defaultValue={currentTutor.subject}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter tutor's subject"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeEditTutorModal}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorsManagement;
