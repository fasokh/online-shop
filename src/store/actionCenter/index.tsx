import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
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

const FetchData = createAsyncThunk<
  FetchResult,
  Filters,
  { rejectValue: string }
>("fetchData", async (filters: Filters, { rejectWithValue }) => {
  const { query = "" } = filters;
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    const data: Product[] = response.data; //اینجا اومدم از try استفاده کردم

    const filterData = data.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    const menProducts = filterData.filter((product) =>
      product.title.toLowerCase().includes("men")
    );

    const womenProducts = filterData.filter((product) =>
      product.title.toLowerCase().includes("women")
    );

    return { all: filterData, men: menProducts, women: womenProducts };
  } catch (err: unknown) {
    if (err instanceof Error) {
      // err از نوع Error هست، پس message رو می‌تونیم استفاده کنیم
      return rejectWithValue(err.message);
    }
    // اگه err از نوع Error نبود
    return rejectWithValue("Error fetching data");
  }
});

export default FetchData;
