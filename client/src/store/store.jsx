import { configureStore } from "@reduxjs/toolkit";
import { categories } from "./service/categoryService";
import { products } from "./service/productService";
import { users } from "./service/userService";

export const store = configureStore({
  reducer: {
    [categories.reducerPath]: categories.reducer,
    [products.reducerPath]: products.reducer,
    [users.reducerPath]: users.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categories.middleware)
      .concat(products.middleware)
      .concat(users.middleware),
});
