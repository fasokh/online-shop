import React, { FC, useState } from "react";
import UserIcon from "./HomeIcons/UserIcon";
import Link from "next/link";

const UserDashboard: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleHandler = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-12 space-y-1 block">
      <UserIcon />
      {isOpen && (
        <div className="absolute mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="text-xs text-gray-700 p-2">
            <li className="hover:bg-gray-100 p-1 rounded">
              <Link href="/">Sign up</Link>
            </li>
            <li className="hover:bg-gray-100 p-1 rounded">
              <Link href="/">Sign in</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
