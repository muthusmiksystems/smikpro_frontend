import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons

// Example students data to simulate dynamic rendering
const students = [
  { name: "Jane Smith", grade: "10th Grade" },
  { name: "John Doe", grade: "11th Grade" },
  { name: "Sara Lee", grade: "12th Grade" },
];

const StudentsManagement = () => {
  const [isAddStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [isEditStudentModalOpen, setEditStudentModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({ name: "", grade: "" });

  // Open/close modal functions
  const openAddStudentModal = () => setAddStudentModalOpen(true);
  const closeAddStudentModal = () => setAddStudentModalOpen(false);

  const openEditStudentModal = (student) => {
    setCurrentStudent(student); // Set the student data to edit
    setEditStudentModalOpen(true);
  };
  const closeEditStudentModal = () => setEditStudentModalOpen(false);

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg ml-64">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Students Management</h2>

      {/* Add Student Button */}
      <button
        onClick={openAddStudentModal}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 mb-6 transition-all duration-200"
      >
        + Add Student
      </button>

      {/* Students Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Grade</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Dynamic student rows */}
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.grade}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditStudentModal(student)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit className="mr-2" />
                  </button>
                  {/* Delete Button with Icon */}
                  <button className="text-red-600 hover:text-red-800 ml-4">
                    <FaTrashAlt className="mr-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {isAddStudentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Add Student</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter student's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Grade</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter student's grade"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeAddStudentModal}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Student Modal */}
      {isEditStudentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Edit Student</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  defaultValue={currentStudent.name}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter student's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Grade</label>
                <input
                  type="text"
                  defaultValue={currentStudent.grade}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter student's grade"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeEditStudentModal}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">
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

export default StudentsManagement;
