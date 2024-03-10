import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types/Car";

export interface IInitialState {
  cars: ICar[];
  trigger: boolean;
}

const initialState: IInitialState = {
  cars: [],
  trigger: false,
};

const carsSlice = createSlice({
  name: "carsSlice",
  initialState,
  reducers: {
    updateById: (state, action: PayloadAction<ICar>) => {
      state.trigger = !state.trigger;
    },
    deleteById: (state, action: PayloadAction<ICar["id"]>) => {
      state.trigger = !state.trigger;
    },
    create: (state, action: PayloadAction<Omit<ICar, "id">>) => {
      state.trigger = !state.trigger;
    },
    setCars: (state, action: PayloadAction<ICar[]>) => {
      state.cars = action.payload;
    },
  },
});

const { reducer: carsReducer, actions } = carsSlice;

const carsActions = {
  ...actions,
};

export { carsReducer, carsActions };
