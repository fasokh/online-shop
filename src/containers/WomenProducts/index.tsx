import HomePageHeader from "@/components/HomePageHeader";
import Menu from "@/components/Menu";
import { NextPage } from "next";
import React from "react";
import WomenItems from "./WomenItems";

const womenProducts: NextPage = () => {
  return (
    <div>
      <HomePageHeader />
      <Menu />
      <WomenItems />
    </div>
  );
};

export default womenProducts;
