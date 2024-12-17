import { createSlice } from "@reduxjs/toolkit";

export type ItemValue = {
  title: string;
  id: number;
  price: number;
  quantity: number;
  image: string;
  rate: number;
  totalPrice: number;
};

type InitailStateValue = {
  item: ItemValue[];
  totalPrice: number;
  totalQuantity: number;
};

const initialStateValue: InitailStateValue = {
  item: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const roundToDecimals = (num: number, decimal: number = 2): number => {
  return parseFloat(num.toFixed(decimal));
};

const itemsSlice = createSlice({
  name: "items",
  initialState: initialStateValue,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.item.push({
          ...newItem,
          quantity: 1,
          totalPrice: roundToDecimals(newItem.price),
        });
        state.totalPrice = roundToDecimals(state.totalPrice + newItem.price);
      } else {
        state.totalPrice = roundToDecimals(state.totalPrice + newItem.price);
        existingItem.totalPrice = roundToDecimals(
          existingItem.totalPrice + newItem.price
        );
        existingItem.quantity += 1;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload.id;
      const existingItem = state.item.find((item) => item.id === itemId);

      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice = roundToDecimals(
          state.totalPrice - existingItem.price
        );

        if (existingItem.quantity === 1) {
          state.item = state.item.filter((item) => item.id !== itemId);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice = roundToDecimals(
            existingItem.totalPrice - existingItem.price
          );
        }
      }
      if (state.item.length === 0) {
        state.totalPrice = 0;
        state.totalQuantity = 0;
      }
    },
  },
});

export const itemsAction = itemsSlice.actions;

export default itemsSlice;
