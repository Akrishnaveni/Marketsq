import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showOrderForm: false,
  orderComplete: false,
  bookingDetails: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    toggleOrderForm(state) {
      state.showOrderForm = !state.showOrderForm;
    },
    completeOrder(state, action) {
      state.orderComplete = true;
      state.bookingDetails = action.payload;
    },
    resetOrder(state) {
      state.showOrderForm = false;
      state.orderComplete = false;
      state.bookingDetails = {};
    },
  },
});

export const {
  toggleOrderForm,
  completeOrder,
  resetOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
