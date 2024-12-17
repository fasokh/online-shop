import React, { FC } from "react";
import HomeIcon from "./icons/HomeIcon";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";

const SimpleMenu: FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mx-8 my-4">
        <div>
          <ShoppingCartIcon />
        </div>
        <div>
          <HomeIcon />
        </div>
      </div>
    </div>
  );
};

export default SimpleMenu;
