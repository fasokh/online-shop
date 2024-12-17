import React, { FC } from "react";
import { UserIcon as HeroUserIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/router";

// interface UserIconProps {
//   toggle: () => void;
// }

const UserIcon: FC = () => {
  const rout = useRouter();
  
  const goToAuthPageHandler = () => {
    rout.push("auth");
  };

  return (
    <button className="block p-2" onClick={goToAuthPageHandler}>
      <HeroUserIcon className="h-8 w-8 hover:text-gray-800" />
    </button>
  );
};
export default UserIcon;
