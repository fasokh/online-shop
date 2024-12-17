import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemValue } from "../items";

const FetchData = createAsyncThunk(
  "fetchData",
  async (filters: { query?: string; category?: string }) => {
    const { query = "", category = "" } = filters;
    try {
      const response = await axios.get("https://fakestoreapi.com/products"); 
      const data = response.data; //اینجا اومدم از try استفاده کردم 

      console.log("Fetched Data:", data)

      const filterData = data.filter((product: any) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });

      console.log("Filtered Data:", filterData)

      const menProducts = filterData.filter((product: any) =>
        product.title.toLowerCase().includes("men")
      );

      const womenProducts = filterData.filter((product: any) =>
        product.title.toLowerCase().includes("women")
      );

      return { all: filterData, men: menProducts, women: womenProducts };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export default FetchData;
