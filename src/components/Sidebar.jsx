


// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaTachometerAlt, FaChalkboardTeacher, FaUsers, FaBook, FaCog } from "react-icons/fa"; // Add icons

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
//     { name: "Tutors", path: "/tutors", icon: <FaChalkboardTeacher /> },
//     { name: "Students", path: "/students", icon: <FaUsers /> },
//     { name: "Lessons", path: "/lessons", icon: <FaBook /> },
//     { name: "Settings", path: "/settings", icon: <FaCog /> },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white h-screen w-64 fixed shadow-lg mt-16">
//       <div className="p-6">
//         <h1 className="text-3xl font-extrabold text-center mb-12">
//           Admin Panel
//         </h1>
//         <ul className="space-y-4">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 ease-in-out ${
//                     isActive
//                       ? "bg-blue-900 text-yellow-300"
//                       : "hover:bg-blue-700 hover:text-yellow-200"
//                   }`
//                 }
//               >
//                 <span className="mr-3 text-2xl">{item.icon}</span>
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaChalkboardTeacher, FaUsers, FaBook, FaCog } from "react-icons/fa"; // Add icons

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Tutors", path: "/tutors", icon: <FaChalkboardTeacher /> },
    { name: "Students", path: "/students", icon: <FaUsers /> },
    { name: "Lessons", path: "/lessons", icon: <FaBook /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white w-64 fixed h-full top-0 left-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-3xl font-extrabold text-center mb-12">
          Admin Panel
        </h1>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 ease-in-out ${
                    isActive
                      ? "bg-blue-900 text-yellow-300"
                      : "hover:bg-blue-700 hover:text-yellow-200"
                  }`
                }
              >
                <span className="mr-3 text-2xl">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
