import React, { FC } from "react";
import { ItemValue } from "@/store/items";
import { RootDispatch } from "@/store/app";
import { useDispatch } from "react-redux";
import { itemsAction } from "@/store/items";
import Link from "next/link";
import Image from "next/image";

const Products: FC<ItemValue> = ({ id, title, price, image, rate }) => {
  const dispatch = useDispatch<RootDispatch>();

  const addItemHandler = () => {
    dispatch(itemsAction.addItem({ title, price, image, rate, id }));
  };
  return (
    <div className="sm:flex-col sm:justify-center items-center md:flex-row md:justify-around md:flex-wrap md:inline-block sm:block m-8">
      <div className="sm:flex sm:justify-center mt-40">
        <div className="flex-col md:w-40 md:h-30 sm:w-60 sm:h-50">
          <div className="flex-col items-center">
            <Link href={`/${id}`}>
              <Image
                src={image}
                alt="product image"
                className="md:w-30 md:h-40 sm:w-60 sm:h-60"
                width={48}
                height={48}
              />
            </Link>
            <li className="pt-4 pl-5">{title.substring(0, 20)}</li>
            <li className="pt-1 pl-5">${price}</li>
            <li className="pt-1 pl-5">4.5</li>
          </div>
          <button className="mt-2 pl-5" onClick={addItemHandler}>
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
