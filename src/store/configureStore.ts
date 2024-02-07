import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../api";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

//Middleware - это функции, которые могут обрабатывать действия перед тем, как они достигнут редюсера.
