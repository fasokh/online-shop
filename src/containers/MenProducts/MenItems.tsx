import { NextPage } from "next";
import { FC, useEffect } from "react";
import { RootState, RootDispatch } from "@/store/app";
import { useSelector, useDispatch } from "react-redux";
import FetchData from "@/store/actionCenter";
import { STATUS } from "@/store/product";
import { ItemValue } from "@/store/items";
import Products from "../Home/Products";

const MenItems: FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { men, status } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(FetchData({query: "men"}));
  }, [dispatch]);

  if (status === STATUS.ERROR) {
    return <p>...Error</p>;
  }

  if (status === STATUS.LOADING) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <ul>
        {men.map((i: ItemValue) => (
          <Products
            key={i.id}
            id={i.id}
            title={i.title}
            price={i.price}
            quantity={i.quantity}
            rate={i.rate}
            image={i.image}
            totalPrice={i.totalPrice}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenItems;
