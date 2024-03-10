import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IEpisode } from "../../interfaces/episodes";
import { episodesService } from "../../services/episodesService";
import { AxiosError } from "axios";

interface IInitialState {
  episodes: IEpisode[];
  pagination: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  } | null;

  currentEpisode: string;
}

const initialState: IInitialState = {
  episodes: [],
  pagination: null,
  currentEpisode: "",
};

const getAll = createAsyncThunk(
  "episodesSlice/getAll",
  async (payload: { page?: number }, { rejectWithValue }) => {
    try {
      const { data } = await episodesService.getAll(payload);
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const episodesSlice = createSlice({
  name: "episodesSlice",
  initialState,
  reducers: {
    setCurrentEpisode: (state, { payload }) => {
      state.currentEpisode = payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.episodes = payload.results || [];
      state.pagination = payload.info || null;
    }),
});

const { reducer: episodesReducer, actions } = episodesSlice;

const episodesActions = {
  ...actions,
  getAll,
};

export { episodesReducer, episodesActions };
