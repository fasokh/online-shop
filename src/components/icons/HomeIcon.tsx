import React, { FC } from "react";
import { HomeIcon as HeroHomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const HomeIcon: FC = () => {
  return (
    <button className="relative">
      <Link href="/">
        <HeroHomeIcon className="w-7 h-7 absolute -top-5 -left-2" />
      </Link>
    </button>
  );
};

export default HomeIcon;
