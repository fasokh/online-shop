import { NextPage } from "next";
import HomePageHeader from "../../components/HomePageHeader";
import Menu from "../../components/Menu";
import ProductItems from "./Products/ProductItems";

const Home: NextPage = () => {
  return (
    <div>
      <HomePageHeader />
      <Menu />
      <ProductItems />
    </div>
  );
};

export default Home;
