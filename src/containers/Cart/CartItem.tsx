import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAction, ItemValue } from "@/store/items";
import { RootDispatch, RootState } from "@/store/app";
import Link from "next/link";

const CartItem: FC<ItemValue> = ({ id, title, image, price, quantity }) => {
  const dispatch = useDispatch<RootDispatch>();

  const incrementItemHandler = () => {
    dispatch(itemsAction.addItem({ id, title, image, price, quantity }));
  };

  const decrementItemHandler = () => {
    dispatch(itemsAction.removeItem({ id }));
  };

  return (
    <div className="sm:w-2/4 md:w-2/4">
      <div className="flex mx-4 my-2 border border-gray-500 rounded-lg px-3 py-2 space-x-12">
        <div className="flex flex-col sm:text-sm">
          <Link href={`/${id}`}>
            <li>
              <img src={image} alt="title" className="w-12 h-12" />
            </li>
          </Link>
          <div className="felx felx-col">
            <li>{title.substring(0, 20)}</li>
            <li>{quantity}</li>
            <li>{price}</li>
          </div>
        </div>
        <div className="felx space-x-3 mt-10">
          <button
            className="border border-gray-400 rounded-lg px-2"
            onClick={incrementItemHandler}
          >
            +
          </button>
          <button
            className="border border-gray-400 rounded-lg px-2"
            onClick={decrementItemHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
