import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
