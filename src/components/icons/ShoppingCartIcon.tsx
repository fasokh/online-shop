import React, { FC } from "react";
import { ShoppingCartIcon as HeroShoppingdCartIcon } from "@heroicons/react/16/solid";
import { RootState } from "@/store/app";
import { useSelector, UseStore } from "react-redux";
import { useRouter } from "next/router";


const ShoppingCartIcon: FC = () => {
  const rout = useRouter();
  const quantity = useSelector((state: RootState) => state.items.totalQuantity);
  const goToCartPageHandler = () => {
    rout.push("cart");
  };

  return (
    <button className="relative" onClick={goToCartPageHandler}>
      <HeroShoppingdCartIcon className="w-6 h-6 hover:text-gray-800" />
      <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4 text-xs text-white flex justify-center items-center">
        {quantity}
      </span>
    </button>
  );
};

export default ShoppingCartIcon;
