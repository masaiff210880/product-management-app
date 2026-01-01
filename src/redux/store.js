import { configureStore } from "@reduxjs/toolkit";
import { productManagementApi } from "../server/api";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    [productManagementApi.reducerPath]: productManagementApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productManagementApi.middleware),
});
