import { NextPage } from "next";
import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "@/store/app";
import FetchData from "@/store/actionCenter";

const ProductDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<RootDispatch>();

  console.log("Router:", router);
  console.log("Query:", router.query);
  console.log("id:", id);

  const product = useSelector((state: RootState) =>
    state.product.all.find((item) => item.id === Number(id))
  );

  useEffect(() => {
    if (!product) {
      dispatch(FetchData({ query: "" }));
    }
  }, [dispatch, product]);

  if (!product) {
    return <p>produnt not found</p>;
  }

  return (
    <div className="p-8">
      <img src={product.image} alt={product.title} className="w-60 h-60" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="mt-2">Price: ${product.price}</p>
      <p className="mt-2">Rating: {product.rate}</p>
    </div>
  );
};

export default ProductDetails;
