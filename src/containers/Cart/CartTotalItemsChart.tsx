import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/app";

const CartTotalItemsChart: FC = () => {
  const { totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.items
  );
  return (
    <div className="relative flex flex-col bg-white mt-16 my-10 mr-5 ml-4 float-right text-right">
      <div className="border border-gray-300 rounded-lg sm:w-52 md:w-96">
        <ul className="px-5 py-5 font-bold md:text-lg ms:text-sm space-y-6">
          <li> تعداد اقلام: {totalQuantity}</li>
          <li>  جمع قیمت: ${totalPrice}</li>
        </ul>
      </div>
    </div>
  );
};

export default CartTotalItemsChart;
