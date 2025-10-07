import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, RootDispatch } from "@/store/app";
import Products from ".";
import FetchData from "@/store/actionCenter";
import { STATUS } from "@/store/product";

const ProductItems: FC = () => {
  const { status, all } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<RootDispatch>();
  const [query] = useState("")

  useEffect(() => {
    dispatch(FetchData({query}));
  }, [dispatch , query]);

  if (status === STATUS.ERROR) {
    return <p>...Error</p>;
  }

  if (status === STATUS.LOADING) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <ul>
        {all.map((i) => (
          <Products
            key={i.id}
            id={i.id}
            title={i.title}
            price={i.price}
            quantity={i.quantity}
            rate={i.rate}
            totalPrice={i.totalPrice}
            image={i.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductItems;
