import React, { FC } from "react";
import { HomeIcon as HeroHomeIcon } from "@heroicons/react/16/solid";

const HomeIcon: FC = () => {
  return (
    <button className="relative">
      <a href="/">
        <HeroHomeIcon className="w-7 h-7 absolute -top-5 -left-2" />
      </a>
    </button>
  );
};

export default HomeIcon;
