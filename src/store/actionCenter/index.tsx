import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratind?: {
    rate: number;
    count: number;
  };
}

type Filters = { query?: string; category?: string };

interface FetchResult {
  all: Product[];
  men: Product[];
  women: Product[];
}

const FetchData = createAsyncThunk<FetchResult, Filters>(
  "fetchData",
  async (filters: Filters) => {
    const { query = "" } = filters;
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      const data: Product[] = response.data; //اینجا اومدم از try استفاده کردم

      console.log("Fetched Data:", data);

      const filterData = data.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });

      console.log("Filtered Data:", filterData);

      const menProducts = filterData.filter((product) =>
        product.title.toLowerCase().includes("men")
      );

      const womenProducts = filterData.filter((product) =>
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
