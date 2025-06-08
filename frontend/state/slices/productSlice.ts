import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps, products } from "../products";

export interface ProductSlice {
  products: ProductProps[];
  cartItems: ProductProps[];
  quantity: number;
}

const initialState: ProductSlice = {
  products: [...products],
  cartItems: [],
  quantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductProps>) => {
      const productId = action.payload.id;
      if (state.cartItems.find((item) => item.id === productId)) {
        return;
      }
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.quantity = 0;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setQuantity } = productSlice.actions;
export default productSlice.reducer;
