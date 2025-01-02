import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons

// Example lesson data to simulate dynamic rendering
const lessons = [
  { date: "2024-01-01", subject: "Physics" },
  { date: "2024-01-03", subject: "Mathematics" },
  { date: "2024-01-05", subject: "Chemistry" },
];

const LessonsManagement = () => {
  const [isAddLessonModalOpen, setAddLessonModalOpen] = useState(false);
  const [isEditLessonModalOpen, setEditLessonModalOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState({ date: "", subject: "" });

  // Open/close modal functions
  const openAddLessonModal = () => setAddLessonModalOpen(true);
  const closeAddLessonModal = () => setAddLessonModalOpen(false);

  const openEditLessonModal = (lesson) => {
    setCurrentLesson(lesson); // Set the lesson data to edit
    setEditLessonModalOpen(true);
  };
  const closeEditLessonModal = () => setEditLessonModalOpen(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen ml-64">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Lessons Management</h2>

      {/* Schedule Lesson Button */}
      <button
        onClick={openAddLessonModal}
        className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 mb-8"
      >
        + Schedule Lesson
      </button>

      {/* Lessons Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Subject</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Dynamic lesson rows */}
            {lessons.map((lesson, index) => (
              <tr key={index} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-gray-700">{lesson.date}</td>
                <td className="px-6 py-4 text-gray-700">{lesson.subject}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => openEditLessonModal(lesson)}
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

      {/* Add Lesson Modal */}
      {isAddLessonModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Add Lesson</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter lesson date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter lesson subject"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeAddLessonModal}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg">
                  Add Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Lesson Modal */}
      {isEditLessonModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-1/3">
            <h3 className="text-2xl font-bold mb-6">Edit Lesson</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input
                  type="date"
                  defaultValue={currentLesson.date}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter lesson date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  defaultValue={currentLesson.subject}
                  className="w-full px-4 py-2 border rounded-lg mt-2"
                  placeholder="Enter lesson subject"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeEditLessonModal}
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

export default LessonsManagement;
