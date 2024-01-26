// Sidebar.tsx

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faVoteYea, faUsers } from "@fortawesome/free-solid-svg-icons";

export interface SidebarProps {
  userRole: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  return (
    <div
    className={`sidebar bg-gray-800 text-white h-full w-72 
    } transition-transform duration-300 ease-in-out`}
  >
    <ul className="flex flex-col items-center font-serif ">
      {/* Dashboard link is always visible */}
      <li className="w-full bg-blue-700 p-2 hover:bg-green-700">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <hr />

      {/* Category List link conditionally rendered based on user role */}
      {userRole === 'admin' && (
          <>
            <li className="w-full bg-blue-700 p-2 hover:bg-green-700">
              <FontAwesomeIcon icon={faList} className="mr-2" />
              <Link to="/category-list">Category List</Link>
            </li>
            <hr />
          </>
        )}
        <li className="w-full bg-blue-700 p-2 hover:bg-green-700">
          <FontAwesomeIcon icon={faVoteYea} className="mr-2" />
          <Link to="/faq">FAQ</Link>
        </li><hr></hr>
        <li className="w-full bg-blue-700 p-2 hover:bg-green-700">
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          <Link to="/users">Users</Link>
        </li><hr></hr>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
