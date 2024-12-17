import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PhoneState = {
  phoneNumber: string;
};

const initialState: PhoneState = {
  phoneNumber: "",
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setPhoneNumber } = phoneSlice.actions;

export default phoneSlice;
