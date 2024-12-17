import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ItemValue } from "@/store/items";
import { RootState } from "@/store/app";
import CartItem from "./CartItem";

const CartSingleItem: FC = () => {
  const cart = useSelector((state: RootState) => state.items.item);
  console.log(cart);

  return (
    <div className="my-20">
      <ul>
        {cart.map((i: ItemValue) => (
          <CartItem
            id={i.id}
            key={i.id}
            rate={i.rate}
            image={i.image}
            totalPrice={i.totalPrice}
            title={i.title}
            quantity={i.quantity}
            price={i.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartSingleItem;
