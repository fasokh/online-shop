import { NextPage } from "next";
import React from "react";
import CartTotalItemsChart from "./CartTotalItemsChart";
import CartSingleItem from "./CartSingleItem";
import SimpleMenu from "../../components/SimpleMenu";

const Cart: NextPage = () => {
  return (
    <div>
      <SimpleMenu />
      <CartTotalItemsChart />
      <CartSingleItem />
    </div>
  );
};

export default Cart;
