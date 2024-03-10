import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer, episodesReducer } from "./slices";

const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
