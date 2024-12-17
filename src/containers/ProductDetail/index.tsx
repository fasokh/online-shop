import SimpleMenu from "@/components/SimpleMenu";
import { NextPage } from "next";
import Details from "./Details";

const ProductDetails: NextPage = () => {
  return (
    <div>
      <SimpleMenu />
      <Details />
    </div>
  );
};

export default ProductDetails;
