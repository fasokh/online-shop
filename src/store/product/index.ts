import { createSlice } from "@reduxjs/toolkit";
// import { ItemValue } from "../items";
import FetchData from "../actionCenter";
import { ItemValue } from "../actionCenter";

export const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

type ProductType = {
  all: ItemValue[];
  men: ItemValue[];
  women: ItemValue[];
  status: string;
};

const initailStateProduct: ProductType = {
  all: [],
  men: [],
  women: [],
  status: STATUS.IDLE,
};

const productStateSlice = createSlice({
  name: "product",
  initialState: initailStateProduct,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(FetchData.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.all = action.payload.all;
        state.men = action.payload.men;
        state.women = action.payload.women;
      })
      .addCase(FetchData.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const productAction = productStateSlice.actions;

export default productStateSlice;
