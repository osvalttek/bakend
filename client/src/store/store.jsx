import { configureStore } from "@reduxjs/toolkit";
import { categories } from "./service/categoryService";
import { products } from "./service/productService";

export const store = configureStore({
  reducer: {
    [categories.reducerPath]: categories.reducer,
    [products.reducerPath]: products.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categories.middleware)
      .concat(products.middleware),
});
