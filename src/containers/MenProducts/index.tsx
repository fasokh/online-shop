import HomePageHeader from "../../components/HomePageHeader";
import Menu from "../../components/Menu";
import MenItems from "./MenItems";
import { NextPage } from "next";

const MenProduct: NextPage = () => {
  return (
    <div>
      <HomePageHeader />
      <Menu />
      <MenItems />
    </div>
  );
};

export default MenProduct;
