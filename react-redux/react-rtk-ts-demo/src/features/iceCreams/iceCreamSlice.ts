import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
type InitialState = {
  numOfIceCreams: number;
};
const initialState: InitialState = { numOfIceCreams: 20 };
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state = initialState) => {
      state.numOfIceCreams--;
    },
    restocked: (state = initialState, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});
export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
