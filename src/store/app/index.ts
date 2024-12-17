import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../items";
import productStateSlice from "../product";
import phoneSlice from "../phoneNumber";

const rootReducer = {
  items: itemsSlice.reducer,
  product: productStateSlice.reducer,
  phone: phoneSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
