import React, { FC, useState } from "react";
import UserIcon from "./HomeIcons/UserIcon";

const UserDashboard: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-12 space-y-1 block">
      <UserIcon toggle={toggleHandler} />
      {isOpen && (
        <div className="absolute mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="text-xs text-gray-700 p-2">
            <li className="hover:bg-gray-100 p-1 rounded">
              <a href="/">Sign up</a>
            </li>
            <li className="hover:bg-gray-100 p-1 rounded">
              <a href="/">Sign in</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
